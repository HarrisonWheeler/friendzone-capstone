<template>
  <div class="dashboard"></div>
</template>


<script>
export default {
  name: "dashboard",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getMyProfile");
  },
  computed: {
    userData() {
      return this.$store.state.dashboard;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>