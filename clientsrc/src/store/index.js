import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import { api } from "./AxiosService"
import dashBoardModule from "../store/Dashboard"
import profileModule from "../store/Profile"

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: {},
    games: [],
    gameDetails: {},
    dashboard: {}

  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setDashboard(state, data) {
      state.dashboard = data
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --

    //#endregion


    //#region -- LISTS --



    //#endregion
  },
  modules: {
    dashBoardModule,
    profileModule
  }
})
