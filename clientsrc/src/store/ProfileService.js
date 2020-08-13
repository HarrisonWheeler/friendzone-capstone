import { api } from "./AxiosService"
import store from "./index"
import { $auth } from "@bcwdev/auth0-vue"

class ProfileService {
    constructor() {
        this.status = ""
        this.listeners = []
    }
    async getProfile(cb) {
        if (status === "done") { return cb(store.state.profile) }
        if (this.listeners.indexOf(cb) === -1) { this.listeners.push(cb) }
        if (status === "pending") { return }

        status = "pending"
        store.dispatch("setBearer", $auth().bearer);

        let res = await api.get("/profile")
        const profile = res.data

        store.commit('setUser', profile)
        this.listeners.forEach(fn => fn(profile))
        this.listeners = []
        status = "done"
    }
}

export const profileService = new ProfileService()