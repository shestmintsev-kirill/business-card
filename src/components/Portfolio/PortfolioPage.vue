<template>
  <section>
    <div class="section-outer section-partfolio">
      <PortfolioView :portfolio="portfolio" @show-modal="showModal" />
      <Portfolio v-if="show" :portfolio="show" @close-modal="closeModal" />
    </div>
  </section>
</template>

<script>
import Portfolio from './Portfolio';
import PortfolioView from './PortfolioView.vue';
import portfolioItems from './portfolioItems';

export default {
  components: { PortfolioView, Portfolio },
  name: 'PartfolioPage',
  data: () => ({
    show: null,
    portfolio: portfolioItems
  }),
  methods: {
    showModal(e) {
      this.show = e;
    },
    closeModal() {
      this.show = null;
      document.title = 'Алина Шестминцева';
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';

.section-partfolio {
  padding-bottom: 40px;
  padding-top: 50px;
}
</style>
