<template>
  <div class="friendDashboard row justify-content-center text-light py-2">
    <div v-if="!friendData">
      <h1>Loading...</h1>
    </div>
    <div v-if="friendData" class="col-3 mt-2">
      <div class="card shadow-lg text-center bg-gradient border border-dark p-3">
        <div class="card shadow-lg bg-card-gradient p-2">
          <h2 class="text-center text-shadow mb-3">{{friendData.name}}</h2>
          <img
            v-if="friendData.picture"
            class="mb-4 mx-2 rounded-circle border border-dark shadow-lg img-fluid"
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
          <h5 v-if="friendData.rep" class="mb-2 text-shadow">
            <u>
              <b>REPUTATION:</b>
            </u>
            <br />
            {{friendData.rep}}
          </h5>
          <h5 v-if="!friendData.rep" class="mb-2 text-shadow">
            <u>
              <b>REPUTATION:</b>
            </u>
            <br />
            <b>0</b>
          </h5>
          <div>
            <p class="mb-1 text-shadow">
              <u>
                <b>GAMERTAGS:</b>
              </u>
            </p>
            <div class="row justify-content-center mb-2">
              <div
                class="col-1"
                :class="friendData.consoles.pc == 'pc' || !friendData.consoles.pc ? '' : 'pc-shadow'"
              >
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
              <div
                class="col-1"
                :class="friendData.consoles.xbox == 'xbox' || !friendData.consoles.xbox ? '' : 'xbox-shadow'"
              >
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
              <div
                class="col-1"
                :class="friendData.consoles.playstation == 'playstation' || !friendData.consoles.playstation ? '' : 'playstation-shadow'"
              >
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
              <div
                class="col-1 text-danger"
                :class="friendData.consoles.nintendo == 'nintendo' || !profile.consoles.nintendo ? '' : 'nintendo-shadow'"
              >
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
          <p class="mb-2 text-shadow">
            <b>FOLLOWING: {{friendData.following.length}}</b>
          </p>
          <p class="mb-2 text-shadow">
            <b>FOLLOWERS: {{follows}}</b>
          </p>
          <button @click="follow" class="btn btn-block border border-info btn-outline-info mt-4">
            <b>+</b> FOLLOW
          </button>
        </div>
      </div>
    </div>
    <div v-if="friendData" class="col-8 px-0 mt-2">
      <div class="row shadow-lg bg-gradient border border-dark ml-2 mb-2 p-3">
        <h4 class="col-12 text-shadow">
          <u>GAMES FOLLOWING</u>
        </h4>
        <div class="row overflow width">
          <div
            class="card col-2 px-0 shadow-lg bg-card-gradient m-1"
            v-for="game in friendData.games"
            :key="game.name"
          >
            <div class="embed-responsive embed-responsive-4by3">
              <img :src="game.backgroundImg" class="card-img-top embed-responsive-item" alt />
            </div>
            <div class="card-body rounded-bottom bg-gradient p-1">
              <h4 class="pt-3">{{game.name}}</h4>
              <!-- <p>{{followers.followers}}</p> -->
            </div>
          </div>
        </div>
      </div>
      <div class="row card shadow-lg bg-gradient borde border-dark ml-2 my-3 h-45 p-2">
        <h4 class="text-shadow">
          <u>MY GAME CLIPS:</u>
        </h4>
        <h1 class="my-4 text-shadow">COMING SOON......</h1>
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
    this.$store.dispatch("getFollowers", this.$route.params.id);
  },
  computed: {
    friendData() {
      return this.$store.state.friendDashboard;
    },
    profile() {
      return this.$store.state.profile;
    },
    follows() {
      return this.$store.state.profileFollowers;
    },
    followers() {
      return this.$store.state.activeGame;
    },
  },
  methods: {
    vote(vote) {
      if (this.friendData.email != this.$auth.userInfo.email) {
        this.$store.dispatch("votes", {
          rep: this.friendData.rep,
          votedNames: this.$auth.userInfo.email,
          id: this.$route.params.id,
          voteType: vote,
        });
      }
    },
    follow() {
      if (this.friendData.following != this.$auth.userInfo.email) {
        this.$store.dispatch("follow", {
          // rep: this.friendData.rep
          id: this.profile._id,
          following: this.$route.params.id,
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
.width {
  width: 100%;
}
.shadow-lg {
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.616) !important;
}
.text-shadow {
  text-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.616) !important;
}

.border-dark {
  border-color: #000000 !important;
  border-width: medium !important;
}
.pc-shadow {
  text-shadow: 0 0.15rem 1rem rgba(226, 128, 0, 0.616) !important;
}
.xbox-shadow {
  text-shadow: 0 0.15rem 1rem rgba(4, 255, 67, 0.616) !important;
}
.playstation-shadow {
  text-shadow: 0 0.15rem 1rem rgb(2, 162, 255) !important;
}
.nintendo-shadow {
  text-shadow: 0 0.15rem 1rem rgba(255, 8, 8, 0.616) !important;
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
.bg-card-gradient {
  background: rgb(90, 90, 90);
  background: radial-gradient(
    circle,
    rgba(90, 90, 90, 1) 0%,
    rgba(35, 35, 35, 1) 100%
  );
}
.overflow {
  overflow-x: auto;
  flex-wrap: nowrap;
}
::-webkit-scrollbar {
  display: none;
}
</style>