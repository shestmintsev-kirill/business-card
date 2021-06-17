<template>
  <div class="section-outer section-bg">
    <div class="section-reviews">
      <h1 class="section-reviews-title">Отзывы</h1>
      <VueSlickCarousel v-bind="settings">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="section-reviews-wrapper"
        >
          <div>
            <!-- <img
                class="section-reviews-platform"
                src="../assets/profi.png"
                alt="platform"
              /> -->
            <img
              class="section-reviews-photo"
              :src="
                review.photo
                  ? getImage(`${review.photo}`)
                  : getImage('user.png')
              "
              alt="client"
            />
            <p class="section-reviews-name">{{ review.name }}</p>
          </div>
          <div class="section-reviews-description">
            <h3>{{ review.title }}</h3>
            <span>
              {{
                review.showDescription
                  ? review.description
                  : review.description.split(" ").slice(0, 10).join(" ")
              }}
            </span>
            <a
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
      slidesToShow: 3,
      slidesToScroll: 3,
      vertical: true,
      verticalSwiping: true,
    },
    reviews: [
      {
        photo: "",
        name: "Иван иванов",
        title: "Консультация по Power BI",
        platform: "",
        showDescription: false,
        description:
          "В раздеот травм» и тестовые вопросы «Тестаметры продукта Защита от травм»",
      },
      {
        photo: "",
        name: "Иван иванов",
        title: "Консультация по Power BI",
        platform: "",
        showDescription: false,
        description:
          "В раздел привет при вет «Параметры продукта» разместить лонгрид «Параметры продукта Защита от травм» и тестовые вопросы «Тестирование к Параметры продукта Защита от травм» Защита от травм» и тестовые вопросы  Защита от травм» и тестовые вопросы ",
      },
      {
        photo: "",
        name: "Иван иванов",
        title: "Консультация по Power BI",
        platform: "",
        showDescription: false,
        description:
          "В раздел «Параметры продукта» разместить лонгрид «Параметры продукта Защита от травм» и тестовые вопросы «Тестирование к Параметры продукта Защита от травм»",
      },
      {
        photo: "excel.png",
        name: "Иван иванов",
        title: "Консультация по Power BI",
        platform: "",
        showDescription: false,
        description:
          "В раздел «Параметры продукта» разместить лонгрид «Параметры продукта Защита от травм» и тестовые вопросы «Тестирование к Параметры продукта Защита от травм»",
      },
      {
        photo: "excel.png",
        name: "Иван иванов",
        title: "Консультация по Power BI",
        platform: "",
        showDescription: false,
        description:
          "В раздел «Параметры продукта» разместить лонгрид «Параметры продукта Защита от травм» и тестовые вопросы «Тестирование к Параметры продукта Защита от травм»",
      },
      {
        photo: "excel.png",
        name: "Иван иванов",
        title: "Консультация по Power BI",
        platform: "",
        showDescription: false,
        description:
          "В раздел «Параметры продукта» разместить лонгрид «Параметры продукта Защита от травм» и тестовые вопросы «Тестирование к Параметры продукта Защита от травм»",
      },
      {
        photo: "excel.png",
        name: "Иван иванов",
        title: "Консультация по Power BI",
        platform: "",
        showDescription: false,
        description:
          "В раздел «Параметры продукта» разместить лонгрид «Параметры продукта Защита от травм» и тестовые вопросы «Тестирование к Параметры продукта Защита от травм»",
      },
      {
        photo: "excel.png",
        name: "Иван иванов",
        title: "Консультация по Power BI",
        platform: "",
        showDescription: false,
        description:
          "В раздел «Параметры продукта» разместить лонгрид «Параметры продукта Защита от травм» и тестовые вопросы «Тестирование к Параметры продукта Защита от травм»",
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
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
* {
  @include font-eng;
  @include font-ru;
}

.section-bg {
  height: auto;
  padding-bottom: 30px;
}

.section-reviews {
  .slick-prev,
  .slick-next {
    top: 150px;
    z-index: 2;
  }

  max-width: 645px;
  margin: 0 auto;

  &-title {
    text-align: center;
    margin-top: 0;
    padding-top: 20px;
  }

  &-wrapper {
    display: flex !important;
    /* flex-direction: column; */
    align-items: center;
    margin-left: 10px;
  }

  &-photo {
    margin: 0 auto;
    width: 60px;
    height: 60px;
  }

  &-platform {
    height: 10px;
    margin: 0 auto;
  }

  &-description {
    width: 100%;
    font-size: 14px;
    margin-left: 50px;
    margin-bottom: 0;

    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }

  &-name {
    margin: 0;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: $screen-sm-max) {
    .slick-prev {
      left: 10px;
    }

    .slick-next {
      right: 10px;
    }
  }
}
</style>
