<template>
  <footer class="section-outer section-contact">
    <div class="section-contact-title">
      <span>{{ $t('ContactPage.title') }}</span>
    </div>
    <div class="section-contact-text">
      <span>{{ $t('ContactPage.description') }}</span>
      <a href="tel:+79857591752">+7(985)-759-17-52</a>
      <a href="mailto:a.shestmintseva@gmail.com">a.shestmintseva@gmail.com</a>
    </div>
    <div class="section-contact-btn">
      <button id="show-modal" class="animation" @click="showModal = true">
        {{ $t('ContactPage.btn') }}
      </button>
      <Modal v-if="showModal" @close="closeMsg()">
        <h3 slot="header">{{ $t('ContactPage.modalTitle') }}</h3>
      </Modal>
    </div>
    <div class="section-contact-sosial">
      <a
        v-for="item in sosial"
        :key="item.title"
        target="_blank"
        :href="item.link"
        ><img class="sosial-img" :src="getImage(`${item.icon}`)" alt="sosial" /></a>
    </div>
  </footer>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  name: 'ContactPage',
  components: {
    Modal
  },
  data: () => ({
    showModal: false,
    sosial: [
      {
        title: 'WhatsApp',
        link: 'https://wa.me/79785408650',
        icon: 'whatsapp.png'
      },
      {
        title: 'Instagram',
        link: 'https://www.instagram.com/shestmintseva.a',
        icon: 'instagram.png'
      },
      {
        title: 'Telegram',
        link: 'https://t.me/ashestmintseva',
        icon: 'telegram.png'
      },
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ashestmintseva/',
        icon: 'linkedin.png'
      }
    ]
  }),
  methods: {
    getImage(img) {
      return require('@/assets/' + img);
    },
    closeMsg() {
      this.showModal = false;
      document.title = 'Алина Шестминцева';
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';

img {
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
}
button {
  width: 200px;
  height: 40px;
  color: white;
  background: #070707;
  border-radius: 15px;
  transition: 0.3s;
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0px 0px 6px rgb(41, 41, 41);
    transform: scale(1.1);
  }
}
.section-contact {
  /* background: $yellow-bg; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  &-title {
    font-weight: bold;
    font-size: 24px;
    margin: 20px 0;
  }

  &-text {
    text-align: center;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-btn {
    margin-bottom: 60px;
    margin-top: 30px;
  }

  &-sosial {
    width: 20%;
    display: flex;
    justify-content: space-between;

    .sosial-img {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: $screen-sm-max) {
    &-text {
      width: 100%;
    }

    &-sosial {
      width: 50%;
    }
  }

  @media (min-width: $screen-md) {
    &-text {
      width: 40%;
    }

    &-sosial {
      width: 20%;
    }
  }

  @media (min-width: $screen-lg) {
    &-text {
      width: 25%;
    }
  }
}
</style>
