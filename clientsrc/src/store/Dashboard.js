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
    async getMyProfile({ commit, dispatch }, id) {
      let res = await api.get("profile/" + id)
      commit("setUser", res.data)
    },

    async votes({ commit, dispatch }, payload) {
      let res = await api.put("profile/" + payload.id + "/votes", payload)
      console.log(res);
      dispatch("getDashboard", payload.id)
    },
    async follow({ commit, dispatch }, payload) {
      let res = await api.put("profile/" + payload.id + "/following", payload)
      console.log(res);
      dispatch("getFollowers", payload.following)
    },
    async getFollowers({ commit, dispatch }, id) {
      let res = await api.get('profile/' + id + '/followers')
      console.log(res.data);
      commit("setFollowers", res.data.data)
    },
    async searchDashboard({ commit, dispatch }, query) {

      let profile = await api.get('profile/name/' + query)
      // console.log(profile.data[0].id);
      if (profile.data.length > 0) {

        // commit("setFriendDashboard", profile.data[0])

        router.push({ name: 'friendDashboard', params: { id: profile.data[0].id } })
      }
      else {
        router.push({ name: 'Games' })

        let newQuery = query.toLowerCase().replace(/ /g, '-');
        let game = await gameApi.get('games?search=' + newQuery)
        commit("setSearchedGames", game.data.results)

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
