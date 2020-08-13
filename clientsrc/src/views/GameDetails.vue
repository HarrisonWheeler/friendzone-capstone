<template>
  <div class="game-details container-fluid">
    <div class="row justify-content-center pt-5">
      <div
        class="card border-dark text-light mb-3 shadow-lg"
        style="min-width: 40rem; max-width: 45rem;"
      >
        <h3 class="card-header bg-secondary">{{activeGame.name}}</h3>
        <div class="card-body">
          <h4 class>{{activeGame.genres[0].name}}/{{activeGame.genres[1].name}}</h4>
          <h4
            :class="activeGame.rating >= 4 ? 'text-success' : 'text-danger'"
          >Rating: {{Math.floor(activeGame.rating)}}/5</h4>
          <p class="text-warning">Metacritic Score: {{activeGame.metacritic}}</p>
          <p @click="platformVisible = !platformVisible" class="cursor">
            <u>Available Platforms</u>
          </p>
          <p v-if="platformVisible">
            <span
              v-for="(data,index) in activeGame.platforms"
              :key="data.platform.name"
              class
            >{{data.platform.name}}{{index < activeGame.platforms.length -1 ? ", " : ""}}</span>
          </p>
          <video :src="activeGame.clip.clip" autoplay loop controls width="400" class="rounded"></video>
          <div class="row mx-1">
            <img :src="activeGame.background_image" class="img-thumbnail w-50" alt />
            <img :src="activeGame.background_image_additional" class="img-thumbnail w-50" alt />
          </div>
          <small>{{activeGame.description_raw}}</small>
        </div>
        <div class="card-footer">
          <button class="btn btn-rounded btn-primary btn-block" @click="followGame">Follow Game</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "game-details",
  data() {
    return {
      platformVisible: false,
    };
  },
  mounted() {
    this.$store.dispatch("getActiveGame", this.$route.params.id);
  },
  computed: {
    activeGame() {
      return this.$store.state.activeGame;
    },
  },
  methods: {
    followGame() {},
  },
  components: {},
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.25rem 2rem rgba(126, 126, 126, 0.616) !important;
}
.cursor {
  cursor: pointer;
}
</style>