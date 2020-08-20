<template>
  <nav
    class="navbar container-fluid sticky-top navbar-expand-lg navbar-secondary bg-gradient shadow-lg p-2"
  >
    <a class="navbar-brand" href="#">
      <h3 class="text-shadow">FRIENDZONE</h3>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor03"
      aria-controls="navbarColor03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto text-light">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link text-shadow hover">HOME</router-link>
        </li>
        <li class="nav-item" v-if="$auth.isAuthenticated">
          <router-link :to="{ name: 'dashboard' }" class="nav-link text-shadow hover">MY DASHBOARD</router-link>
        </li>
        <li class="nav-item" v-if="$auth.isAuthenticated">
          <router-link class="nav-link text-shadow hover" :to="{ name: 'Games' }">GAMES</router-link>
        </li>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0 mx-1 shadow-lg" @submit.prevent="onInput">
          <div class="input-group border-primary">
            <autocomplete
              v-model="query"
              :items="profiles"
              type="text"
              @input="onInput"
              @result="onResult"
              input-class="form-control"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-primary border border-secondary"
                type="submit"
                id="button-addon2"
              >SEARCH</button>
            </div>
          </div>
        </form>
        <span class="navbar-text">
          <button
            class="btn btn-outline-success shadow-lg"
            @click="login"
            v-if="!$auth.isAuthenticated"
          >LOGIN</button>
          <button
            class="btn btn-outline-danger border border-danger shadow-lg"
            @click="logout"
            v-else
          >LOGOUT</button>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { api, gameApi } from "../store/AxiosService";
import Autocomplete from "../components/Autocomplete";
let _api = axios.create({
  baseURL: "https://localhost:3000",
  withCredentials: true,
});
export default {
  name: "Navbar",
  data() {
    return {
      query: "",
      profiles: [],
    };
  },
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
      this.$router.push({ name: "dashboard" });
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
    async logout() {
      await this.$auth.logout({ returnTo: window.location.origin });
    },

    findProfiles() {
      this.$store.dispatch("searchDashboard", this.query);
      this.query = "";
    },
    onInput(query) {
      this.autocompleteError = "";
      if (!query.length) {
        return;
      }
      if (this.delay) {
        clearTimeout(this.delay);
      }
      this.delay = setTimeout(async () => {
        this.profiles = [];
        this.delay = null;
        await this.findUsers(query);
        await this.findGames(query);
      }, 250);
    },
    async findUsers(query) {
      let res = await api.get("profile/find?q=" + query);
      this.profiles = res.data.map((u) => {
        return {
          text: u.name,
          profile: true,
          html: `<div class="d-flex align-items-center">
              <img class="mr-1" src="${u.picture}"/>
              <b class="mr-1">${u.name}</b>
            </div>
          `,
          data: u,
        };
      });
    },
    async findGames(query) {
      let newQuery = query.toLowerCase().replace(/ /g, "-");
      let res = await gameApi.get("games?search=" + newQuery);
      this.profiles = [
        ...this.profiles,
        ...res.data.results.map((u) => {
          return {
            text: u.name,
            html: `<div class="d-flex align-items-center">
              <img class="mr-1" src="${u.background_image}"/>
              <b class="mr-1">${u.name}</b>
            </div>
          `,
            data: u,
            game: true,
          };
        }),
      ];
    },
    async onResult(selected) {
      if (selected.result.profile) {
        return this.$router.push({
          name: "friendDashboard",
          params: { id: selected.result.data._id },
        });
      } else if (selected.result.game) {
        return this.$router.push({
          name: "GameDetails",
          params: { id: selected.result.data.id },
        });
      }
      console.log("you picked something", arguments);
    },
  },
  components: {
    Autocomplete,
  },
};
</script>

<style scoped >
.navbar .nav-item.active .nav-link {
  background-color: rgb(39 43 48);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
}
.navbar .nav-link:hover,
.navbar .nav-link:focus {
  background-image: none;
  background-repeat: no-repeat;
  -webkit-filter: none;
  filter: none;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
}
.shadow-lg {
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.616) !important;
}

.bg-gradient {
  background: rgb(38, 38, 38);
  background: linear-gradient(
    0deg,
    rgba(38, 38, 38, 1) 0%,
    rgba(55, 55, 55, 1) 50%,
    rgba(33, 32, 32, 1) 100%
  );
}
.text-shadow {
  text-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.616) !important;
}
.hover:hover {
  font-size: 1rem;
  text-shadow: 0 0.75rem 0.75rem rgba(0, 0, 0, 0.616) !important;
}
</style>