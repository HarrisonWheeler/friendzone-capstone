<template>
  <div class="home row justify-content-center container-fluid ml-0">
    <div
      class="
        col-12
        home-img
        img-fluid
        d-flex
        justify-content-center
        shadow-lg
        px-0
        pt-2
        mt-4
      "
    >
      <div class="fade-in text-light mt-2 mb-0">
        <h1 class="text-height text-shadow outline mb-0">
          WELCOME TO THE FRIENDZONE
        </h1>
        <br />
        <h1 class="text-light sub-height text-shadow outline">
          WHERE GAMERS COME TO FIND THEIR SQUAD
        </h1>
      </div>
    </div>
    <div class="row justify-content-center mt-4" v-if="games">
      <games v-for="game in games" :gameData="game" :key="game.id" />
    </div>
  </div>
</template>


<script>
import Games from "../components/Games";
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getGames");
    setTimeout(() => window.scrollTo(0, 0), 75);
  },
  computed: {
    games() {
      return this.$store.state.games;
    },
  },
  methods: {},
  components: {
    Games,
  },
};
</script>


<style scoped>
.fade-in {
  -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 3s; /* Firefox < 16 */
  -ms-animation: fadein 3s; /* Internet Explorer */
  -o-animation: fadein 3s; /* Opera < 12.1 */
  animation: fadein 3s;
}
@keyframes fadein {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.home-img {
  background-image: url("../assets/game-image.jpg");
  background-size: cover;
  height: 100vh;
}
.shadow-lg {
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.616) !important;
}
.text-height {
  font-size: 4.34375rem;
}

.sub-height {
  font-size: 2.5rem;
}
.text-shadow {
  text-shadow: 0 1.25rem 0.5rem rgba(0, 0, 0, 0.616) !important;
}
@supports (-webkit-text-stroke: 1px black) {
  .outline {
    -webkit-text-stroke: 1.25px rgb(0, 0, 0);
  }
}
@media only screen and (max-width: 768px) {
  .text-height {
    font-size: 3rem;
  }
  .sub-height {
    font-size: 1.5rem;
  }
}
</style>