<template>
  <div id="app">
    <navbar />
    <div class="container-fluid bg-image">
      <transition name="fade">
        <router-view :key="$route.fullPath" />
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    try {
      await onAuth();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
      this.$store.dispatch("initializeSocket");
    } catch (err) {
      this.$router.push({ name: "home" });
    }
  },
  components: {
    Navbar,
  },
};
</script>


<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  background-image: url("./assets/bg-image.png");
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}
::-webkit-scrollbar {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
