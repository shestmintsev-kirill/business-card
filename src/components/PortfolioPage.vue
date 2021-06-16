<template>
  <section>
    <div class="section-outer section-partfolio">
      <PortfolioView :portfolio="portfolio" @show-modal="showModal" />
      <Portfolio v-if="show" :portfolio="show" @close-modal="closeModal" />
    </div>
    <Reviews />
  </section>
</template>

<script>
import Portfolio from "./Portfolio";
import PortfolioView from "./PortfolioView.vue";
import Reviews from "./Reviews.vue";
export default {
  components: { PortfolioView, Portfolio, Reviews },
  name: "PartfolioPage",
  data: () => ({
    show: null,
    portfolio: {
      store: {
        imgView: "onlinestore.png",
        description: "PortfolioPage.onlineStore",
        title: "PortfolioStore.title",
        modal: "portfolio.store",
        images: [
          "onlinestore.png",
          "productList.png",
          "productCard.png",
          "productBuy.png",
          "productOrder.png",
          "productEdit.png",
          "productNew.png",
        ],
      },
      movie: {
        imgView: "movies.png",
        description: "PortfolioPage.movieApp",
        title: "PortfolioMovie.title",
        modal: "portfolio.movie",
        images: [
          "movieHome.png",
          "movies.png",
          "movieInfo.png",
          "movieSearch.png",
          "moviePagination.png",
        ],
      },
      contact: {
        imgView: "contactBook.png",
        description: "PortfolioPage.contactBook",
        title: "PortfolioContactBook.title",
        modal: "portfolio.contact",
        images: [
          "contactBook.png",
          "contactBookSearch.png",
          "contactBookAdd.png",
          "contactBookSort.png",
          "contactBookEdit.png",
        ],
      },
    },
  }),
  methods: {
    showModal(e) {
      this.show = e;
    },
    closeModal() {
      this.show = null;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.section-partfolio {
  background: $yellow-bg;
  padding-bottom: 40px;
  padding-top: 50px;
}
</style>
