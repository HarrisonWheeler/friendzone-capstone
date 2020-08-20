<template>
  <div class="chat-room">
    <div v-for="m in activeRoom.messages" :key="m.id" class="chat-message">
      <p>{{profile.name}}: {{m.body}}</p>
    </div>
    <form @submit="sendMessage">
      <div class="input-group mb-1">
        <input
          v-model="newChat"
          type="text"
          class="form-control"
          placeholder="Enter New Message..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-secondary" type="submit" id="button-addon2">SEND</button>
        </div>
      </div>
    </form>
    <button
      type="button"
      class="btn btn-outline-danger py-1 border border-danger"
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
  },
  methods: {
    leaveChat() {},
    sendMessage() {
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
</style>