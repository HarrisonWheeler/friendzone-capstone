import SocketIO from "socket.io";
import auth0provider from "@bcwdev/auth0provider";
import { dbContext } from "../db/DbContext";


let rooms = {

}

class SocketService {
  io = SocketIO();
  /**
   * @param {SocketIO.Server} io
   */
  setIO(io) {
    try {
      this.io = io;
      //Server listeners
      io.on("connection", this._onConnect());
    } catch (e) {
      console.error("[SOCKETSTORE ERROR]", e);
    }
  }

  /**
   * @param {SocketIO.Socket} socket
   */
  async Authenticate(socket, bearerToken) {
    try {
      let user = await auth0provider.getUserInfoFromBearerToken(bearerToken);
      let profile = await dbContext.Profile.find({ email: user.email.toLowerCase() });
      socket["user"] = user;
      socket["profile"] = profile  //dont send user!!!!
      socket.join(user.id);
      socket.emit("AUTHENTICATED", user);
      this.io.emit("UserConnected", user.id);
    } catch (e) {
      socket.emit("error", e);
    }
  }

  /**
   * @param {SocketIO.Socket} socket
   * @param {{gameId:string,user:string}} room
   * 
   */
  JoinRoom(socket, room) {

    socket.join(room.gameId);
    rooms[room.gameId] = rooms[room.gameId] || new SocketRoom
    // @ts-ignore
    rooms[room.gameId].profiles.push(socket.profile)
    socket.emit("roomData", rooms[room.gameId])
    socket.broadcast.emit("userConnected")
    socket.emit("sendMessage")
    this.io.emit("new-user", { message: "Friendzone Bot:  " + room.user + " joined room" })
    //socket.profile
  }
  /**
   * @param {SocketIO.Socket} socket
   * @param {string} room
   */
  LeaveRoom(socket, room) {
    socket.leave(room);
  }

  /**
   * Sends a direct message to a user
   * @param {string} userId
   * @param {string} eventName
   * @param {any} payload
   */
  messageUser(userId, eventName, payload) {
    try {
      this.io.to(userId).emit(eventName, payload);
    } catch (e) { }
  }

  messageRoom(socket, { room, eventName, payload, time }) {
    this.io.to(room).emit(eventName, { message: payload, profile: socket.profile, time: time });
    //add message to rooms dictionary
  }

  _onConnect() {
    return socket => {
      this._newConnection(socket);

      //STUB Register listeners

      socket.on("dispatch", this._onDispatch(socket));
      socket.on("disconnect", this._onDisconnect(socket));
    };
  }

  _onDisconnect(socket) {
    return () => {
      try {
        if (!socket.user) {
          return;
        }
        this.io.emit("UserDisconnected", socket.user.id);
      } catch (e) { }
    };
  }

  _onDispatch(socket) {
    return (payload = {}) => {
      try {
        var action = this[payload.action];
        if (!action || typeof action != "function") {
          return socket.emit("error", "Unknown Action");
        }
        action.call(this, socket, payload.data);
      } catch (e) { }
    };
  }

  _newConnection(socket) {
    //Handshake / Confirmation of Connection
    socket.emit("CONNECTED", {
      socket: socket.id,
      message: "Successfully Connected"
    });
  }

}
class SocketRoom {
  constructor(name) {
    this.name = name
    this.profiles = []
    this.messages = []

  }
}
const socketService = new SocketService();

export default socketService;
