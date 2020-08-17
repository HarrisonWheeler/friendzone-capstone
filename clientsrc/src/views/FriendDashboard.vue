<template>
  <div class="friendDashboard row justify-content-center py-4 mt-3">
    <div v-if="!friendData">
      <h1>Loading...</h1>
    </div>
    <div v-if="friendData" class="col-3 mt-4">
      <div class="card shadow-lg text-left bg-secondary p-3 h-100">
        <h2 class="text-center m-3">{{friendData.name}}</h2>
        <img
          v-if="friendData.picture"
          class="mb-2 rounded-circle border border-dark img-fluid"
          :src="friendData.picture"
          alt
        />
        <img
          v-if="!friendData.picture"
          class="mb-2 rounded-circle img-fluid"
          src="https://lh3.googleusercontent.com/proxy/fprp02E8T3_-8ChbSQT-gCogAMmtkcdEKqXjXhGgqS4xdhYgRsVAkajQcNdoSbRZbhm0IqbsYX6Uo-QH46-FkqQ2jizN63jkexMk7ZOzR70AiSsuC1j_1IsZI8xzTIPtrBLXVicq"
        />
        <div class="text-center mb-3">
          <i class="fa fa-thumbs-o-up fa fa-2x mr-3" @click="vote('up')"></i>
          <i class="fa fa-thumbs-o-down fa fa-2x ml-3" @click="vote('down')"></i>
        </div>
        <h5>REPUTATION: {{friendData.rep}}</h5>
        <div>
          <p class="mb-1">
            <b>GAMERTAGS:</b>
          </p>
          <div class="row">
            <div class="col-1">
              <i
                v-if="friendData.consoles.pc == 'pc' || !friendData.consoles.pc"
                class="fas fa-desktop text-warning"
              ></i>
              <i
                @click="setDisplayGamerTag(friendData.consoles.pc)"
                v-else-if="friendData.consoles.pc"
                class="fas fa-desktop text-warning"
              ></i>
            </div>
            <div class="col-1">
              <i
                v-if="friendData.consoles.xbox == 'xbox' || !friendData.consoles.xbox"
                class="fab fa-xbox text-success"
              ></i>
              <i
                @click="setDisplayGamerTag(friendData.consoles.xbox)"
                v-else-if="friendData.consoles.xbox"
                class="fab fa-xbox text-success"
              ></i>
            </div>
            <div class="col-1">
              <i
                v-if="friendData.consoles.playstation == 'playstation' || !friendData.consoles.playstation"
                class="fab fa-playstation text-info"
              ></i>
              <i
                @click="setDisplayGamerTag(friendData.consoles.playstation)"
                v-else-if="friendData.consoles.playstation"
                class="fab fa-playstation text-info"
              ></i>
            </div>
            <div class="col-1 text-danger">
              <div
                v-if="friendData.consoles.nintendo == 'nintendo' || !friendData.consoles.nintendo"
              >
                <span class="iconify" data-icon="mdi-nintendo-switch" data-inline="false"></span>
              </div>
              <div
                @click="setDisplayGamerTag(friendData.consoles.nintendo)"
                v-else-if="friendData.consoles.nintendo"
              >
                <span class="iconify" data-icon="mdi-nintendo-switch" data-inline="false"></span>
              </div>
            </div>
          </div>
          <h5 v-if="displayGamerTag">{{displayGamerTag}}</h5>
        </div>
        <!-- TODO followers not hard coded -->
        <p class="mb-1">
          <b>FOLLOWING: {{friendData.following.length}}</b>
        </p>
        <p class="mb-1">
          <b>FOLLOWERS: 0</b>
        </p>
        <button @click="follow" class="btn btn-block border border-info btn-outline-info mt-4">
          <b>+</b> FOLLOW
        </button>
      </div>
    </div>
    <div v-if="friendData" class="col-8 px-0 mt-4">
      <div class="row card shadow-lg bg-secondary ml-2 mb-2 h-50 p-2">
        <h4>
          <u>GAMES FOLLOWED:</u>
        </h4>
      </div>
      <div class="row card shadow-lg bg-secondary ml-2 h-45 p-2">
        <h4>
          <u>MY GAME CLIPS:</u>
        </h4>
        <h1 class="my-4">COMING SOON......</h1>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "friendDashboard",
  data() {
    return {
      displayGamerTag: "",
    };
  },
  mounted() {
    this.$store.dispatch("getDashboard", this.$route.params.id);
  },
  computed: {
    friendData() {
      return this.$store.state.friendDashboard;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    vote(vote) {
      if (this.friendData.votedNames != this.$auth.userInfo.email) {
        if (vote == "up") {
          this.friendData.rep++;
        } else if (vote == "down") {
          this.friendData.rep--;
        }
        this.$store.dispatch("votes", {
          rep: this.friendData.rep,
          votedNames: this.$auth.userInfo.email,
          id: this.$route.params.id,
        });
      }
    },
    follow() {
      if (this.friendData.following != this.$auth.userInfo.email) {
        this.$store.dispatch("follow", {
          // rep: this.friendData.rep
          following: this.profile._id,
          id: this.$route.params.id,
        });
      }
    },
    setDisplayGamerTag(console) {
      if (this.displayGamerTag == console) {
        this.displayGamerTag = "";
      } else this.displayGamerTag = console;
    },
  },
  components: {},
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.25rem 1.2rem rgba(126, 126, 126, 0.616) !important;
}

.border-dark {
  border-color: #272b30 !important;
  border-width: medium !important;
}
</style>