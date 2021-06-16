import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "ru",
  messages: {
    en: {
      HomePage: {
        name1: "АНАЛИТИКА",
        name2: "ФИНАНСЫ",
        name3: "ИНВЕСТИЦИИ",
        profession: "Алина Шестминцева",
      },
      AboutPage: {
        title: "About me",
        about:
          "Hi, I'm Kirill – Frontend developer from Moscow. I'm interestedin web development and everything connected with it.{break}{break}I finished courses on Udemy platform ",
        subTitle: "Чем могу быть полезна",
        subAbout:
          "Консультации и обучение Excel (с 0 до продвинутого уровня): формулы, сводные таблицы, надстройки Power Query и Power Pivot.{break}{break}Консультации и обучение по Power BI (с 0 до продвинутого уровня): работа с различными источниками данных, язык DAX, визуализации, дэшборды.{break}{break}Построение отчетов на базе Excel или Power BI под ключ. Возможно подключение к следующим источникам: Excel, Google таблицы, CRM, 1C, MY SQL и другие.{break}{break}Консультации по личным финансам и инвестициям: выбор брокера, обучение работе на бирже, формирование инвестиционного портфеля под ваши цели.",
      },
      SkillsPage: {
        title: "Skills",
      },
      PortfolioPage: {
        title: "Portfolio",
        onlineStore:
          "Project - Online store using Firebase, Vuex, Vue-router and Vuetify",
        link: "More...",
        movieApp:
          "Project - Movies Top 250 using Vue-router, Vuex and Bootstrap-vue",
        contactBook:
          "Project - Contact book using Vue-router (dynamic route matching), Vuex, LocalStorage",
      },
      ContactPage: {
        title: "Contacts",
        description: "Want to know more or just chat? You are welcome!",
        btn: "Send message",
        modalTitle: "Write me",
        sosial: "I'm on social media",
      },
      Navbar: {
        home: "Home",
        about: "About me",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contacts",
      },
      Modal: {
        name: "Name",
        email: "Email",
        tel: "Tel",
        message: "Message",
        send: "Send",
        close: "Close",
        alert: "Thank you for contacting me",
      },
      PortfolioStore: {
        title: "Online store using Firebase, Vuex, Vue-router and Vuetify",
      },
      PortfolioMovie: {
        title: "Movies app using Vue-router, Vuex and Bootstrap-vue",
      },
      PortfolioContactBook: {
        title:
          "Contact book using Vue-router (dynamic route matching), Vuex, LocalStorage",
      },
    },
    ru: {
      HomePage: {
        name1: "АНАЛИТИКА",
        name2: "ФИНАНСЫ",
        name3: "ИНВЕСТИЦИИ",
        profession: "Алина Шестминцева",
      },
      AboutPage: {
        title: "Кто я?",
        about:
          "Привет, я бизнес-аналитик, эксперт по финансам и квалифицированный инвестор.{break}{break}У меня есть международных опыт работы на позиции бизнес-аналитика (компании Mars и Coca-Cola HBC).{break}{break} Имею профильное образование по направлению Инвестиционный менеджмент, опыт торговли на фондовом рынке более трёх лет и статус квалифицированного инвестора.{break}{break}",
        subTitle: "Чем могу быть полезна",
        subAbout:
          "- Консультации и обучение Excel (с 0 до продвинутого уровня): формулы, сводные таблицы, надстройки Power Query и Power Pivot.{break}{break}- Консультации и обучение по Power BI (с 0 до продвинутого уровня): работа с различными источниками данных, язык DAX, визуализации, дэшборды.{break}{break}- Построение отчетов на базе Excel или Power BI под ключ. Возможно подключение к следующим источникам: Excel, Google таблицы, CRM, 1C, MY SQL и другие.{break}{break}- Консультации по личным финансам и инвестициям: выбор брокера, обучение работе на бирже, формирование инвестиционного портфеля под ваши цели.",
      },
      SkillsPage: {
        title: "Навыки",
      },
      PortfolioPage: {
        title: "Портфолио",
        onlineStore:
          "Онлайн магазин с использованием Firebase, Vuex, Vue-router и Vuetify",
        link: "Подробнее...",
        movieApp:
          "Топ 250 фильмов с использованием Vue-router, Vuex и Bootstrap-vue",
        contactBook:
          "Контактная книга с использованием Vue-router (динамические пути), Vuex, LocalStorage",
      },
      ContactPage: {
        title: "Контакты",
        description: "Свяжитесь со мной любым удобным для Вас способом",
        btn: "Отправить сообщение",
        modalTitle: "Напишите мне",
        sosial: "Я в социальных сетях",
      },
      Navbar: {
        home: "Главная",
        about: "Обо мне",
        skills: "Навыки",
        portfolio: "Портфолио",
        contact: "Контакты",
      },
      Modal: {
        name: "Имя",
        email: "Эл. почта",
        tel: "Номер телефона",
        message: "Сообщение",
        send: "Отправить",
        close: "Закрыть",
        alert: "Спасибо что связались со мной",
      },
      PortfolioStore: {
        title:
          "Онлайн магазин с использованием Firebase, Vuex, Vue-router и Vuetify",
      },
      PortfolioMovie: {
        title:
          "Топ 250 фильмов с использованием Vue-router, Vuex и Bootstrap-vue",
      },
      PortfolioContactBook: {
        title:
          "Контактная книга с использованием Vue-router (динамические пути), Vuex, LocalStorage",
      },
    },
  },
});
