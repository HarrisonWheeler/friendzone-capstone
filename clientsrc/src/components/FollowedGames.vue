<template>
  <div class="followed-games card col-12 col-md-6 col-lg-3 px-0 shadow-lg bg-card-gradient m-1">
    <div>
      <img
        :src="gameData.backgroundImg"
        class="card-img-top img-fluid game-size cursor"
        alt
        @click="openDeetz(gameData.gameId)"
      />
    </div>
    <div class="card-body rounded-bottom bg-gradient p-1">
      <h4 class="pt-3">{{gameData.name}}</h4>
      <p v-if="!followedGames">
        <u>FOLLOWERS</u>
        <br />0
      </p>
      <p class="cursor hover" @click="gameModal('modal'+ gameData.gameId)" v-else>
        <b>
          <u>FOLLOWERS</u>
        </b>
        <br />
        {{followedGames.length}}
      </p>
    </div>
    <ProfileModal :id=" 'modal'+ gameData.gameId">
      <h1 class="text-shadow" slot="header">FOLLOWING</h1>
      <div slot="body">
        <div class="col-12">
          <div v-for="user in followedGames" :key="user.id">
            <div class="row text-left p-3 m-2 shadow-lg card cursor bg-card-gradient">
              <h1 @click="routeToDash(user._id,'modal'+ gameData.gameId )" class="text-left">
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
import ProfileModal from "../components/ProfileModal";
export default {
  name: "followed-games",
  props: ["gameData"],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("showFollowedGames", this.gameData.gameId);
  },
  computed: {
    followedGames() {
      return this.$store.state.gameFollowers[this.gameData.gameId] || [];
    },
  },
  methods: {
    openDeetz(id) {
      this.$router.push({ name: "GameDetails", params: { id: id } });
    },
    gameModal(id) {
      $("#" + id).modal("show");
    },
    routeToDash(userId, modalId) {
      $("#" + modalId).modal("hide");

      this.$router.push({ name: "friendDashboard", params: { id: userId } });
    },
  },
  components: { ProfileModal },
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
</style>