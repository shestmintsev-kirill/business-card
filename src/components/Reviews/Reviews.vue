<template>
  <div class="section-outer section-bg">
    <div class="section-reviews">
      <h1 class="section-reviews-title">{{ $t("Review.title") }}</h1>
      <VueSlickCarousel v-bind="settings">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="section-reviews-wrapper"
        >
          <div class="user-card">
            <div class="user-card-view">
              <a target="_blank" :href="review.link">
                <img
                  v-if="review.platform"
                  class="user-card-view-platform"
                  :src="getImage(review.platform)"
                  alt="platform"
                />
              </a>
            </div>
            <img
              class="section-reviews-photo"
              :src="review.sex ? getImage(`man.png`) : getImage('woman.png')"
              alt="client"
            />
            <p class="section-reviews-name">
              {{ $t(`Review.review_${index + 1}.name`) }}
            </p>
          </div>
          <div class="section-reviews-description">
            <h3>{{ $t(`Review.review_${index + 1}.title`) }}</h3>
            <span>
              {{
                review.expand
                  ? $t(`Review.review_${index + 1}.review`)
                  : $t(`Review.review_${index + 1}.review`)
                      .split(" ")
                      .slice(0, 11)
                      .join(" ")
              }}
            </span>
            <br v-if="review.expand" />
            <a
              v-if="reviewLength(`Review.review_${index + 1}.review`) > 90"
              @click.prevent="review.expand = !review.expand"
              href="/"
            >
              {{ review.expand ? " . . . скрыть" : " . . ." }}</a
            >
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import reviews from "./reviews";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Reviews",
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    settings: {
      arrows: true,
      dots: true,
      infinite: true,
      rows: 3,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    },
    reviews: [],
  }),
  created() {
    this.reviewsFetch();
  },
  mounted() {
    this.arrowCarouselWidth();
  },
  methods: {
    reviewsFetch() {
      reviews.forEach((r) => {
        const newObj = {
          ...r,
          expand: false,
        };
        this.reviews.push(newObj);
      });
    },
    arrowCarouselWidth() {
      if (document.documentElement.clientWidth < 758) {
        this.settings.arrows = false;
      } else {
        this.settings.arrows = true;
      }
    },
    getImage(img) {
      return require("@/assets/" + img);
    },
    reviewLength(review) {
      return this.$t(`${review}`).length;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
* {
  @include font-eng;
  @include font-ru;
  outline: none;
}

.section-bg {
  height: auto;
  padding-bottom: 30px;
}

.section-reviews {
  user-select: none;

  .slick-prev,
  .slick-next {
    top: 30px;
    z-index: 2;
  }

  .slick-prev {
    left: -70px;
  }

  .slick-next {
    right: -70px;
  }

  max-width: 645px;
  margin: 0 auto;

  &-title {
    text-align: center;
    margin-top: 0;
    padding-top: 20px;
    font-size: 24px;
  }

  &-wrapper {
    display: flex !important;
    align-items: center;
    margin-bottom: 10px;
  }

  &-photo {
    margin: 0 auto;
    width: 40px;
    height: 40px;
  }

  &-description {
    width: 100%;
    font-size: 14px;
    margin-left: 50px;
    margin-bottom: 0;

    h3 {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &-name {
    margin: 0;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    width: 70px;
  }

  @media (max-width: 795px) {
    .slick-prev {
      left: -15px;
    }

    .slick-next {
      right: -15px;
    }
  }
}

.user-card {
  position: relative;

  &-view {
    &-platform {
      height: 40px;
      width: 40px;
      margin: 0 auto;
      position: absolute;
      left: 67px;
      top: 5px;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        transform: scale(1.15);
      }
    }
  }
}
</style>
