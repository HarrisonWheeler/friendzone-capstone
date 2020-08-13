<template>
  <div class="dashboard row justify-content-center py-4 mt-3">
    <div class="col-3 mt-4">
      <div class="card shadow-lg text-left bg-secondary p-3 h-100">
        <h2 class="text-center m-2">{{profile.name}}</h2>
        <img class="mb-4 rounded-circle border border-dark img-fluid" :src="profile.picture" alt />
        <img v-if="!profile.picture" class="mb-4 rounded-circle" src="//placehold.it/150x150" alt />

        <h5>REPUTATION: {{profile.rep}}</h5>
        <p class="mb-1">
          <b>GAMERTAGS:</b>
        </p>
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

.border-dark {
  border-color: #272b30 !important;
  border-width: medium !important;
}
</style>