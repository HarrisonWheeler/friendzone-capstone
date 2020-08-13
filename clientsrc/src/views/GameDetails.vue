<template>
  <div class="game-details">
    <div class="row">
      <h1>{{activeGame.name}}</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: "game-details",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getActiveGame", this.$route.params.id);
  },
  computed: {
    activeGame() {
      return this.$store.state.activeGame;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>