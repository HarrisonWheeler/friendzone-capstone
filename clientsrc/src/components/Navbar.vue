<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-secondary bg-gradient shadow-lg p-2">
    <a class="navbar-brand" href="#">
      <h3>FRIENDZONE</h3>
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
          <router-link :to="{ name: 'home' }" class="nav-link">HOME</router-link>
        </li>
        <li class="nav-item" v-if="$auth.isAuthenticated">
          <router-link :to="{ name: 'dashboard' }" class="nav-link">MY DASHBOARD</router-link>
        </li>
        <li class="nav-item" v-if="$auth.isAuthenticated">
          <router-link class="nav-link" :to="{ name: 'games' }">GAMES</router-link>
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
        <form class="form-inline my-2 my-lg-0 mx-1" @submit.prevent="findProfiles">
          <div class="input-group border-primary">
            <input
              v-model="query"
              type="text"
              class="form-control"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" id="button-addon2">SEARCH</button>
            </div>
          </div>
        </form>
        <span class="navbar-text">
          <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
          <button class="btn btn-danger" @click="logout" v-else>logout</button>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:3000",
  withCredentials: true,
});
export default {
  name: "Navbar",
  data() {
    return {
      query: "",
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
</style>