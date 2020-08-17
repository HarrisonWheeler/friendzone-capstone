<template>
  <div class="gamesMainPage row justify-content-center mt-4">
    <div class="col-10">
      <form class="text-center my-2">
        <div class="input-group mb-3 shadow-lg">
          <div class="input-group-prepend">
            <button class="btn btn-primary" type="button" id="button-addon2">SEARCH</button>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="SEARCH ALL GAMES..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
      </form>
    </div>
    <div class="row justify-content-center">
      <games v-for="game in games" :gameData="game" :key="game.id" />
      <div class="col-12 m-3">
        <button
          type="button"
          class="btn btn-primary text-center shadow-lg px-1"
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
          class="btn btn-primary text-center shadow-lg"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          @click="nextPage"
        >
          NEXT
          <i class="fa fa-angle-double-right fa fa-1x"></i>
        </button>
      </div>
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
    };
  },
  mounted() {
    this.$store.dispatch("getGames");
  },
  computed: {
    games() {
      return this.$store.state.games;
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
  },
  components: {
    Games,
  },
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.616) !important;
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