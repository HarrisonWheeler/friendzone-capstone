<template>
  <div class="game-details justify-content-center row">
    <div class="col-11 card text-light m-3 shadow-lg px-0">
      <div class="card-body bg-gradient p-3">
        <h3>{{activeGame.name}}</h3>
        <hr />
        <p class="mb-2">{{activeGame.description_raw}}</p>
        <h6 class>{{activeGame.genres[0].name}}/{{activeGame.genres[1].name}}</h6>
        <h6
          :class="activeGame.rating >= 4 ? 'text-success' : 'text-danger'"
        >Rating: {{Math.floor(activeGame.rating)}}/5</h6>
        <p class="text-warning mb-0">Metacritic Score: {{activeGame.metacritic}}</p>
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
          <img
            :src="activeGame.background_image"
            class="img-fluid rounded w-25 m-md-1 shadow-lg"
            alt
          />
          <video
            :src="activeGame.clip.clip"
            autoplay
            loop
            controls
            width="400"
            class="rounded shadow-md-lg p-4 p-md-0 mx-4 mx-md-2"
          ></video>
          <img
            :src="activeGame.background_image_additional"
            class="img-fluid rounded w-25 m-md-1 shadow-lg"
            alt
          />
        </div>
        <button
          v-if="!profile.games.some(game => game.gameId == activeGame.id)"
          class="border border-info btn btn-rounded btn-outline-info btn-block mt-3 py-1"
          @click="followGame(activeGame.id)"
        >+Follow Game</button>
        <button
          v-else
          class="border border-info btn btn-rounded btn-outline-info btn-block mt-3 py-1"
          @click="unfollowGame(activeGame.id)"
        >Unfollow Game</button>
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
      this.activeGame.followers += 1;
      this.$store.dispatch("followGame", {
        id: this.profile.id,
        name: this.activeGame.name,
        gameId: this.activeGame.id,
        backgroundImg: this.activeGame.background_image,
        followers: +1,
      });
    },
    unfollowGame(id) {
      this.activeGame.followers -= 1;
      this.$store.dispatch("unfollowGame", {
        id: this.profile.id,
        name: this.activeGame.name,
        gameId: this.activeGame.id,
        backgroundImg: this.activeGame.background_image,
        followers: -1,
      });
    },
  },
  components: {},
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.616) !important;
}
.cursor {
  cursor: pointer;
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
.bg-gray {
  background: rgb(56, 56, 56);
}
</style>