<template>
  <transition name="fade">
    <div class="flip-container m-3" :class="{flip: flipped}">
      <div class="flipper">
        <div class="front card rounded flippedGame text-white shadow-lg">
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
        <div v-if="searchedGameData" class="back card rounded flippedGame text-white shadow-lg m-2">
          <div class="embed-responsive embed-responsive-4by3">
            <img
              :src="searchedGameData.background_image"
              class="card-img-top embed-responsive-item cursor"
              @click="openDeetz(searchedGameData.id)"
            />
          </div>
          <div class="card-body rounded-bottom bg-gradient p-2">
            <h3 class="mt-1">{{searchedGameData.name}}</h3>
            <p
              class="mb-0"
            >{{searchedGameData.genres[0] ? searchedGameData.genres[0].name:''}}{{searchedGameData.genres[1] ?'/'+ searchedGameData.genres[1].name:''}}</p>
            <p
              class="mb-0"
              :class="searchedGameData.rating >= 4 ? 'text-success' : 'text-danger'"
            >Rating: {{Math.floor(searchedGameData.rating)}}/5</p>
            <p class="text-warning mb-0">Metacritic Score: {{searchedGameData.metacritic}}</p>
            <p class="mb-2" @click="platformVisible = !platformVisible">
              <u class="cursor">Available Platforms</u>
            </p>
            <p class="mb-2" v-show="platformVisible">
              <span
                v-for="(data,index) in searchedGameData.platforms"
                :key="JSON.stringify(data.platform)"
              >{{data.platform ? data.platform.name: ''}}{{index < searchedGameData.platforms.length -1 ? ", " : ""}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: "flippedGame",
  props: ["gameData", "searchedGameData"],
  data() {
    return {
      platformVisible: false,
      name: "",
    };
  },
  computed: {
    flipped() {
      return this.$store.state.flipped;
    },
  },
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
/* entire container, keeps perspective */
.flip-container {
  perspective: 1000px;
}
/* flip the pane when hovered */
.flip-container.flip .flipper,
.flip-container.hover .flipper {
  transform: rotateY(180deg);
}
.flip-container,
.front,
.back {
  width: min(90vw, 20rem);
  height: 26rem;
}
/* flip speed goes here */
.flipper {
  transition: 0.5s;
  transform-style: preserve-3d;
  position: relative;
}
/* hide back of pane5 during swap */
.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
/* front pane, placed above back */
.front {
  z-index: 2;
  /* for firefox 31 */
  transform: rotateY(0deg);
}
/* back, initially hidden pane */
.back {
  transform: rotateY(180deg);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.25s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.cursor {
  cursor: pointer;
}
</style>