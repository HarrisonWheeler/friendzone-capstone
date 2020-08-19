<template>
  <div class="gamesMainPage row justify-content-center mt-4 container-fluid">
    <div class="col-10">
      <form class="text-center my-2 ml-2 ml-md-0" @submit="findGames">
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
        class="btn btn-primary text-center shadow-lg py-2 px-2 ml-3"
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
        class="btn btn-primary text-center shadow-lg ml-2 py-2 px-4"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
        @click="nextPage"
      >
        NEXT
        <i class="fa fa-angle-double-right fa fa-1x"></i>
      </button>
    </div>
    <div class="row justify-content-center ml-3 ml-md-0" v-if="searchGames.length > 0">
      <games v-for="game in searchGames" :gameData="game" :key="game.id" />
    </div>
    <div class="row justify-content-center ml-3 ml-md-0" v-else>
      <games v-for="game in games" :gameData="game" :key="game.id" />
    </div>
  </div>
</template>


<script>
import Games from "../components/Games";
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
      this.searchedGames = true;
      this.$store.dispatch("getSearchedGames", this.query);
      this.query = "";
    },
  },
  components: {
    Games,
  },
};
</script>


<style scoped>
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