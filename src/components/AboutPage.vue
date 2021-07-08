<template>
  <section class="section-outer section-about">
    <div class="section-about-title">
      <span>{{ $t("AboutPage.title") }}</span>
    </div>
    <div class="section-about-description">
      <i18n path="AboutPage.about">
        <br slot="break" />
      </i18n>
    </div>
    <div class="section-about-title">
      <span>{{ $t("AboutPage.subTitle") }}</span>
    </div>
    <div class="section-about-description">
      <i18n path="AboutPage.subAbout">
        <br slot="break" />
      </i18n>
    </div>
    <div v-if="showIcons">
      <img
        v-for="icon in iconsOther"
        :key="icon.img"
        class="icons"
        :style="[
          { top: icon.top },
          { left: icon.left },
          { right: icon.right },
          { transform: icon.transform },
        ]"
        :src="getImage(`${icon.img}`)"
        alt="Power BI"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
  data: () => ({
    showIcons: false,
    iconsOther: [
      {
        img: "icon_1.png",
        left: 120 + "px",
        top: 30 + "px",
        transform: "rotate(20deg)",
      },
      {
        img: "icon_2.png",
        right: 100 + "px",
        top: 95 + "px",
        transform: "rotate(-35deg)",
      },
      {
        img: "icon_3.png",
        left: 55 + "px",
        top: 210 + "px",
        transform: "rotate(-10deg)",
      },
      {
        img: "icon_4.png",
        right: 45 + "px",
        top: 270 + "px",
        transform: "rotate(15deg)",
      },
      {
        img: "icon_5.png",
        left: 95 + "px",
        top: 350 + "px",
        transform: "rotate(0deg)",
      },
      {
        img: "icon_6.png",
        right: 110 + "px",
        top: 450 + "px",
        transform: "rotate(-20deg)",
      },
      {
        img: "icon_7.png",
        left: 90 + "px",
        top: 480 + "px",
        transform: "rotate(30deg)",
      },
    ],
  }),

  methods: {
    getImage(img) {
      return require("@/assets/AboutIcons/" + img);
    },
    handleScroll() {
      if (
        window.pageYOffset > 320 &&
        document.documentElement.clientWidth > 690
      ) {
        this.showIcons = true;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.section-about {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 3px;
    text-align: center;
  }

  &-title:first-child {
    margin-top: 30px;
  }

  &-description {
    margin-top: 20px;
    font-weight: 500;
    margin-bottom: 35px;

    &-link {
      cursor: pointer;
      color: #252525;
    }
  }

  &-description:last-child {
    margin-bottom: 20px;
  }

  @media (max-width: $screen-xs-max) {
    &-description {
      width: 90%;
    }

    .icons {
      display: none;
    }
  }

  @media (min-width: $screen-sm) {
    &-description {
      width: 55%;
    }

    .icons {
      width: 60px;
    }
  }

  @media (min-width: $screen-lg) {
    .icons {
      width: 100px;
    }
  }

  @media (max-width: 690px) {
    .icons {
      display: none;
    }
  }
}

.icons {
  position: absolute;
  transition: all 0.3s ease;
  animation: opacity 1s linear;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }

  100% {
    opacity: 1;
  }
}
</style>
