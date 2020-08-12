<template>
  <div class="dashboard row justify-content-center py-4 mt-3">
    <div class="col-3 mt-4">
      <div class="card shadow-lg text-left bg-secondary p-3 h-100">
        <h2>ENTER NAME HERE...</h2>
        <img class="mb-4" src="//placehold.it/200x200" alt />
        <h5>REP SCORE:</h5>
        <p>GAMERTAGS:</p>
        <p>FOLLOWERS:</p>
        <p>FOLLOWING:</p>
      </div>
    </div>
    <div class="col-8 px-0 mt-4">
      <div class="row card shadow-lg bg-secondary ml-2 mb-2 h-50 p-2">
        <h4>
          <u>GAMES FOLLOWED:</u>
        </h4>
      </div>
      <div class="row card shadow-lg bg-secondary ml-2 h-50 p-2">
        <h4>
          <u>MY GAME CLIPS:</u>
        </h4>
        <h1>COMING SOON......</h1>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "dashboard",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getMyProfile");
  },
  computed: {
    userData() {
      return this.$store.state.dashboard;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.25rem 1.2rem rgba(126, 126, 126, 0.616) !important;
}
</style>