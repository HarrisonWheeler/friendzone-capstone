<template>
  <div class="chat-room card shadow-lg pb-1 px-3 pt-3 bg-gradient">
    <div class="card bg-white border border-dark overflow p-1 height shadow-lg">
      <div v-for="m in messages" :key="m.id" class="chat-message">
        <p>{{profile.name}}: {{m}}</p>
      </div>
    </div>
    <form @submit="sendMessage">
      <div class="input-group mb-1 mb-4">
        <input
          v-model="newChat"
          type="text"
          class="form-control py-0 my-2"
          placeholder="Enter New Message..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-secondary my-2" type="submit" id="button-addon2">SEND</button>
        </div>
      </div>
    </form>
    <button
      type="button"
      class="btn btn-outline-danger py-1 mb-4 border border-danger"
      @click="leaveChat"
    >LEAVE CHAT</button>
  </div>
</template>


<script>
export default {
  name: "chat-room",
  props: ["gameData"],
  data() {
    return {
      newChat: "",
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    activeRoom() {
      return this.$store.state.activeRoom;
    },
    messages() {
      return this.$store.state.messages;
    },
  },
  methods: {
    leaveChat() {},
    sendMessage() {
      debugger;
      this.$store.dispatch("sendMessage", {
        room: this.gameData,
        eventName: "newMessage",
        payload: this.newChat,
      });
      this.newChat = "";
    },
  },
  components: {},
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.616) !important;
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
.height {
  min-height: 25vh;
}
.border-dark {
  border-color: #000000 !important;
  border-width: medium !important;
}
</style>