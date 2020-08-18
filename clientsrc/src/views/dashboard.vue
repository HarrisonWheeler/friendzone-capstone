<template>
  <div class="dashboard row justify-content-center text-light py-2">
    <div v-if="!profile">
      <h1>Loading....</h1>
    </div>
    <div v-if="profile" class="col-3 mt-2">
      <div class="card shadow-lg text-center bg-gradient border border-dark p-3 h-100">
        <div class="card shadow-lg bg-card-gradient p-2">
          <div class="text-right">
            <i v-if="!editContent" @click="edit" class="fa fa-pencil fa-1x"></i>
            <i v-if="editContent" @click="saveContent" class="fa fa-floppy-o fa-1x"></i>
          </div>
          <h1 v-show="!editContent" class="text-center text-shadow mb-3">{{profile.name}}</h1>
          <h1 v-show="editContent" v-if="!editContent" class="text-center m-3">{{editedUsername}}</h1>
          <input
            v-if="editContent"
            type="text"
            class="form-control mb-3"
            v-model="editedUsername"
            required
          />
          <img
            v-if="profile.picture"
            v-show="!editContent"
            class="mb-4 mx-2 rounded-circle border border-dark shadow-lg img-fluid"
            :src="profile.picture"
            alt
          />
          <img
            v-if="profile.picture"
            v-show="editContent"
            class="mb-4 rounded-circle border border-dark shadow-lg img-fluid"
            :src="editedImg"
            aria-placeholder="Please Provide Profile image Url"
            alt
          />
          <img
            v-if="!profile.picture"
            class="mb-4 rounded-circle"
            src="https://lh3.googleusercontent.com/proxy/Q1lEAHblBW7fiO3AUQuhsni_J3_dkQGwmfyjUI8DgkNodX3DAfSRlyZtS1XKKP18xSv_v_To8zKQtwwDve9_j2wGBCECYZL0bg_WgPJRmB2QWVrSa8R7YjYLOApbj3prPtPXUoLnproe"
          />

          <input
            v-if="editContent"
            type="text"
            class="form-control mb-3"
            v-model="editedImg"
            required
          />

          <div v-if="editContent" class="my-3">
            <p class="mb-1">
              <b>GAMERTAGS:</b>
            </p>
            <div class>
              <div class="row">
                <div class="col-12 mt-3">
                  <i class="fas fa-desktop text-warning"></i>

                  <input v-model="editedPc" type="text" />
                </div>
              </div>
              <div class="row">
                <div class="col-12 mt-3">
                  <i class="fab fa-xbox text-success"></i>

                  <input v-model="editedXbox" type="text" />
                </div>
              </div>
              <div class="row">
                <div class="col-12 mt-3">
                  <i class="fab fa-playstation text-info"></i>

                  <input v-model="editedPlaystation" type="text" />
                </div>
              </div>
              <div class="row text-danger">
                <div class="col-12 mt-3">
                  <span class="iconify" data-icon="mdi-nintendo-switch" data-inline="false"></span>

                  <input v-model="editedNintendo" type="text" />
                </div>
              </div>
            </div>
          </div>

          <h5 class="mb-2 text-shadow">
            <u>
              <b>REPUTATION</b>
            </u>
            <br />
            <b>{{profile.rep}}</b>
          </h5>
          <div v-if="!editContent">
            <p class="mb-1 text-shadow">
              <u>
                <b>GAMERTAGS</b>
              </u>
            </p>
            <div class="row justify-content-center mb-2">
              <div
                class="col-1"
                :class="profile.consoles.pc == 'pc' || !profile.consoles.pc ? '' : 'pc-shadow'"
              >
                <i
                  v-if="profile.consoles.pc == 'pc' || !profile.consoles.pc"
                  class="fas fa-desktop text-warning"
                ></i>
                <i
                  @click="setDisplayGamerTag(profile.consoles.pc)"
                  v-else-if="profile.consoles.pc"
                  class="fas fa-desktop text-warning"
                ></i>
              </div>
              <div
                class="col-1"
                :class="profile.consoles.xbox == 'xbox' || !profile.consoles.xbox ? '' : 'xbox-shadow'"
              >
                <i
                  v-if="profile.consoles.xbox == 'xbox' || !profile.consoles.xbox"
                  class="fab fa-xbox text-success"
                ></i>
                <i
                  @click="setDisplayGamerTag(profile.consoles.xbox)"
                  v-else-if="profile.consoles.xbox"
                  class="fab fa-xbox text-success"
                ></i>
              </div>
              <div
                class="col-1"
                :class="profile.consoles.playstation == 'playstation' || !profile.consoles.playstation ? '' : 'playstation-shadow'"
              >
                <i
                  v-if="profile.consoles.playstation == 'playstation' || !profile.consoles.playstation"
                  class="fab fa-playstation text-info"
                ></i>
                <i
                  @click="setDisplayGamerTag(profile.consoles.playstation)"
                  v-else-if="profile.consoles.playstation"
                  class="fab fa-playstation text-info"
                ></i>
              </div>
              <div
                class="col-1 text-danger"
                :class="profile.consoles.nintendo == 'nintendo' || !profile.consoles.nintendo ? '' : 'nintendo-shadow'"
              >
                <div v-if="profile.consoles.nintendo == 'nintendo' || !profile.consoles.nintendo">
                  <span class="iconify" data-icon="mdi-nintendo-switch" data-inline="false"></span>
                </div>
                <div
                  @click="setDisplayGamerTag(profile.consoles.nintendo)"
                  v-else-if="profile.consoles.nintendo"
                >
                  <span class="iconify" data-icon="mdi-nintendo-switch" data-inline="false"></span>
                </div>
              </div>
            </div>
            <h5 v-if="displayGamerTag">{{displayGamerTag}}</h5>
          </div>
          <!-- TODO followers not hard coded -->
          <p class="mb-2 text-shadow">
            <u>
              <b>FOLLOWING</b>
            </u>
            <br />
            <b>{{profile.following.length}}</b>
          </p>
          <p class="mb-2 text-shadow">
            <u>
              <b>FOLLOWERS</b>
            </u>
            <br />
            <b>0</b>
          </p>
        </div>
      </div>
    </div>
    <div v-if="profile" class="col-8 px-0 mt-2">
      <div class="row card shadow-lg bg-gradient border border-dark ml-2 mb-2 h-50 p-2">
        <h4 class="text-shadow">
          <u>GAMES FOLLOWED:</u>
          <div v-for="game in profile.games" :key="game.name">
            <div class="col-2">
              <h4>{{game.name}}</h4>
              <img :src="game.backgroundImg" class="img-thumbnail" width="100%" alt />
              <p>{{followers.followers}}</p>
            </div>
          </div>
        </h4>
      </div>
      <div class="row card shadow-lg bg-gradient border border-dark ml-2 my-3 h-45 p-2">
        <h4 class="text-shadow">
          <u>MY GAME CLIPS:</u>
        </h4>
        <h1 class="my-4 text-shadow">COMING SOON......</h1>
      </div>
    </div>
  </div>
</template>


<script>
import vSelect from "vue-select";
import ProfileModal from "../components/ProfileModal";
export default {
  name: "dashboard",
  data() {
    return {
      editedUsername: "",
      editContent: false,
      editedImg: "",
      displayGamerTag: "",
      editedPc: "",
      editedXbox: "",
      editedPlaystation: "",
      editedNintendo: "",
    };
  },
  mounted() {},
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    followers() {
      return this.$store.state.activeGame;
    },
  },
  methods: {
    edit() {
      this.editContent = true;
      this.editedUsername = this.profile.name;
      this.editedImg = this.profile.picture;
      this.profile.consoles.pc == "pc"
        ? (this.editedPc = "")
        : (this.editedPc = this.profile.consoles.pc);
      this.profile.consoles.xbox == "xbox"
        ? (this.editedXbox = "")
        : (this.editedXbox = this.profile.consoles.xbox);
      this.profile.consoles.playstation == "playstation"
        ? (this.editedPlaystation = "")
        : (this.editedPlaystation = this.profile.consoles.playstation);
      this.profile.consoles.nintendo == "nintendo"
        ? (this.editedNintendo = "")
        : (this.editedNintendo = this.profile.consoles.nintendo);
    },
    saveContent() {
      this.editContent = false;
      let payload = {
        name: this.editedUsername,
        picture: this.editedImg,
        following: this.profile.following,
        games: this.profile.games,
        rep: this.profile.rep,
        videoClip: this.profile.videClip,
        consoles: {
          pc: this.editedPc,
          xbox: this.editedXbox,
          playstation: this.editedPlaystation,
          nintendo: this.editedNintendo,
        },
        id: this.profile._id,
        firstTimeUser: false,
      };
      this.$store.dispatch("editProfile", payload);
    },
    setDisplayGamerTag(console) {
      if (this.displayGamerTag == console) {
        this.displayGamerTag = "";
      } else this.displayGamerTag = console;
    },
  },
  components: { ProfileModal, vSelect },
};
</script>


<style scoped>
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
</style>