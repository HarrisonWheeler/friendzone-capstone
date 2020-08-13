<template>
  <div class="friendDashboard row justify-content-center py-4 mt-3">
    <div class="col-3 mt-4">
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
          src="//placehold.it/200x200"
          alt
        />
        <div class="text-center mb-3">
          <i class="fa fa-thumbs-o-up fa fa-2x mr-3" @click="vote('up')"></i>
          <i class="fa fa-thumbs-o-down fa fa-2x ml-3" @click="vote('down')"></i>
        </div>
        <h5>REPUTATION: {{friendData.rep}}</h5>
        <p class="mb-1">
          <b>GAMERTAGS:</b>
        </p>
        <!-- TODO followers not hard coded -->
        <p class="mb-1">
          <b>FOLLOWING: {{friendData.following.length}}</b>
        </p>
        <p class="mb-1">
          <b>FOLLOWERS: 0</b>
        </p>
        <button class="btn btn-block border border-info btn-outline-info mt-4">
          <b>+</b> FOLLOW
        </button>
      </div>
    </div>
    <div class="col-8 px-0 mt-4">
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
    return {};
  },
  mounted() {
    this.$store.dispatch("getDashboard", this.$route.params.id);
  },
  computed: {
    friendData() {
      return this.$store.state.friendDashboard;
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