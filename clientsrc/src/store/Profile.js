import { api } from "./AxiosService"
import router from '../router/index'




export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async getMyProfile({ commit, dispatch }) {
      let res = await api.get("user")
      console.log(res.data);
      dispatch("getDashboard", res.data)
    },
    async getOtherProfile({ commit, dispatch }, id) {
      let res = await api.get("user")
      console.log(res.data);
      dispatch("getDashboard", res.data._id)
    }

  }

}
