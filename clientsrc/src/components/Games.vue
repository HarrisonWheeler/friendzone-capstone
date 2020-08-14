<template>
  <div class="card rounded games col-2 text-white m-2 shadow-lg px-0">
    <div class="embed-responsive embed-responsive-4by3">
      <img
        :src="gameData.background_image"
        class="card-img-top embed-responsive-item"
        @click="openDeetz(gameData.id)"
      />
    </div>
    <div class="card-body rounded-bottom bg-secondary-25 p-2">
      <h3 class="mt-1">{{gameData.name}}</h3>
      <p class="mb-0">{{gameData.genres[0].name}}/{{gameData.genres[1].name}}</p>
      <p
        class="mb-0"
        :class="gameData.rating >= 4 ? 'text-success' : 'text-danger'"
      >Rating: {{Math.floor(gameData.rating)}}/5</p>
      <p class="text-warning mb-0">Metacritic Score: {{gameData.metacritic}}</p>
      <p class="mb-2" @click="platformVisible = !platformVisible">
        <u>Available Platforms</u>
      </p>
      <p class="mb-2" v-show="platformVisible">
        <span
          v-for="(data,index) in gameData.platforms"
          :key="data.platform.name"
        >{{data.platform.name}}{{index < gameData.platforms.length -1 ? ", " : ""}}</span>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "games",
  props: ["gameData"],
  data() {
    return {
      platformVisible: false,
      name: "",
    };
  },
  computed: {},
  methods: {
    // platforms() {
    //   let platforms = [];
    //   let gamePlatforms = this.gameData.platforms;
    //   for (let i = 0; i < gamePlatforms.length; i++) {
    //     platforms.push(this.gameData.platforms[i].platform.name);
    //   }
    //   return platforms.toString();
    // },
    openDeetz(id) {
      this.$router.push({ name: "GameDetails", params: { id: id } });
    },
  },
  components: {},
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.616) !important;
}

/* .bg-secondary-trans {
  background-color: #e0e0e004 !important;
} */
.card {
  border: none;
}
img.embed-responsive-item {
  object-fit: cover;
}
</style>