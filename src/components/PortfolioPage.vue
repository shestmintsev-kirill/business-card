<template>
  <section>
    <div class="section-outer section-partfolio">
      <PortfolioView :portfolio="portfolio" @show-modal="showModal" />
      <Portfolio v-if="show" :portfolio="show" @close-modal="closeModal" />
    </div>
  </section>
</template>

<script>
import Portfolio from "./Portfolio";
import PortfolioView from "./PortfolioView.vue";

export default {
  components: { PortfolioView, Portfolio },
  name: "PartfolioPage",
  data: () => ({
    show: null,
    portfolio: [
      {
        imgView: "project_1.png",
        description: "PortfolioPage.project_1",
        title: "Project_1.title",
        disclamer: "Project_1.disclamer",
        images: ["project_1.png", "project_1.1.png", "project_1.2.png"],
      },
      {
        imgView: "project_2.png",
        description: "PortfolioPage.project_2",
        title: "Project_2.title",
        images: ["project_2.png"],
      },
      {
        imgView: "project_3.png",
        description: "PortfolioPage.project_3",
        title: "Project_3.title",
        disclamer: "Project_1.disclamer",
        images: ["project_3.png", "project_3.1.png", "project_3.2.png"],
      },
    ],
  }),
  methods: {
    showModal(e) {
      this.show = e;
    },
    closeModal() {
      this.show = null;
      document.title = "Алина Шестминцева";
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.section-partfolio {
  /* background: $yellow-bg; */
  padding-bottom: 40px;
  padding-top: 50px;
}
</style>
