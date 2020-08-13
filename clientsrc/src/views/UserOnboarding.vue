<template>
  <div class="dashboard row justify-content-center py-4 mt-3">
    <!-- <div class="col-3 mt-4">
      <div class="card shadow-lg text-left bg-secondary p-3 h-100">
        <h2>ENTER NAME HERE...</h2>
        <img class="mb-4" src="//placehold.it/200x200" alt />
        <h5>REP SCORE:</h5>
        <p>GAMERTAGS:</p>
        <p>FOLLOWERS:</p>
        <p>FOLLOWING:</p>
      </div>
    </div>
    <div class="col-8 px-0 mt-4">
      <div class="row card shadow-lg bg-secondary ml-2 mb-2 h-50 p-2">
        <h4>
          <u>GAMES FOLLOWED:</u>
        </h4>
      </div>
      <div class="row card shadow-lg bg-secondary ml-2 h-50 p-2">
        <h4>
          <u>MY GAME CLIPS:</u>
        </h4>
        <h1>COMING SOON......</h1>
      </div>
    </div>-->
    <h1>ONBOARDING</h1>
    <profileModal id="id">
      <div slot="body">
        <input
          v-model="userName"
          type="text"
          class="form-control text-wrap my-2"
          placeholder="Enter Username...."
        />
        <input
          v-model="imgUrl"
          type="text"
          class="form-control text-wrap"
          placeholder="Enter Profile Picture Url...."
        />
        <div class="input-group">
          <input
            v-model="targetTag"
            type="text"
            class="form-control my-2"
            aria-label="Text input with dropdown button"
            placeholder="Enter GamerTag...."
          />
          <div class="input-group-prepend my-2">
            <button
              class="btn btn-dark dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >PICK YOUR PLATFORM</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" v-if="gamerTags.pc == 'pc' " @click="saveTag('pc')">PC</a>
              <a
                class="dropdown-item"
                v-if="gamerTags.xbox == 'xbox' "
                @click="saveTag('xbox')"
              >XBOX</a>
              <a
                class="dropdown-item"
                v-if="gamerTags.playstation == 'playstation' "
                @click="saveTag('playstation')"
              >PLAYSTATION</a>
              <a
                class="dropdown-item"
                v-if="gamerTags.nintendo == 'nintendo' "
                @click="saveTag('nintendo')"
              >NINTENDO</a>
            </div>
          </div>
        </div>
        <button @click="editProfile" class="btn btn-success btn-block py-1">Submit</button>
      </div>
    </profileModal>
  </div>
</template>


<script>
import vSelect from "vue-select";
import ProfileModal from "../components/ProfileModal";
export default {
  name: "dashboard",
  data() {
    return {
      gamerTags: {
        pc: "pc",
        playstation: "playstation",
        xbox: "xbox",
        nintendo: "nintendo",
      },
      targetTag: "",
      userName: "",
      imgUrl: "",
    };
  },
  mounted() {
    $("#id").modal("show");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    saveTag(options) {
      if (options == this.gamerTags.pc && this.targetTag) {
        this.gamerTags.pc = this.targetTag;
        this.targetTag = "";
      } else if (options == this.gamerTags.nintendo && this.targetTag) {
        this.gamerTags.nintendo = this.targetTag;
        this.targetTag = "";
      } else if (options == this.gamerTags.xbox && this.targetTag) {
        this.gamerTags.xbox = this.targetTag;
        this.targetTag = "";
      } else if (options == this.gamerTags.playstation && this.targetTag) {
        this.gamerTags.playstation = this.targetTag;
        this.targetTag = "";
      }
    },
    editProfile() {
      let payload = {
        name: this.userName,
        picture: this.imgUrl,
        consoles: this.gamerTags,
        profileId: this.profile._id,
        firstTimeUser: false,
      };
      this.$store.dispatch("editProfile", payload);
      $("#id").modal("hide");
      this.$router.push({ name: "dashboard" });
    },
  },
  components: { ProfileModal, vSelect },
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.25rem 1.2rem rgba(126, 126, 126, 0.616) !important;
}
.option-height {
  height: 2rem;
}
</style>