<template>
  <div class="friendDashboard row justify-content-center text-light py-2">
    <div v-if="!friendData">
      <h1>Loading...</h1>
    </div>
    <div v-if="friendData" class="col-12 col-md-3 mt-2">
      <div class="card shadow-lg text-center bg-gradient border border-dark p-3">
        <div class="card shadow-lg bg-card-gradient p-2">
          <h2 class="text-center text-shadow mb-3">{{friendData.name}}</h2>
          <img
            v-if="friendData.picture"
            class="mb-4 mx-auto rounded-circle border border-dark shadow-lg img-fluid img-size"
            :src="friendData.picture"
            alt
          />
          <img
            v-if="!friendData.picture"
            class="mb-2 mx-auto rounded-circle img-fluid img-size"
            src="https://lh3.googleusercontent.com/proxy/fprp02E8T3_-8ChbSQT-gCogAMmtkcdEKqXjXhGgqS4xdhYgRsVAkajQcNdoSbRZbhm0IqbsYX6Uo-QH46-FkqQ2jizN63jkexMk7ZOzR70AiSsuC1j_1IsZI8xzTIPtrBLXVicq"
          />
          <!-- v-if="!profile.following.some(followed => followed.id == friendData._id)" -->
          <div v-if="profile.email != friendData.email" class="text-center mb-3">
            <i
              :class="voteUp() ? 'votedGreen' : ''"
              class="fa fa-thumbs-o-up fa fa-2x mr-3 cursor"
              @click="vote(1)"
            ></i>
            <i
              :class="voteDown() ? 'votedRed' : ''"
              class="fa fa-thumbs-o-down fa fa-2x ml-3 cursor"
              @click="vote(-1)"
            ></i>
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
                  class="fas fa-desktop text-warning cursor hover"
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
                  class="fab fa-xbox text-success cursor hover"
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
                  class="fab fa-playstation text-info cursor hover"
                ></i>
              </div>
              <div
                class="col-1 text-danger cursor hover"
                :class="friendData.consoles.nintendo == 'nintendo' || !friendData.consoles.nintendo ? '' : 'nintendo-shadow'"
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
          <p v-if="friendData.following.length < 1" class="mb-2 text-shadow cursor hover">
            <u>
              <b>FOLLOWING</b>
            </u>
            <br />
            <b>{{friendData.following.length}}</b>
          </p>
          <p @click="followingModal" v-else class="mb-2 text-shadow cursor hover">
            <u>
              <b>FOLLOWING</b>
            </u>
            <br />
            <b>{{friendData.following.length}}</b>
          </p>
          <p v-if="follows < 1" class="mb-2 text-shadow cursor hover">
            <u>
              <b>FOLLOWERS</b>
            </u>
            <br />
            <b>{{follows.length}}</b>
          </p>
          <p v-else @click="followersModal" class="mb-2 text-shadow cursor hover">
            <u>
              <b>FOLLOWERS</b>
            </u>
            <br />
            <b>{{follows.length}}</b>
          </p>
          <div v-if="profile.email != friendData.email">
            <button
              v-if="!profile.following.some(followed => followed.id == friendData._id)"
              @click="follow"
              class="btn btn-block border border-info btn-outline-info mt-4"
            >
              <b>+</b>
              FOLLOW
            </button>
            <button
              v-else
              class="btn btn-block border border-danger btn-outline-danger mt-4"
              @click="unfollow"
            >UNFOLLOW</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="friendData" class="col-10 col-md-8 px-0 mt-2">
      <div class="row shadow-lg bg-gradient border border-dark ml-md-2 mb-2 p-3">
        <h4 class="col-12 text-shadow">
          <u>GAMES FOLLOWING</u>
        </h4>
        <div class="row overflow width mx-1">
          <FollowedGames v-for="game in friendData.games" :key="game.id" :gameData="game" />
        </div>
      </div>
      <div class="row card shadow-lg bg-gradient borde border-dark ml-md-2 my-3 h-45 p-2">
        <h4 class="text-shadow">
          <u>MY GAME CLIPS:</u>
        </h4>
        <h1 class="my-4 text-shadow">COMING SOON......</h1>
      </div>
    </div>
    <ProfileModal id="id">
      <h1 class="text-shadow" slot="header">FOLLOWING</h1>
      <div slot="body">
        <div class="col-12">
          <div v-for="user in friendData.following" :key="user.id">
            <div class="row text-left p-3 m-2 shadow-lg card cursor bg-card-gradient">
              <h1 @click="routeToDash(user._id)" class="mb-0 text-shadow">
                <img
                  class="img-fluid w-25 rounded shadow-lg"
                  v-if="user.picture"
                  :src="user.picture"
                />
                {{user.name}}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </ProfileModal>
    <ProfileModal id="two">
      <h1 class="text-shadow" slot="header">FOLLOWERS</h1>
      <div slot="body">
        <div class="col-12">
          <div v-for="user in follows" :key="user.id">
            <div class="row text-left p-3 m-2 shadow-lg card cursor bg-card-gradient">
              <h1 @click="routeToDash(user._id)" class="mb-0 text-shadow">
                <img
                  class="img-fluid w-25 rounded shadow-lg"
                  v-if="user.picture"
                  :src="user.picture"
                />
                {{user.name}}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </ProfileModal>
  </div>
</template>


<script>
import FollowedGames from "../components/FollowedGames";
import ProfileModal from "../components/ProfileModal";
import swal from "../components/SwalService.js";
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
    this.$store.dispatch("getMyProfile", this.profile._id);
  },
  computed: {
    friendData() {
      return this.$store.state.friendDashboard;
    },
    profile() {
      return this.$store.state.profile;
    },
    follows() {
      return this.$store.state.profileFollowers || [];
    },
    followers() {
      return this.$store.state.activeGame;
    },
  },
  methods: {
    vote(vote) {
      let payload = {
        voted: {
          name: this.$auth.userInfo.email,
          voteType: vote,
        },
        voterRep: this.profile.rep,
        id: this.$route.params.id,
      };
      this.$store.dispatch("votes", payload);
    },
    follow() {
      if (this.friendData.following != this.$auth.userInfo.email) {
        this.$store.dispatch("follow", {
          id: this.profile._id,
          following: this.$route.params.id,
        });
        swal.toast("Followed");
      }
    },
    unfollow() {
      this.$store.dispatch("unfollow", {
        id: this.profile._id,
        following: this.$route.params.id,
      });
      swal.toast("Unfollowed");
    },
    setDisplayGamerTag(console) {
      if (this.displayGamerTag == console) {
        this.displayGamerTag = "";
      } else this.displayGamerTag = console;
    },
    openDeetz(id) {
      this.$router.push({ name: "GameDetails", params: { id: id } });
    },
    followingModal() {
      $("#id").modal("show");
    },
    followersModal() {
      $("#two").modal("show");
    },
    routeToDash(userId) {
      $("#id").modal("hide");
      $("#two").modal("hide");
      this.$router.push({ name: "friendDashboard", params: { id: userId } });
    },
    voteUp() {
      let test = this.friendData.voted.some((user) =>
        user.name == this.profile.email && user.voteType == 1
          ? "votedGreen"
          : ""
      );

      return test;
    },
    voteDown() {
      let test = this.friendData.voted.some((user) =>
        user.name == this.profile.email && user.voteType == -1 ? "votedRed" : ""
      );

      return test;
    },
  },
  components: {
    ProfileModal,
    FollowedGames,
  },
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
.img-size {
  height: 12rem;
  width: 12rem;
  object-fit: cover;
  object-position: center;
}

.game-size {
  min-height: 10rem;
  object-fit: cover;
  object-position: center;
}
.cursor {
  cursor: pointer;
}
.hover:hover {
  font-size: 1rem;
  text-shadow: 0 0.75rem 0.75rem rgba(0, 0, 0, 0.616) !important;
}
.fa-thumbs-o-up:hover {
  color: rgb(1, 218, 1);
  font-size: 3rem;
  text-shadow: 0 0rem 0.75rem rgb(1, 218, 1) !important;
}
.fa-thumbs-o-down:hover {
  color: red;
  font-size: 3rem;
  text-shadow: 0 0rem 0.75rem red !important;
}

.votedGreen {
  color: rgb(1, 218, 1);
  font-size: 3rem;
  text-shadow: 0 0rem 0.75rem rgb(1, 218, 1) !important;
}
.votedRed {
  color: red;
  font-size: 3rem;
  text-shadow: 0 0rem 0.75rem red !important;
}
</style>