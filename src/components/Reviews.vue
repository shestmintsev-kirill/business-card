<template>
  <div class="section-outer section-bg">
    <div class="section-reviews">
      <h1 class="section-reviews-title">Отзывы</h1>
      <VueSlickCarousel v-bind="settings">
        <div class="section-reviews-wrapper">
          <div>
            <img
              class="section-reviews-platform"
              src="../assets/profi.png"
              alt="platform"
            />
            <img
              class="section-reviews-photo"
              src="../assets/excel.png"
              alt="client"
            />
          </div>
          <p class="section-reviews-description">
            В раздел «Параметры продукта» разместить лонгрид «Параметры продукта
            Защита от травм» и тестовые вопросы «Тестирование к Параметры
            продукта Защита от травм»
          </p>
          <p class="section-reviews-name">Иван иванов</p>
        </div>
        <div class="section-reviews-wrapper">
          <img
            class="section-reviews-photo"
            src="../assets/excel.png"
            alt="client"
          />
          <p class="section-reviews-description">
            В раздел «Параметры продукта» разместить лонгрид «Параметры продукта
            Защита от травм» и тестовые вопросы «Тестирование к Параметры
            продукта Защита от травм»В раздел «Параметры продукта» разместить
            лонгрид «Параметры продукта Защита от травм» и тестовые вопросы
            «Тестирование к Параметры продукта Защита от травм»В раздел
            «Параметры продукта» разместить лонгрид «Параметры продукта Защита
            от травм» и тестовые вопросы «Тестирование к Параметры продукта
            Защита от травм»
          </p>
          <p class="section-reviews-name">Иван иванов</p>
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
      adaptiveHeight: true,
      slidesToScroll: 1,
      rtl: true,
    },
  }),
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
    top: 100px;
    z-index: 2;
  }

  max-width: 600px;
  margin: 0 auto;

  &-title {
    text-align: center;
    margin-top: 0;
    padding-top: 20px;
  }

  &-wrapper {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }

  &-photo {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  &-platform {
    height: 10px;
    margin: 0 auto;
  }

  &-description {
    text-align: center;
    margin-bottom: 0;
  }

  &-name {
    font-weight: bold;
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
