<template>
  <div class="home row justify-content-center">
    <games v-for="game in games" :gameData="game" :key="game.id" />
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
</style>