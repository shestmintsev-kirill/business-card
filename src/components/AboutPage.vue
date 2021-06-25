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
    <img
      v-for="icon in iconsOther"
      :key="icon.img"
      class="others"
      :style="[
        { top: icon.top },
        { left: icon.left },
        { right: icon.right },
        { transform: icon.transform },
      ]"
      :src="getImage(`${icon.img}`)"
      alt="Power BI"
    />
  </section>
</template>

<script>
export default {
  name: "AboutPage",
  data: () => ({
    iconsOther: [
      {
        img: "icon_1.png",
        left: 120 + "px",
        top: 50 + "px",
        transform: "rotate(20deg)",
      },
      {
        img: "icon_2.png",
        right: 100 + "px",
        top: 115 + "px",
        transform: "rotate(20deg)",
      },
      {
        img: "icon_3.png",
        left: 55 + "px",
        top: 180 + "px",
        transform: "rotate(-10deg)",
      },
      {
        img: "icon_4.png",
        right: 110 + "px",
        top: 300 + "px",
        transform: "rotate(-15deg)",
      },
      {
        img: "icon_5.png",
        left: 95 + "px",
        top: 320 + "px",
        transform: "rotate(0deg)",
      },
      {
        img: "icon_6.png",
        right: 80 + "px",
        top: 440 + "px",
        transform: "rotate(-20deg)",
      },
      {
        img: "icon_7.png",
        left: 90 + "px",
        top: 450 + "px",
        transform: "rotate(30deg)",
      },
    ],
  }),

  methods: {
    getImage(img) {
      return require("@/assets/AboutIcons/" + img);
    },
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
    margin-top: 100px;
  }

  &-description {
    margin-top: 20px;
    font-weight: 500;
    margin-bottom: 35px;
    text-align: justify;

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
  }

  @media (min-width: $screen-sm) {
    &-description {
      width: 55%;
    }
  }
}

.others {
  position: absolute;
  width: 100px;
}
</style>
