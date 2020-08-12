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
        <input type="text" class="form-control text-wrap my-2" placeholder="Enter Username...." />
        <input
          type="text"
          class="form-control text-wrap"
          placeholder="Enter Profile Picture Url...."
        />
        <div class="input-group">
          <input
            v-model="gamerTags"
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
              <a class="dropdown-item" @change="gamerTags.pc">PC</a>
              <a class="dropdown-item" @change="gamerTags.xbox">XBOX</a>
              <a class="dropdown-item" @change="gamerTags.playstation">PLAYSTATION</a>
              <a class="dropdown-item" @change="gamerTags.nintendo">NINTENDO</a>
            </div>
          </div>
        </div>
      </div>
    </profileModal>
  </div>
</template>


<script>
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
  methods: {},
  components: { ProfileModal },
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.25rem 1.2rem rgba(126, 126, 126, 0.616) !important;
}
</style>