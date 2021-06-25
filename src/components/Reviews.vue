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
                  ? review.description
                  : review.description.split(" ").slice(0, 10).join(" ")
              }}
            </span>
            <br v-if="review.showDescription" />
            <a
              v-if="review.description.length > 90"
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
        platform: "",
        showDescription: false,
        description:
          "Алина помогла мне разобраться в базовых вещах в инвестициях, ответила на все вопросы доступным языком. Очень внимательная к вопросам, рекомендую!",
      },
      {
        sex: true,
        name: "Михаил",
        title: "Аналитика под ключ в Power BI",
        platform: "",
        showDescription: false,
        description:
          "Все четко, в срок и по делу. Алина сделала срочную для нас задачу и результат презентовала заказчику. Речь поставлена, в Power BI разбирается на отлично!",
      },
      {
        sex: true,
        name: "Эльдар",
        title: "Обучение Power BI",
        platform: "",
        showDescription: false,
        description:
          "Хорошее знание мат части. Понятное объяснение. Быстрый прогресс.",
      },
      {
        sex: true,
        name: "Евгений",
        title: "Консультация по Power Query",
        platform: "",
        showDescription: false,
        description:
          "Отличное объяснение Power Query. По моей задаче было подсказано очень быстро и все было предельно понятно. Специалист отвечает на все вопросы и у неё получилось объяснить даже такому тупому человеку как я",
      },
      {
        sex: true,
        name: "Денис",
        title: "Консультация по Power BI",
        platform: "",
        showDescription: false,
        description: "Все супер",
      },
      {
        sex: true,
        name: "Тимофей",
        title: "Обучение по Power BI",
        platform: "",
        showDescription: false,
        description:
          "Хороши специалист. Всё понятно объяснила. Всем рекомендую данного специалиста.",
      },
      {
        sex: false,
        name: "Раиса",
        title: "Обучение Excel",
        platform: "",
        showDescription: false,
        description:
          "Спасибо. Алина объясняет с большим желанием помочь. Терпеливо, доходчиво. Рекомендую!",
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
    top: 30px;
    z-index: 2;
  }

  .slick-prev {
    left: -55px;
  }

  .slick-next {
    right: -55px;
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
  }

  &-photo {
    margin: 0 auto;
    width: 40px;
    height: 40px;
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
    width: 70px;
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
