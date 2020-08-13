import { api } from "./AxiosService"
import router from '../router/index'




export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async getDashboard({ commit, dispatch }, id) {
      let res = await api.get("profile")
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
