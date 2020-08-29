<template>
  <div class="gamesMainPage row justify-content-center mt-4">
    <div class="col-10">
      <form class="text-center my-2 ml-2 ml-md-0" @submit.prevent="findGames">
        <div class="input-group mb-3 shadow-lg">
          <div class="input-group-prepend">
            <button class="btn btn-primary" type="button" id="button-addon2">SEARCH</button>
          </div>
          <input
            v-model="query"
            type="text"
            class="form-control"
            placeholder="SEARCH ALL GAMES..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
      </form>
      <button
        type="button"
        class="btn btn-primary text-center shadow-lg py-1 px-2 ml-1"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
        @click="previousPage"
      >
        <i class="fa fa-angle-double-left fa fa-1x"></i>
        PREVIOUS
      </button>
      <button
        type="button"
        class="btn btn-primary text-center shadow-lg mr-4 py-1 px-4"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
        @click="nextPage"
      >
        NEXT
        <i class="fa fa-angle-double-right fa fa-1x"></i>
      </button>
    </div>

    <div class="col-12">
      <div class="d-flex flex-wrap justify-content-center">
        <flippedGame
          v-for="(game,index) in games"
          :gameData="game"
          :searchedGameData="searchGames[index]"
          :key="game.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import flippedGame from "../components/flippedGame";

export default {
  name: "gamesMainPage",
  data() {
    return {
      page: 1,
      query: "",
      searchedGames: false,
      allGamesShow: true,
    };
  },
  mounted() {
    this.$store.dispatch("getGames");
    this.$store.commit("setFlipped", false);
  },
  computed: {
    games() {
      return this.$store.state.games;
    },
    searchGames() {
      return this.$store.state.searchedGames;
    },
  },
  methods: {
    nextPage() {
      this.page++;
      this.$store.dispatch("getGames", this.page);
    },
    previousPage() {
      this.page--;
      this.$store.dispatch("getGames", this.page);
    },
    findGames() {
      this.$store.commit("setFlipped", false);
      this.searchedGames = true;
      this.$store.dispatch("getSearchedGames", this.query);
      this.query = "";
    },
  },
  components: {
    flippedGame,
  },
};
</script>


<style  scoped>
.shadow-lg {
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.616) !important;
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
</style>