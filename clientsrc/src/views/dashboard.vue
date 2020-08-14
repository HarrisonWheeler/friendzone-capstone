<template>
  <div class="dashboard row justify-content-center py-4 mt-3">
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

        <h5>REPUTATION: {{profile.rep}}</h5>
        <div v-if="!profile.consoles">
          <p class="mb-1">
            <b>GAMERTAGS:</b>
          </p>
          <div class="row">
            <div class="col-1">
              <i class="fas fa-desktop"></i>
            </div>
            <div class="col-1">
              <i class="fab fa-xbox"></i>
            </div>
            <div class="col-1">
              <i class="fab fa-playstation"></i>
            </div>
            <div class="col-1">
              <span class="iconify" data-icon="mdi-nintendo-switch" data-inline="false"></span>
            </div>
          </div>
        </div>
        <div v-if="profile.consoles">
          <p class="mb-1">
            <b>GAMERTAGS:</b>
          </p>
          <div class="row">
            <div
              @click="displayGamerTag = profile.pc"
              v-show="profile.consoles"
              class="col-1 rounded border border-white"
            >
              <i class="fas fa-desktop"></i>
            </div>
            <div v-show="!profile.consoles" class="col-1">
              <i class="fas fa-desktop"></i>
            </div>
            <div
              @click="displayGamerTag = profile.xbox"
              v-show="profile.consoles"
              class="col-1 rounded border border-white"
            >
              <i class="fab fa-xbox"></i>
            </div>
            <div v-show="!profile.consoles" class="col-1">
              <i class="fab fa-xbox"></i>
            </div>
            <div
              @click="displayGamerTag = profile.playstation"
              v-show="profile.consoles"
              class="col-1 rounded border border-white"
            >
              <i class="fab fa-playstation"></i>
            </div>
            <div v-show="!profile.consoles" class="col-1">
              <i class="fab fa-playstation"></i>
            </div>
            <div
              @click="displayGamerTag = profile.nintendo"
              v-show="profile.consoles"
              class="col-1 rounded border border-white"
            >
              <span class="iconify" data-icon="mdi-nintendo-switch" data-inline="false"></span>
            </div>
            <div v-show="!profile.consoles" class="col-1">
              <span class="iconify" data-icon="mdi-nintendo-switch" data-inline="false"></span>
            </div>
          </div>

          <p v-if="displayGamerTag">{{displayGamerTag}}</p>
        </div>
        <!-- TODO followers not hard coded -->
        <p class="mb-1">
          <b>FOLLOWING: {{profile.following}}</b>
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
        </h4>
      </div>
      <div class="row card shadow-lg bg-secondary ml-2 my-3 h-45 p-2">
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
    };
  },
  mounted() {},
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    edit() {
      this.editContent = true;
      this.editedUsername = this.profile.name;
      this.editedImg = this.profile.picture;
    },
    saveContent() {
      this.editContent = false;
      let payload = {
        name: this.editedUsername,
        picture: this.editedImg,
        id: this.profile._id,
      };
      this.$store.dispatch("editProfile", payload);
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
</style>