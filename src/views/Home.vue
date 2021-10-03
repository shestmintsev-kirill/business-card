<template>
  <div>
    <Loader v-if="showLoader" />
    <div v-scroll-spy="{ offset: 30 }">
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <Reviews />
      <ContactPage />
    </div>
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import PortfolioPage from "@/components/Portfolio/PortfolioPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import Reviews from "@/components/Reviews/Reviews.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Home",
  components: {
    HomePage,
    AboutPage,
    SkillsPage,
    PortfolioPage,
    Reviews,
    ContactPage,
    Loader,
  },
  data: () => ({
    showLoader: true,
  }),
  mounted() {
    this.canselLoader();
  },
  methods: {
    canselLoader() {
      setTimeout(() => {
        this.showLoader = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
* {
  @include font-eng;
  @include font-ru;
}

.slick-prev:before,
.slick-next:before {
  color: rgb(129, 129, 129) !important;
}
</style>
