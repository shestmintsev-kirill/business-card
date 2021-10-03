import Vue from "vue";
import VueI18n from "vue-i18n";
import English from "./language/en";
import Russian from "./language/ru";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ru",
  fallbackLocale: "en",
  messages: {
    en: English,
    ru: Russian,
  },
});
