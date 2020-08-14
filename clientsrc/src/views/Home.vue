<template>
  <div class="home row justify-content-center container-fluid ml-0">
    <div class="col-12 shadow-lg px-0">
      <img class="img-fluid mt-3" src="../assets/game-image.jpg" alt />
      <div class="card"></div>
    </div>
    <div class="row justify-content-center mt-4">
      <games v-for="game in games" :gameData="game" :key="game.id" />
    </div>
  </div>
</template>


<script>
import Games from "../components/Games";
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getGames");
  },
  computed: {
    games() {
      return this.$store.state.games;
    },
  },
  methods: {},
  components: {
    Games,
  },
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.616) !important;
}
</style>