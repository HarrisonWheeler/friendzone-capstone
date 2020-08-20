<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content bg-gradient shadow-lg p-3 border border-dark">
        <div class="modal-header text-light">
          <slot name="header">
            <h5 class="shadow-lg">
              <u>CREATE YOUR PROFILE</u>
            </h5>
          </slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-danger" aria-hidden="true">&times;</span>
          </button>
        </div>
        <slot class="bg-secondary" name="body" />
      </div>
    </div>
  </div>
  <!-- Modal End -->
</template>

<script>
export default {
  name: "profileModal",
  data() {
    return {};
  },
  props: ["id"],
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
.bg-gradient {
  background: rgb(90, 90, 90);
  background: radial-gradient(
    circle,
    rgba(90, 90, 90, 1) 0%,
    rgba(35, 35, 35, 1) 100%
  );
}
.shadow-lg {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.616) !important;
}
.border-dark {
  border-color: #000000 !important;
  border-width: medium !important;
}
</style>