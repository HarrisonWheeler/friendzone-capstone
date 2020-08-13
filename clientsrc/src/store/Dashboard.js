import { api } from "./AxiosService"
import router from '../router/index'




export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async searchDashboard({ commit, dispatch }, query) {
      let res = await api.get('profile/name/' + query)
      console.log(res.data);
      commit("setFriendDashboard", res.data)
      router.push({ name: 'friendDashboard' })
    },
    async getDashboard({ commit, dispatch }, id) {
      let res = await api.get("profile/" + id)
      console.log(res.data);
      commit("setFriendDashboard", res.data)
    },
    async editProfile({ commit, dispatch }, payload) {
      let res = await api.put("profile/" + payload.profileId, payload)
      console.log(res);

      commit("setUser", res.data)

    }
  }

}
