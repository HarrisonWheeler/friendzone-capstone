import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import { api } from "./AxiosService"
import dashBoardModule from "../store/Dashboard"
import profileModule from "../store/Profile"
import { profileService } from './ProfileService'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    profile: {},
    games: [],
    gameDetails: {},
    dashboard: {}

  },
  mutations: {
    setUser(state, user) {
      state.profile = user
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
    async getProfile({ commit }, cb = () => { }) {
      try {
        profileService.getProfile(cb)
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
