import { gameApi } from "./AxiosService"
import router from '../router/index'


export default {
    actions: {
        async getGames({ commit, dispatch }) {
            try {
                let res = await gameApi.get("")
                console.log(res.data.results)
                commit("setGames", res.data.results)
            } catch (error) {
                console.error(error);
            }
        }
    }
}