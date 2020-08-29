import { api } from "./AxiosService"
import router from '../router/index'




export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async getOtherProfile({ commit, dispatch }, id) {
      let res = await api.get("user")
      console.log(res.data);
      dispatch("getDashboard", res.data._id)
    },
    async createProfile({ commit, dispatch }, userData) {
      let res = await api.post("user", userData)
      commit("setDashboard", res.data)
    }

  }

}
