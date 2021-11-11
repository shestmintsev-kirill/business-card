<template>
  <nav :class="{ scroll: isScroll }" class="nav" @scroll="handleScroll()">
    <ul v-scroll-spy-link>
      <li v-for="link in links" :key="link">
        <a>{{ $t(link) }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    isScroll: false,
    scrollPosition: 0
  }),
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (
        this.scrollPosition < window.pageYOffset &&
        window.pageYOffset > 250 &&
        document.documentElement.clientWidth > 565
      ) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
      this.scrollPosition = window.pageYOffset;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';

.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  z-index: 30;
  background-color: rgb(238, 238, 238);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(122, 122, 122, 0.3);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    li {
      cursor: pointer;
      padding: 15px;
    }
  }
}

.scroll {
  height: 40px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

@media (max-width: $screen-xs-max) {
  .nav {
    display: none;
  }
}

@media (max-width: $screen-sm-max) {
  .nav {
    font-size: 14px;
  }
}
</style>
