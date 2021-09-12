<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
  mounted() {
    if (localStorage.lang) {
      this.$i18n.locale = JSON.parse(localStorage.lang);
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
@import "normalize-scss";
@include normalize();

* {
  box-sizing: border-box;
}
</style>
