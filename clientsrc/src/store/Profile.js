import { api } from "./AxiosService"
import router from '../router/index'




export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async getMyProfile({ commit, dispatch }, email) {
      let res = await api.get("user/" + email.toLowerCase())
      debugger
      console.log(res.data);
      dispatch("getDashboard", res.data)
    },
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
