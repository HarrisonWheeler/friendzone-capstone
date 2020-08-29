<template>
  <div class="card rounded games col-12 col-md-2 text-white m-2 shadow-lg px-0">
    <div class="embed-responsive embed-responsive-4by3">
      <img
        :src="gameData.background_image"
        class="card-img-top embed-responsive-item cursor"
        @click="openDeetz(gameData.id)"
      />
    </div>
    <div class="card-body rounded-bottom bg-gradient p-2">
      <h3 class="mt-1">{{gameData.name || ''}}</h3>
      <p
        class="mb-0"
      >{{gameData.genres[0] ? gameData.genres[0].name:''}}{{gameData.genres[1] ?'/'+ gameData.genres[1].name:''}}</p>
      <p
        class="mb-0"
        :class="gameData.rating >= 4 ? 'text-success' : 'text-danger'"
      >Rating: {{Math.floor(gameData.rating)}}/5</p>
      <p class="text-warning mb-0">Metacritic Score: {{gameData.metacritic}}</p>
      <p class="mb-2" @click="platformVisible = !platformVisible">
        <u class="cursor">Available Platforms</u>
      </p>
      <p class="mb-2" v-show="platformVisible">
        <span
          v-for="(data,index) in gameData.platforms"
          :key="JSON.stringify(data.platform)"
        >{{data.platform ? data.platform.name: ''}}{{index < gameData.platforms.length -1 ? ", " : ""}}</span>
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

.card {
  border: none;
}
img.embed-responsive-item {
  object-fit: cover;
}

.bg-gradient {
  background: rgb(90, 90, 90);
  background: radial-gradient(
    circle,
    rgba(90, 90, 90, 1) 0%,
    rgba(35, 35, 35, 1) 100%
  );
}
.cursor {
  cursor: pointer;
}
</style>