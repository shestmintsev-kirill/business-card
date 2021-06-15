<template>
  <header class="section-outer section-header">
    <MobilNavbar v-if="navigation" @back="closeNav" @unvisible="closeNav" />
    <Navbar />
    <div class="section-header-name">
      <div class="section-header-name-me">
        <div class="name">
          <h1 class="morphing">
            <i18n class="word" path="HomePage.name1"></i18n>
            <i18n class="word" path="HomePage.name2"></i18n>
            <i18n class="word" path="HomePage.name3"></i18n>
          </h1>
        </div>
        <div @click="navClick" class="icon">
          <img class="image-icon" src="@/assets/menu.png" alt="menu" />
        </div>
        <div class="profession">
          {{ $t("HomePage.profession") }}
        </div>
        <div class="lang">
          <a @click.prevent="setLocale('ru')" href="/">RU</a> |
          <a @click.prevent="setLocale('en')" href="/">ENG</a>
        </div>
      </div>
      <div class="section-header-name-photo">
        <img src="@/assets/photom.jpg" alt="my-image" />
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MobilNavbar from "@/components/MobilNavbar.vue";

export default {
  name: "HomePage",
  components: {
    Navbar,
    MobilNavbar,
  },
  data: () => ({
    navigation: false,
  }),

  methods: {
    navClick() {
      this.navigation = true;
    },
    closeNav() {
      this.navigation = false;
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.lang = JSON.stringify(locale);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
* {
  position: relative;
}

.morphing {
  position: relative;
  font-size: 34px;
  background-color: #fff;
  color: #000;
  filter: contrast(25) blur(0px);
}

.word {
  position: absolute;
  top: 70px;
  animation: word 9s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: -9s;
  }
  &:nth-child(2) {
    animation-delay: -6s;
  }
  &:nth-child(3) {
    animation-delay: -3s;
  }
}

@keyframes word {
  0%,
  5%,
  85% {
    filter: blur(0px);
    opacity: 1;
  }
  20%,
  60% {
    filter: blur(1em);
    opacity: 0;
  }
}

.image-icon {
  border-radius: 20px;
  border: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 10px;
  background-color: rgba(173, 173, 173, 0.6);
}

.icon {
  position: fixed;
  padding-right: 10px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  cursor: pointer;
  right: 20px;
  z-index: 10;
}

.section-header {
  height: auto;
  max-width: 945px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  &-name {
    display: flex;
    justify-content: space-around;

    &-me {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 20px 0;

      .name {
        font-size: 45px;
        font-weight: bold;
        letter-spacing: 1.1px;

        h1 {
          margin: 0;
        }
      }

      .profession {
        font-size: 18px;
      }
    }

    &-photo {
      img {
        width: 300px;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: $screen-sm-max) {
    .profession {
      font-size: 15px;
    }
    .name {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 1.1px;
    }
    .morphing {
      font-size: 26px;
    }
  }

  @media (max-width: $screen-xs-max) {
    &-name {
      &-me {
        justify-content: flex-start;
        .lang {
          display: none;
        }

        .profession {
          margin-right: 10px;
        }
      }

      &-photo {
        margin: 10px 0;
        display: flex;
        justify-content: flex-end;
        img {
          width: 160px;
        }
      }
    }

    .word {
      font-size: 14px;
      top: 95px;
    }
  }

  @media (min-width: $screen-sm) {
    padding-top: 90px;
    &-name {
      &-me {
        .icon {
          display: none;
        }
      }

      &-photo {
        margin: 20px 0;
      }
    }
  }
}
</style>
