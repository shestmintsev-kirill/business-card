<template>
  <transition name="modal">
    <div class="modal-mask" @click.self="$emit('close-modal')">
      <div class="modal-wrapper" @click.self="$emit('close-modal')">
        <div class="section-outer modal-container">
          <div class="section-partfolio-title">
            <div class="section-partfolio-title-back">
              <a @click="$emit('close-modal')"><img class="back" src="@/assets/back.png" alt="back" /></a>
            </div>
            <div class="section-partfolio-title-text">
              <div>
                <p class="title-wrapper">{{ $t(portfolio.title) }}</p>
                <p class="title-wrapper light">
                  {{ $t(portfolio.description) }}
                </p>
                <p v-if="portfolio.disclamer" class="disclamer">
                  {{ $t(portfolio.disclamer) }}
                </p>
              </div>
            </div>
          </div>
          <div class="caroulsel">
            <VueSlickCarousel v-bind="settings">
              <div v-for="(item, i) in portfolio.images" :key="i">
                <img class="wrap" :src="getImage(`${item}`)" />
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Portfolio',
  components: {
    VueSlickCarousel
  },
  props: {
    portfolio: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    settings: {
      arrows: true,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      rtl: true
    }
  }),
  mounted() {
    document.title = 'Портфолио';
    document.querySelector('body').style.overflow = 'hidden';
    this.arrowCarouselWidth();
  },
  beforeDestroy() {
    document.querySelector('body').style.overflow = null;
  },
  methods: {
    getImage(img) {
      return require('@/assets/' + img);
    },
    arrowCarouselWidth() {
      if (document.documentElement.clientWidth < 566) {
        this.settings.arrows = false;
      } else {
        this.settings.arrows = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';
* {
  @include font-eng;
  @include font-ru;
}

.caroulsel {
  width: 100%;
  margin-bottom: 10px;

  .wrap {
    width: 100%;
    height: auto;
  }
}

.modal-container {
  margin: 0px auto;
  max-width: 945px;
  padding: 20px 30px;
  background-color: rgb(238, 238, 238);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  animation: opacity 0.3s linear;

  @media (max-width: $screen-xs-max) {
    padding: 20px 7px;
  }
}

.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease;
}

.modal-wrapper {
  width: 100%;
  padding: 0 20px;
}

.light {
  font-weight: 400;
}

.disclamer {
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  margin-bottom: 0;
}

.back {
  border-radius: 20px;
  border: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 10px;
  background-color: rgba(173, 173, 173, 0.6);
  transition: 0.3s;
  cursor: pointer;

  @media (max-width: $screen-sm-max) {
    width: 30px;
  }

  &:hover {
    background-color: rgba(139, 139, 139, 0.8);
  }
}

.section-partfolio {
  &-title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;

    &-text {
      display: flex;
      justify-content: center;
      width: 100%;
      text-align: center;

      @media (max-width: $screen-sm-max) {
        font-size: 16px;
      }

      @media (max-width: $screen-xs-max) {
        font-size: 12px;

        .disclamer {
          font-size: 10px;
        }
      }

      .title-wrapper {
        flex: auto;
        padding: 0 10px;
      }
    }
  }
}

.modal-enter .modal-container {
  opacity: 0;
}

.modal-leave-active .modal-container {
  opacity: 0;
  transform: scale(1.5);
}

@keyframes opacity {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1);
  }

  100% {
    opacity: 1;
  }
}
</style>
