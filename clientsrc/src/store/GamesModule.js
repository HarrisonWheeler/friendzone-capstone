import { api, gameApi } from "./AxiosService"


const key = 'key=31f60583228346a2a149f61fade66f99'

export default {
    actions: {
        async getGames({ commit }, page = 1) {
            try {
                let res = await gameApi.get("games?page=" + page + '&' + key)
                console.log(res.data.results)
                commit("setGames", res.data.results)
            } catch (error) {
                console.error(error);
            }
        },
        async getActiveGame({ commit }, gameId) {
            try {
                let res = await gameApi.get("games/" + gameId + '?' + key)
                console.log(res.data);
                commit("setActiveGame", res.data)
            } catch (error) {
                console.error(error)
            }
        },
        async getSearchedGames({ commit }, query) {
            try {
                let newQuery = query.toLowerCase().replace(/ /g, '%20');
                console.log(newQuery)
                let game = await gameApi.get('games?search=' + newQuery + '&' + key)
                commit("setSearchedGames", game.data.results)
                commit("setFlipped", true)
                return game
            } catch (error) {
                console.error(error);
            }
        },

        async followGame({ commit }, payload) {
            try {
                let res = await api.post("profile/" + payload.id + "/games", payload)
                commit("setUser", res.data)
                commit("setGameFollowers", payload.followers)

            } catch (error) {
                console.error(error);
            }
        },
        async unfollowGame({ commit }, payload) {

            try {
                let res = await api.delete("profile/" + payload.id + "/games/" + payload.gameId)
                commit("setUser", res.data)
            } catch (error) {
                console.error(error);
            }
        },
        async showFollowedGames({ commit }, gameId) {
            try {
                let res = await api.get("profile/games/" + gameId + "/users")
                console.log(res.data);
                let payload = {
                    gameId: gameId,
                    data: res.data
                }
                commit("setGameFollowers", payload)
            } catch (error) {
                console.error(error)
            }
        }
    },
}