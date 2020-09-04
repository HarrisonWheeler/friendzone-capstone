<template>
  <div class="dashboard row justify-content-center py-4 mt-3">
    <div class="col-12 shadow-lg px-0">
      <img class="img-fluid mt-1" src="../assets/game-image.jpg" alt />
      <div class="card"></div>
    </div>
    <profileModal id="id">
      <div slot="body">
        <input
          v-model="userName"
          type="text"
          class="form-control text-wrap my-2 shadow-lg"
          placeholder="Enter Username...."
        />
        <input
          v-model="imgUrl"
          type="text"
          class="form-control text-wrap shadow-lg"
          placeholder="Enter Profile Picture Url...."
        />
        <div class="input-group">
          <input
            v-model="targetTag"
            type="text"
            class="form-control my-2 shadow-lg"
            aria-label="Text input with dropdown button"
            placeholder="Enter GamerTag...."
          />
          <div class="input-group-prepend my-2">
            <button
              class="btn btn-secondary rounded-right dropdown-toggle shadow-lg"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >PICK YOUR PLATFORM</button>
            <div class="dropdown-menu bg-gradient shadow-lg">
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
        <div v-if="gamerTags.pc != 'pc' " class="row text-left">
          <div class="col-12 mt-3">
            <h5 class="mx-2 text-warning">
              <i class="fas fa-desktop text-warning"></i>
              :
              {{gamerTags.pc}}
            </h5>
          </div>
        </div>
        <div v-if="gamerTags.xbox != 'xbox' " class="row text-left">
          <div class="col-12 mt-3">
            <h5 class="mx-2 text-success">
              <i class="fab fa-xbox text-success"></i>
              : {{gamerTags.xbox}}
            </h5>
          </div>
        </div>
        <div v-if="gamerTags.playstation != 'playstation' " class="row text-left">
          <div class="col-12 mt-3">
            <h5 class="mx-2 text-info">
              <i class="fab fa-playstation text-info"></i>
              : {{gamerTags.playstation}}
            </h5>
          </div>
        </div>
        <div v-if="gamerTags.nintendo != 'nintendo' " class="row text-left text-danger">
          <div class="col-12 mt-3">
            <h5 class="mx-2 text-danger">
              <span class="iconify" data-icon="mdi-nintendo-switch" data-inline="false"></span>
              : {{gamerTags.nintendo}}
            </h5>
          </div>
        </div>
        <button @click="editProfile" class="btn btn-secondary shadow-lg btn-block py-2 my-3">SUBMIT</button>
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
    },
  },
  components: { ProfileModal },
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.616) !important;
}
.option-height {
  height: 2rem;
}
</style>