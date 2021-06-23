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
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.section-about {
  /* background: $yellow-bg; */
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
</style>
