import Axios from "axios";

//Allows axios to work locally or live
export const baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

export const api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 5000,
  withCredentials: true
});

let gameKey = "https://api.rawg.io/api"

export const gameApi = Axios.create({
  baseURL: gameKey,
  timeout: 10000,
})
