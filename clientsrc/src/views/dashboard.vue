<template>
  <div class="dashboard row justify-content-center py-4">
    <div class="col-3 mt-4">
      <div class="card shadow-lg text-left bg-secondary p-3 h-100">
        <div class="text-right">
          <i v-if="!editContent" @click="edit" class="fa fa-pencil fa-2x"></i>
          <i v-if="editContent" @click="saveContent" class="fa fa-floppy-o fa-2x"></i>
        </div>
        <h2 v-show="!editContent" class="text-center m-2">{{profile.name}}</h2>
        <h2 v-show="editContent" v-if="!editContent" class="text-center m-2">{{editedUsername}}</h2>
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
          class="mb-4 rounded-circle border border-dark img-fluid"
          :src="profile.picture"
          alt
        />
        <img
          v-if="profile.picture"
          v-show="editContent"
          class="mb-4 rounded-circle border border-dark img-fluid"
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

        <h5>REPUTATION: {{profile.rep}}</h5>
        <div v-if="!editContent">
          <p class="mb-1">
            <b>GAMERTAGS:</b>
          </p>
          <div class="row">
            <div
              class="col-1"
              :class="profile.consoles.pc == 'pc' || !profile.consoles.pc ? '' : 'console-shadow'"
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
              :class="profile.consoles.xbox == 'xbox' || !profile.consoles.xbox ? '' : 'console-shadow'"
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
              :class="profile.consoles.playstation == 'playstation' || !profile.consoles.playstation ? '' : 'console-shadow'"
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
              :class="profile.consoles.nintendo == 'nintendo' || !profile.consoles.nintendo ? '' : 'console-shadow'"
            >
              <span
                v-if="profile.consoles.nintendo == 'nintendo' || !profile.consoles.nintendo"
                class="iconify"
                data-icon="mdi-nintendo-switch"
                data-inline="false"
              ></span>
              <span
                @click="setDisplayGamerTag(profile.consoles.nintendo)"
                v-else-if="profile.consoles.nintendo"
                class="iconify"
                data-icon="mdi-nintendo-switch"
                data-inline="false"
              ></span>
            </div>
          </div>
          <h5 v-if="displayGamerTag">{{displayGamerTag}}</h5>
        </div>
        <!-- TODO followers not hard coded -->
        <p class="mb-1">
          <b>FOLLOWING: {{profile.following.length}}</b>
        </p>
        <p class="mb-1">
          <b>FOLLOWERS: 0</b>
        </p>
      </div>
    </div>
    <div class="col-8 px-0 mt-4">
      <div class="row card shadow-lg bg-secondary ml-2 mb-2 h-50 p-2">
        <h4>
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
      <div class="row card shadow-lg bg-secondary ml-2 my-3 h-50 p-2">
        <h4>
          <u>MY GAME CLIPS:</u>
        </h4>
        <h1 class="my-4">COMING SOON......</h1>
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
      debugger;
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
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.616) !important;
}

.border-dark {
  border-color: #272b30 !important;
  border-width: medium !important;
}
.console-shadow {
  box-shadow: 0 0 0.25rem rgba(204, 198, 198, 0.616) !important;
}
</style>