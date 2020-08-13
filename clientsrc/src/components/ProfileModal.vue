<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content bg-light p-2">
        <div class="modal-header">
          <slot name="header">Create Your Profile</slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
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
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>