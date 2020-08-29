<template>
  <div class="game-details justify-content-center row">
    <div class="col-11 card text-light m-3 shadow-lg px-0">
      <div class="card-body bg-gradient p-3">
        <h3>{{activeGame.name}}</h3>
        <hr />
        <p class="mb-2">{{activeGame.description_raw}}</p>
        <h6 class>{{activeGame.genres[0].name}}/{{activeGame.genres[1].name}}</h6>
        <h6
          :class="activeGame.rating >= 4 ? 'text-success' : 'text-danger'"
        >Rating: {{Math.floor(activeGame.rating)}}/5</h6>
        <p class="text-warning mb-0">Metacritic Score: {{activeGame.metacritic}}</p>
        <p @click="platformVisible = !platformVisible" class="cursor">
          <u>Available Platforms</u>
        </p>
        <p v-if="platformVisible">
          <span
            v-for="(data,index) in activeGame.platforms"
            :key="data.platform.name"
            class
          >{{data.platform.name}}{{index < activeGame.platforms.length -1 ? ", " : ""}}</span>
        </p>
        <div class="row mx-1 justify-content-center">
          <img
            :src="activeGame.background_image"
            class="img-fluid rounded w-25 m-md-1 shadow-lg"
            alt
          />
          <video
            v-if="activeGame.clip"
            :src="activeGame.clip.clip"
            controls
            width="400"
            class="rounded shadow-md-lg p-4 p-md-0 mx-4 mx-md-2"
          ></video>
          <img
            :src="activeGame.background_image_additional"
            class="img-fluid rounded w-25 m-md-1 shadow-lg"
            alt
          />
        </div>
        <div class="row justify-content-center">
          <chat-room
            v-if="joinedChat && profile.games.some(game => game.gameId == activeGame.id)"
            :gameData="activeGame.id"
          />
        </div>
        <div v-if="profile.games.some(game => game.gameId == activeGame.id)">
          <button
            v-if="!joinedChat"
            class="border border-success btn btn-rounded btn-outline-success btn-block mt-3 py-1"
            @click="joinChat"
          >JOIN CHAT</button>
          <button
            v-else
            class="border border-warning btn btn-rounded btn-outline-warning btn-block mt-3 py-1"
            @click="joinedChat = !joinedChat"
          >HIDE CHAT</button>
        </div>
        <button
          v-if="!profile.games.some(game => game.gameId == activeGame.id)"
          class="border border-info btn btn-rounded btn-outline-info btn-block mt-3 py-1"
          @click="followGame(activeGame.id)"
        >+Follow Game</button>
        <button
          v-else
          class="border border-danger btn btn-rounded btn-outline-danger btn-block mt-1 py-1"
          @click="unfollowGame(activeGame.id)"
        >Unfollow Game</button>
      </div>
    </div>
  </div>
</template>


<script>
import chatRoom from "..//components/ChatRoom";
import swal from "../components/SwalService.js";
export default {
  name: "game-details",
  data() {
    return {
      platformVisible: false,
      joinedChat: false,
    };
  },
  mounted() {
    this.$store.dispatch("getActiveGame", this.$route.params.id);
  },
  computed: {
    activeGame() {
      return this.$store.state.activeGame;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    joinChat() {
      this.$store.state.messages = [];
      this.joinedChat = true;
      let payload = {
        gameId: this.activeGame.id,
        name: this.activeGame.name,
        user: this.profile.name,
      };
      this.$store.dispatch("joinRoom", payload);
    },

    followGame(id) {
      this.activeGame.followers += 1;
      this.$store.dispatch("followGame", {
        id: this.profile.id,
        name: this.activeGame.name,
        gameId: this.activeGame.id,
        backgroundImg: this.activeGame.background_image,
        followers: +1,
      });
      swal.toast("Followed");
    },
    unfollowGame(id) {
      this.activeGame.followers -= 1;
      this.$store.dispatch("unfollowGame", {
        id: this.profile.id,
        name: this.activeGame.name,
        gameId: this.activeGame.id,
        backgroundImg: this.activeGame.background_image,
        followers: -1,
      });
      swal.toast("Unfollowed", "");
    },
  },
  components: {
    chatRoom,
  },
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.616) !important;
}
.cursor {
  cursor: pointer;
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
.bg-gray {
  background: rgb(56, 56, 56);
}
@media only screen and (max-width: 768px) {
  .w-25 {
    width: 100% !important;
  }
  video {
    width: 115%;
  }
}
</style>