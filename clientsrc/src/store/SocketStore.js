import io from "socket.io-client"
import { baseUrl } from "./AxiosService";
import { $auth } from "@bcwdev/auth0-vue";
import store from ".";

let socket = {};
function socketDispatch(action, data = {}) {
    socket.emit("dispatch", { action, data })
}
export const socketStore = {
    actions: {
        initializeSocket({ commit, dispatch }) {
            socket = io(baseUrl);

            socket.on("CONNECTED", data => {
                console.log(data.message + " Let the villany commence")
                dispatch("authenticateSocket")
            })
            socket.on("AUTHENTICATED", (user) => { console.log(user) })
            socket.on("roomData", (roomData) => {
                console.log(roomData);
                store.commit("setActiveRoom", roomData)
            })
            socket.on("newMessage", (data) => {
                console.log(data);
                let messages = [...store.state.messages, data]
                store.commit("setMessages", messages)
            })
            socket.on("new-user", user => {
                let messages = [...store.state.messages, user]
                store.commit("setMessages", messages)
            })

        },
        sendMessage({ commit, dispatch }, data) {

            socket.emit("dispatch", { action: "messageRoom", data: data })
        },
        joinRoom({ commit, dispatch }, payload) {
            socket.emit("dispatch", { action: "JoinRoom", data: payload })
        },
        leaveRoom({ commit, dispatch }, roomName) {
            socket.emit("disconnect", { action: "leaveRoom", data: roomName })

        },
        authenticateSocket({ commit, dispatch }) {
            socketDispatch("Authenticate", $auth().bearer)
        }
    }
}