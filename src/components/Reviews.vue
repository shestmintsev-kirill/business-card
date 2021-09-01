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
          <div class="user-card">
            <div class="userd-card-view">
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
                  ? review.description
                  : review.description.split(" ").slice(0, 11).join(" ")
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
        platform: "telegram2.png",
        link: "https://t.me/olya_ermenina",
        showDescription: false,
        description:
          "Алина помогла мне разобраться в базовых вещах в инвестициях, ответила на все вопросы доступным языком. Очень внимательная к вопросам, рекомендую!",
      },
      {
        sex: true,
        name: "Михаил",
        title: "Аналитика под ключ в Power BI",
        platform: "fl.png",
        link: "https://www.fl.ru/users/ashestmintseva/opinions/",
        showDescription: false,
        description:
          "Все четко, в срок и по делу. Алина сделала срочную для нас задачу и результат презентовала заказчику. Речь поставлена, в Power BI разбирается на отлично!",
      },
      {
        sex: true,
        name: "Эльдар",
        title: "Обучение Power BI",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description:
          "Хорошее знание мат части. Понятное объяснение. Быстрый прогресс.",
      },
      {
        sex: true,
        name: "Евгений",
        title: "Консультация по Power Query",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description:
          "Отличное объяснение Power Query. По моей задаче было подсказано очень быстро и все было предельно понятно. Специалист отвечает на все вопросы и у неё получилось объяснить даже такому тупому человеку как я",
      },
      {
        sex: true,
        name: "Денис",
        title: "Консультация по Power BI",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description: "Все супер",
      },
      {
        sex: true,
        name: "Сергей",
        title: "Консультация по инвестициям",
        platform: "telegram2.png",
        link: "https://t.me/koraboom",
        showDescription: false,
        description:
          "Алина смогла оказать помощь в очень короткие сроки. Надеюсь на дальнейшее сотрудничество!",
      },
      {
        sex: true,
        name: "Тимофей",
        title: "Обучение Power BI",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description:
          "Хороши специалист. Всё понятно объяснила. Всем рекомендую данного специалиста.",
      },
      {
        sex: false,
        name: "Оксана",
        title: "Консультация по Excel",
        platform: "profi.jpg",
        showDescription: false,
        link: "https://profi.ru/profile/VarakinaAV3/",
        description:
          "Быстро вникла в задачу, учла пожелания. Не нашла ошибку в файле.",
      },
      {
        sex: false,
        name: "Раиса",
        title: "Обучение Excel",
        platform: "profi.jpg",
        link: "https://profi.ru/profile/VarakinaAV3/",
        showDescription: false,
        description:
          "Спасибо. Алина объясняет с большим желанием помочь. Терпеливо, доходчиво. Рекомендую!",
      },
      {
        sex: false,
        name: "Марина",
        title: "Аналитика под ключ в Power BI",
        platform: "fl.png",
        showDescription: false,
        link: "https://www.fl.ru/users/ashestmintseva/opinions/",
        description:
          "Спасибо за отчеты, работа выполнена в тот срок, который и обговаривали. Результатом довольна. Рекомендую данного специалиста.",
      },
      {
        sex: false,
        name: "Екатерина",
        title: "Консультация по Power BI",
        platform: "profi.jpg",
        showDescription: false,
        link: "https://profi.ru/profile/VarakinaAV3/",
        description:
          "Спасибо Алине большое! Помогла с моей рабочей  задачей в power BI, на которой я прям забуксовала, дальше дело пошло. Я в этом деле новичок, а Алина быстро схватила суть задачи и предложила решение! Все обозначенные мною вопросы успели обсудить. Спасибо ещё раз!",
      },
      {
        sex: true,
        name: "Вадим",
        title: "Консультация по Excel",
        platform: "profi.jpg",
        showDescription: false,
        link: "https://profi.ru/profile/VarakinaAV3/",
        description: "Отличный специалист по excel, рекомендую!",
      },
      {
        sex: false,
        name: "Ирина",
        title: "Консультация по Power BI",
        platform: "profi.jpg",
        showDescription: false,
        link: "https://profi.ru/profile/VarakinaAV3/",
        description:
          "Алина, благодарю за очень продуктивное занятие. Я не новичок в power bi, при этом Алина показала мне полезные фишки для оптимизации моих запросов в power query и power bi. Занятие проходило в zoom: я сама зашла в power bi и демонстрировала свой экран. Алина подсказывала, что мне сделать. Такой формат занятия мне очень подошёл: фактически я все сделала своими руками, поэтому лучше поняла и запомнила.  Очень рекомендую Алину за профессионализм!",
      },
      {
        sex: false,
        name: "Анна",
        title: "Обучение Excel",
        showDescription: false,
        link: "https://t.me/olya_ermenina",
        description:
          "Выражаю огромную благодарность за помощь в выполнении рабочих заданий в excel. Спасибо за подробное объяснение и нестандартный подход ( я бы сказала, даже творческий )! Обязательно будут рекомендоваться Вас своим друзьям и коллегам ! Теперь я знаю к кому я могу обратиться , если потребуется помощь! Ещё раз спасибо!",
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
    width: 50px;
    height: 50px;

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
