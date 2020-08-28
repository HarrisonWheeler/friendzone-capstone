<template>
  <div
    class="col-12 col-md-6 chat-room card border border-dark bg-secondary shadow-lg pb-1 px-4 pt-3 m-4"
  >
    <div
      class="card bg-white overflow border border-dark p-1 mx-md-1 height shadow-lg text-dark"
      id="chatWindow"
    >
      <div v-for="m in messages" :key="m.id" class="chat-message">
        <h6
          v-if="m.profile && m.profile[0].name != profile.name"
          class="text-left ml-2"
          @click="timer = !timer"
        >
          {{m.profile[0].name}}
          <br />
          <small v-if="timer">{{new Date(m.time).toLocaleString()}}</small>
          <small class="badge badge-pill badge-success text-height p-3">{{m.message}}</small>
        </h6>
        <h6 v-else-if="m.profile " class="text-right mr-2" @click="timer = !timer">
          {{m.profile[0].name}}
          <br />
          <small class="badge badge-pill badge-info text-height p-3">{{m.message}}</small>
          <small v-if="timer">{{new Date(m.time).toLocaleString()}}</small>
        </h6>
        <h6 v-else class="text-right bot-height mr-1" @click="timer = !timer">
          <br />
          <small class="badge badge-pill badge-warning bot-height">{{m.message}}</small>
        </h6>
      </div>
    </div>
    <form @submit="sendMessage">
      <div class="input-group my-3 rounded shadow-lg">
        <input
          v-model="newChat"
          type="text"
          class="form-control py-0 border border-dark"
          placeholder="Enter New Message..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-dark" type="submit" id="button-addon2">SEND</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "chat-room",
  props: ["gameData"],
  data() {
    return {
      newChat: "",
      timer: false,
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
      if (this.$store.state.messages.length > 0) {
        let chatWindow = document.getElementById("chatWindow");
        this.$nextTick(function () {
          chatWindow.scrollTo(0, chatWindow.scrollHeight);
        });
        return this.$store.state.messages;
      } else {
        return this.$store.state.messages;
      }
    },
  },
  methods: {
    sendMessage() {
      event.preventDefault();
      this.$store.dispatch("sendMessage", {
        room: this.gameData,
        eventName: "newMessage",
        payload: this.newChat,
        profile: this.profile,
        time: new Date(),
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
.bg-card-gradient {
  background: rgb(90, 90, 90);
  background: radial-gradient(
    circle,
    rgba(90, 90, 90, 1) 0%,
    rgba(35, 35, 35, 1) 100%
  );
}
.height {
  min-height: 35vh;
  max-height: 35vh;
}
.border-dark {
  border-color: #000000 !important;
  border-width: medium !important;
}
.overflow {
  overflow-y: scroll;
  overflow-x: hidden;
}
.text-height {
  font-size: 1.25rem;
  word-break: break-all;
  display: inline-table;
  white-space: normal;
}
.bot-height {
  font-size: 1.25rem;
  word-break: break-all;
  display: inline-table;
  white-space: normal;
}
@media only screen and (max-width: 768px) {
  .text-height {
    font-size: 1rem;
  }
  .text-right,
  .text-left {
    font-size: 0.75rem;
  }
  .bot-height {
    font-size: 0.75rem;
  }
}
</style>