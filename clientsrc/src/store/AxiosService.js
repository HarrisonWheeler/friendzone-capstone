import Axios from "axios";

//Allows axios to work locally or live
let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

export const api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export const gameApi = Axios.create({
  baseURL: "https://api.rawg.io/api/games?page_size=100",
  timeout: 6000,
})


