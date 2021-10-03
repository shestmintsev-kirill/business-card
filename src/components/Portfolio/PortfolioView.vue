<template>
  <div>
    <div class="section-partfolio-head">
      <span>{{ $t("PortfolioPage.title") }}</span>
    </div>
    <div class="section-inner">
      <VueSlickCarousel v-bind="settings">
        <div
          v-for="(project, i) in portfolio"
          :key="i"
          class="section-partfolio-project"
        >
          <div
            @click.prevent="$emit('show-modal', project)"
            class="section-partfolio-project-promo"
          >
            <a
              ><img
                class="project-img"
                :src="getImage(`${project.imgView}`)"
                alt="onlinestore"
            /></a>
            <div class="after">
              {{ $t(project.title) }}
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "PortfolioView",
  props: {
    portfolio: {
      type: Array,
    },
  },
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    settings: {
      arrows: true,
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      slidesToScroll: 1,
      rtl: true,
    },
  }),
  mounted() {
    this.arrowCarouselWidth();
  },
  methods: {
    getImage(img) {
      return require("@/assets/" + img);
    },
    arrowCarouselWidth() {
      if (document.documentElement.clientWidth < 566) {
        this.settings.arrows = false;
      } else {
        this.settings.arrows = true;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.slick-prev {
  left: -20px;
}

.slick-next {
  right: -20px;
}
@media (max-width: 570px) {
  .slick-next,
  .slick-prev {
    opacity: 0;
  }
}

.after {
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 30px;
  width: 60%;
  height: 60%;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: rgba(146, 146, 146, 0.6);
  color: white;
  clip-path: circle(0% at 50% 50%);
  transition: all 0.6s;

  @media (max-width: $screen-xs-max) {
    display: none;
  }

  &-target {
    color: white;

    &:hover {
      color: rgb(230, 230, 230);
    }
  }
}

.section-inner {
  max-width: 745px;
  margin-left: auto;
  margin-right: auto;
}
.section-partfolio {
  /* background: #f6f6f6; */
  padding-top: 60px;

  &-head {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
  }

  &-project {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-promo {
      position: relative;
      margin: 20px;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0 10px 4px rgba(0, 2, 3, 0.2);
      }

      .project-img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
        border-radius: 5px;
        transition: all 0.5s;
      }

      &:hover .after {
        clip-path: circle(100% at 50% 50%);
      }
      &:hover img {
        transform: scale(1.01);
      }
      @media (min-width: $screen-sm) {
        &:hover img {
          filter: blur(2px);
        }
      }
    }

    /* &-link {
      width: 100%;
      display: flex;
      position: absolute;
      justify-content: center;
      margin-top: -30px;
      cursor: pointer;
      @media (max-width: $screen-xs-max) {
        margin-bottom: 10px;
        a {
          font-size: 12px;
        }
      }

      a {
        color: #2e3052;
        border-radius: 20px;
        border: 0;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        padding: 5px 10px;
        background-color: rgba(196, 196, 196, 0.6);
        transition: 0.3s;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
        }
      }
    } */
  }
}
</style>
