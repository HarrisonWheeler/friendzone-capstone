<template>
  <div class="game-details justify-content-center row">
    <div class="col-11 card border border-secondary text-light m-3 shadow-lg px-0">
      <h3 class="card-header bg-secondary">{{activeGame.name}}</h3>
      <div class="card-body">
        <p class="mb-2">{{activeGame.description_raw}}</p>
        <h6 class>{{activeGame.genres[0].name}}/{{activeGame.genres[1].name}}</h6>
        <h6
          :class="activeGame.rating >= 4 ? 'text-success' : 'text-danger'"
        >Rating: {{Math.floor(activeGame.rating)}}/5</h6>
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
        <div class="row mx-1 justify-content-center">
          <img :src="activeGame.background_image" class="img-thumbnail w-25 m-1" alt />
          <video :src="activeGame.clip.clip" autoplay loop controls width="400" class="rounded"></video>
          <img :src="activeGame.background_image_additional" class="img-thumbnail w-25 m-1" alt />
        </div>
      </div>
      <div class="card-footer">
        <button
          class="border border-info btn btn-rounded btn-outline-info btn-block"
          @click="followGame(activeGame.id)"
        >+Follow Game</button>
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
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    followGame(id) {
      this.activeGame.followers++;
      this.$store.dispatch("followGame", {
        id: this.profile.id,
        name: this.activeGame.name,
        gameId: this.activeGame.id,
        backgroundImg: this.activeGame.background_image,
      });
    },
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