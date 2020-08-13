<template>
  <div class="card games col-2 text-white p-4 m-2 shadow-lg h-50">
    <img
      :src="gameData.background_image"
      class="card-image-top img-thumbnail align-self-center mt-1"
      @click="openDeetz(id)"
    />
    <div class="card-body">
      <h3 class="mt-3">{{gameData.name}}</h3>
      <p class>{{gameData.genres[0].name}}/{{gameData.genres[1].name}}</p>
      <p
        :class="gameData.rating > 4 ? 'text-success' : 'text-danger'"
      >Rating: {{Math.floor(gameData.rating)}}/5</p>
      <p class="text-warning">Metacritic Score: {{gameData.metacritic}}</p>
      <p @click="platformVisible = !platformVisible">
        <u>Available Platforms</u>
      </p>
      <p v-if="platformVisible">
        <span
          v-for="(data,index) in gameData.platforms"
          :key="data.platform.name"
          class
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
    openDeetz(id) {},
  },
  components: {},
};
</script>


<style scoped>
</style>