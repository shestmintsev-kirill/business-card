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
            <p class="section-reviews-name">{{ review.name }}</p>
          </div>
          <div class="section-reviews-description">
            <h3>{{ review.title }}</h3>
            <span>
              {{
                review.showDescription
                  ? $t(review.description)
                  : $t(review.description).split(" ").slice(0, 11).join(" ")
              }}
            </span>
            <br v-if="review.showDescription" />
            <a
              v-if="reviewLength(review.description) > 90"
              @click.prevent="review.showDescription = !review.showDescription"
              href="/"
            >
              {{ review.showDescription ? " . . . скрыть" : " . . ." }}</a
            >
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
    reviews: [
      {
        sex: false,
        name: "Ольга",
        title: "Консультация по инвестициям",
        platform: "telegram2.png",
        link: "https://t.me/olya_ermenina",
        showDescription: false,
        description: "Review.review_1.review",
      },
      {
        sex: true,
        name: "Михаил",
        title: "Аналитика под ключ в Power BI",
        platform: "fl.png",
        link: "https://www.fl.ru/users/ashestmintseva/opinions/",
        showDescription: false,
        description: "Review.review_2.review",
      },
      {
        sex: true,
        name: "Эльдар",
        title: "Обучение Power BI",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description: "Review.review_3.review",
      },
      {
        sex: true,
        name: "Евгений",
        title: "Консультация по Power Query",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description: "Review.review_4.review",
      },
      {
        sex: true,
        name: "Денис",
        title: "Консультация по Power BI",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description: "Review.review_5.review",
      },
      {
        sex: true,
        name: "Сергей",
        title: "Консультация по инвестициям",
        platform: "telegram2.png",
        link: "https://t.me/koraboom",
        showDescription: false,
        description: "Review.review_6.review",
      },
      {
        sex: true,
        name: "Тимофей",
        title: "Обучение Power BI",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description: "Review.review_7.review",
      },
      {
        sex: false,
        name: "Оксана",
        title: "Консультация по Excel",
        platform: "profi.jpg",
        showDescription: false,
        link: "https://profi.ru/profile/VarakinaAV3/",
        description: "Review.review_8.review",
      },
      {
        sex: false,
        name: "Раиса",
        title: "Обучение Excel",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description: "Review.review_9.review",
      },
      {
        sex: false,
        name: "Марина",
        title: "Аналитика под ключ в Power BI",
        platform: "fl.png",
        showDescription: false,
        link: "https://www.fl.ru/users/ashestmintseva/opinions/",
        description: "Review.review_10.review",
      },
      {
        sex: false,
        name: "Екатерина",
        title: "Консультация по Power BI",
        platform: "profi.jpg",
        showDescription: false,
        link: "https://profi.ru/profile/VarakinaAV3/",
        description: "Review.review_11.review",
      },
      {
        sex: true,
        name: "Вадим",
        title: "Консультация по Excel",
        platform: "profi.jpg",
        showDescription: false,
        link: "https://profi.ru/profile/VarakinaAV3/",
        description: "Review.review_12.review",
      },
      {
        sex: false,
        name: "Ирина",
        title: "Консультация по Power BI",
        platform: "profi.jpg",
        showDescription: false,
        link: "https://profi.ru/profile/VarakinaAV3/",
        description: "Review.review_13.review",
      },
      {
        sex: false,
        name: "Анна",
        title: "Обучение Excel",
        showDescription: false,
        link: "https://t.me/olya_ermenina",
        description: "Review.review_14.review",
      },
      {
        sex: false,
        name: "Ульяна",
        title: "Сопровождение, Инвестиции",
        platform: "telegram2.png",
        showDescription: false,
        link: "https://t.me/kochetkova_ulya",
        description: "Review.review_15.review",
      },
      {
        sex: false,
        name: "Елена",
        title: "Консультация по Power Query",
        platform: "profi.jpg",
        showDescription: false,
        link: "https://profi.ru/profile/VarakinaAV3/",
        description: "Review.review_16.review",
      },
    ],
  }),
  mounted() {
    this.arrowCarouselWidth();
  },
  methods: {
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
