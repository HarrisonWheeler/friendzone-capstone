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
        async getSearchedGames({ commit, dispatch }, query) {
            try {

                let newQuery = query.toLowerCase().replace(/ /g, '-');
                console.log(newQuery)
                let game = await gameApi.get('games?search=' + newQuery)
                commit("setSearchedGames", game.data.results)
            } catch (error) {
                console.error(error);
            }
        },

        async followGame({ commit, dispatch }, payload) {
            debugger
            try {
                let res = await api.post("profile/" + payload.id + "/games", payload)
                commit("setUser", res.data)
                commit("setGameFollowers", payload.followers)
            } catch (error) {
                console.error(error);
            }
        },
        async unfollowGame({ commit, dispatch }, payload) {

            try {
                let res = await api.delete("profile/" + payload.id + "/games/" + payload.gameId)
                commit("setUser", res.data)
            } catch (error) {
                console.error(error);
            }
        },
    },
}