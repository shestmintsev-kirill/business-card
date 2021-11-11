<template>
  <header class="section-outer section-header">
    <MobilNavbar
      v-if="navigation"
      :links="links"
      @back="closeNav"
      @unvisible="closeNav"
    />
    <Navbar :links="links" />
    <div class="section-header-name">
      <div class="section-header-name-me">
        <div class="morphing">
          <i18n class="word" path="HomePage.name1"></i18n>
          <i18n class="word" path="HomePage.name2"></i18n>
          <i18n class="word" path="HomePage.name3"></i18n>
        </div>
        <div @click="navClick" class="icon">
          <img class="image-icon" src="@/assets/menu.png" alt="menu" />
        </div>
        <div class="profession">
          {{ $t('HomePage.profession') }}
        </div>
        <div class="lang">
          <a @click.prevent="setLocale('ru')" href="/">RU</a> |
          <a @click.prevent="setLocale('en')" href="/">ENG</a>
        </div>
      </div>
      <div class="section-header-name-photo">
        <img class="animation-border" src="@/assets/photo.png" alt="my-image" />
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MobilNavbar from '@/components/MobilNavbar.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,
    MobilNavbar
  },
  data: () => ({
    navigation: false,
    scrollNav: false,
    links: [
      'Navbar.home',
      'Navbar.about',
      'Navbar.skills',
      'Navbar.portfolio',
      'Navbar.reviews',
      'Navbar.contact'
    ]
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
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';
* {
  position: relative;
}

.morphing {
  font-weight: bold;
  display: flex;
  flex-direction: column;
  font-size: 34px;
  filter: contrast(25) blur(0px);
}

.word {
  top: 70px;
  animation: word 6s ease-in-out;

  &:nth-child(1) {
    animation-delay: -3s;
  }
  &:nth-child(2) {
    animation-delay: -2s;
  }
  &:nth-child(3) {
    animation-delay: -1s;
  }
}

@keyframes word {
  90% {
    opacity: 1;
  }
  20%,
  50% {
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
  width: 100%;
  cursor: pointer;
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

      .profession {
        font-size: 18px;
      }
    }

    &-photo {
      img {
        width: 220px;
        height: 100%;
        border-radius: 5px;
      }
    }
  }
  @media (max-width: $screen-sm-max) {
    .profession {
      font-size: 15px;
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
          position: absolute;
          bottom: 0;
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
          width: 125px;
        }
      }
    }

    .word {
      font-size: 18px;
      top: 105px;
    }

    .word + .word {
      margin-top: 5px;
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
