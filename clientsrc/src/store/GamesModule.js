import { api, gameApi } from "./AxiosService"
import router from '../router/index'


export default {
    actions: {
        async getGames({ commit, dispatch }, page = 1) {
            try {
                let res = await gameApi.get("games?page=" + page)
                console.log(res.data.results)
                commit("setGames", res.data.results)
            } catch (error) {
                console.error(error);
            }
        },
        async getActiveGame({ commit, dispatch }, gameId) {
            try {
                let res = await gameApi.get("games/" + gameId)
                console.log(res.data);
                commit("setActiveGame", res.data)
            } catch (error) {
                console.error(error)
            }
        },
        followGame({ commit, dispatch }, payload) {

            try {
                api.post("profile/" + payload.id + "/games", payload)
            } catch (error) {
                console.error(error);
            }
        },
    },
}