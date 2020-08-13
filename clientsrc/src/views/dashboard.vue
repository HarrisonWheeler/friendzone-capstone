<template>
  <div class="dashboard row justify-content-center py-4 mt-3">
    <div class="col-3 mt-4">
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
    </div>
    <div v-if="profile.id && profile.firstTimeUser">
      <profileModal id="id">
        <div slot="body">
          <input type="text" class="form-control text-wrap" placeholder="Enter Username...." />
          <input
            type="text"
            class="form-control text-wrap"
            placeholder="Enter Profile Picture Url...."
          />
          <div class="input-group">
            <!-- check out vue select -->
            <input
              v-model="gamerTagInput"
              @input="gamerTags[targetTag] = gamerTagInput"
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >PICK YOUR PLATFORM</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" @change="targetTag = 'pc'">PC</a>
                <a class="dropdown-item" @change="gamerTags.xbox">XBOX</a>
                <a class="dropdown-item" @change="gamerTags.playstation">PLAYSTATION</a>
                <a class="dropdown-item" @change="gamerTags.nintendo">NINTENDO</a>
              </div>
            </div>
          </div>
        </div>
      </profileModal>
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
      gamerTags: {
        pc: "",
        playstation: "",
        xbox: "",
        nintendo: "",
      },
      targetTag: "pc",
    };
  },
  mounted() {},
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {},
  components: { ProfileModal, vSelect },
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.25rem 1.2rem rgba(126, 126, 126, 0.616) !important;
}
</style>