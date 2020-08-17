import { api } from "./AxiosService"
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
      let res = await api.put("profile/votes/" + payload.id, payload)
      console.log(res);
      dispatch("getDashboard", payload.id)
    },
    async follow({ commit, dispatch }, payload) {
      let res = await api.put("profile/following/" + payload.id, payload)
      console.log(res);
      dispatch("getDashboard", payload.id)
    },

    async searchDashboard({ commit, dispatch }, query) {
      let res = await api.get('profile/name/' + query)
      console.log(res.data[0].id);
      commit("setFriendDashboard", res.data[0])

      router.push({ name: 'friendDashboard', params: { id: res.data[0].id } })
    },
    async getDashboard({ commit, dispatch }, id) {
      let res = await api.get("profile/" + id)
      console.log(res.data);
      commit("setDashboard", res.data)
    },
    async editProfile({ commit, dispatch }, payload) {
      let res = await api.put("profile/" + payload.profileId, payload)
      console.log(res);

      commit("setUser", res.data)

    }
  }

}
