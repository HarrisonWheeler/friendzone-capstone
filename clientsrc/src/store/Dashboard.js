import { api, gameApi } from "./AxiosService"
import router from '../router/index'




export default {
  mounted() {

    this.$store.dispatch("getProfileGames", this.$route.params.id);
  },
  state: {

  },
  mutations: {

  },
  actions: {
    async getProfileGames(id) {

      let res = await api.get("profile/" + id + "/games")

    },

    async votes({ commit, dispatch }, payload) {
      let res = await api.put("profile/" + payload.id + "/votes", payload)
      console.log(res);
      dispatch("getDashboard", payload.id)
    },
    async follow({ commit, dispatch }, payload) {
      let res = await api.put("profile/" + payload.id + "/following", payload)
      console.log(res);
      dispatch("getDashboard", payload.id)
    },

    async searchDashboard({ commit, dispatch }, query) {

      let profile = await api.get('profile/name/' + query)
      // console.log(profile.data[0].id);
      if (profile.data.length > 0) {

        commit("setFriendDashboard", profile.data[0])
        router.push({ name: 'friendDashboard', params: { id: profile.data[0].id } })
      }
      else {

        let newQuery = query.toLowerCase().replace(/ /g, '-');
        console.log(newQuery)
        let game = await gameApi.get('games/' + newQuery)
        commit("setActiveGame", game)
        router.push({ name: 'GameDetails', params: { id: game.data.id } })
        dispatch("getActiveGame", game.data.id)

      }
    },
    async getDashboard({ commit, dispatch }, id) {

      let res = await api.get("profile/user/" + id)
      console.log(res.data);
      commit("setFriendDashboard", res.data)
    },
    async editProfile({ commit, dispatch }, payload) {
      let res = await api.put("profile/" + payload.profileId, payload)
      console.log(res);

      commit("setUser", res.data)
      router.push({ name: "dashboard" });
    }
  }

}
