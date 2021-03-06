<template>
  <div class="autocomplete">
    <input
      :class="inputClass"
      type="text"
      @input="onChange"
      v-model.trim="search"
      @keydown.down="onArrow(1)"
      @keydown.up="onArrow(-1)"
      @keydown.enter="onEnter"
      :placeholder="placeholder"
    />
    <ul
      id="autocomplete-results"
      v-show="isOpen"
      class="autocomplete-results bg-gradient"
      ref="resultbox"
    >
      <li class="loading" v-if="isLoading">Loading results...</li>
      <li
        :tabIndex="i"
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        @mouseover="setIndex(i)"
        class="autocomplete-result"
        :class="{ 'is-active': i === index }"
        v-html="result.html ? result.html : result.text"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "autocomplete",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    async: {
      type: Boolean,
      required: false,
      default: false,
    },
    inputClass: String,
    placeholder: String,
    canOpen: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      isLoading: false,
      index: 0,
    };
  },
  methods: {
    onChange() {
      this.$emit("input", this.search.toLowerCase() || "");
      if (this.async) {
        this.isLoading = true;
      } else {
        this.filterResults();
        this.open();
      }
    },
    filterResults() {
      this.results = this.items.filter((item) => {
        return item.text.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
    setResult(result) {
      if (!result) {
        return;
      }
      this.search = result.text;
      this.$emit("result", { component: this, result });
      this.close();
    },
    onArrow(n) {
      let i = this.index + n;
      if (this.results[i]) {
        this.$refs.resultbox.scroll(0, i * 32);
        this.setIndex(i);
      }
    },
    setIndex(i) {
      this.index = i;
    },
    onEnter() {
      this.setResult(this.results[this.index]);
    },
    open() {
      if (!this.canOpen) return;
      this.isOpen = true;
      document.body.classList.add("no-scroll");
    },
    close() {
      this.isOpen = false;
      this.index = -1;
      document.body.classList.remove("no-scroll");
    },
    handleEscape(e) {
      if (e.keyCode == 27) {
        this.close();
      }
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.close();
      }
    },
  },
  watch: {
    items: function (val, oldValue) {
      this.results = val;
      this.isLoading = false;
      val.length ? this.open() : this.close();
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleEscape);
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("keydown", this.handleEscape);
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>
<style>
.autocomplete {
  position: relative;
}
.autocomplete-results {
  position: absolute;
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
  width: 100%;
  background-color: gray;
  color: #eeeeee;
}
.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}
.autocomplete-result img {
  max-height: 30px;
  max-width: 30px;
}
.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: silver;
  color: gold;
}
.autocomplete-results::-webkit-scrollbar {
  width: 6px;
}
.autocomplete-results::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px var(--dark);
}
.autocomplete-results::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px var(--dark);
}
.bg-gradient {
  background: rgb(90, 90, 90);
  background: radial-gradient(
    circle,
    rgba(90, 90, 90, 1) 0%,
    rgba(35, 35, 35, 1) 100%
  );
}
</style>