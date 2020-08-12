import { api } from "./AxiosService"
import router from '../router/index'




export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async getDashboard({ commit, dispatch }, id) {
      let res = await api.get("user")
      console.log(res.data);
      commit("setDashboard", res.data)
    }

  }

}
