import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ru",
  fallbackLocale: "en",
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
          "• Консультации и обучение Excel (с 0 до продвинутого уровня): формулы, сводные таблицы, надстройки Power Query и Power Pivot.{break}{break}• Консультации и обучение по Power BI (с 0 до продвинутого уровня): работа с различными источниками данных, язык DAX, визуализации, дэшборды.{break}{break}• Построение отчетов на базе Excel или Power BI под ключ. Возможно подключение к следующим источникам: Excel, Google таблицы, CRM, 1C, MY SQL и другие.{break}{break}• Консультации по личным финансам и инвестициям: выбор брокера, обучение работе на бирже, формирование инвестиционного портфеля под ваши цели.",
      },
      SkillsPage: {
        title: "Skills",
      },
      PortfolioPage: {
        title: "Portfolio",
        project_1: `В дэшборде представлены таблицы и графики для анализа основных KPI по блоку основных затрат, а именно сырья и упаковки, используемых для производства. Основные показатели: инфляция, точность прогноза, отклонение цены и количества от плана.`,
        project_2:
          "В дэшборде представлены визуализации для анализа выручки, количества учеников, среднего чека по ученику по различным курсам, периодам, источникам лидов.",
        project_3:
          "В дэшборде представлена аналитика работы офисов по лидам, воронки продаж и системы контроля качества обслуживания клиентов.",
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
        reviews: "Reviews",
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
      Project_1: {
        title: `Анализ основных затрат для компании "Mars"`,
        disclamer: "*Цифры скрыты для соблюдения Коммерческой тайны",
      },
      Project_2: {
        title: "Анализ продаж для онлайн-школы",
      },
      Project_3: {
        title: "Анализ работы отдела продаж",
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
          "Привет, я бизнес-аналитик, эксперт по финансам и квалифицированный инвестор. У меня есть международный опыт работы на позиции бизнес-аналитика (компании Mars и Coca-Cola HBC). Имею профильное образование по направлению Инвестиционный менеджмент, опыт торговли на фондовом рынке более трёх лет и статус квалифицированного инвестора.",
        subTitle: "Чем могу быть полезна?",
        subAbout:
          "• Консультации и обучение Excel (с 0 до продвинутого уровня): формулы, сводные таблицы, надстройки Power Query и Power Pivot.{break}{break}• Консультации и обучение по Power BI (с 0 до продвинутого уровня): работа с различными источниками данных, язык DAX, визуализации, дэшборды.{break}{break}• Построение отчетов на базе Excel или Power BI под ключ. Возможно подключение к следующим источникам: Excel, Google таблицы, CRM, 1C, MY SQL и другие.{break}{break}• Консультации по личным финансам и инвестициям: выбор брокера, обучение работе на бирже, формирование инвестиционного портфеля под ваши цели.",
      },
      SkillsPage: {
        title: "Навыки",
      },
      PortfolioPage: {
        title: "Портфолио",
        project_1: `В дэшборде представлены таблицы и графики для анализа основных KPI по блоку основных затрат, а именно сырья и упаковки, используемых для производства. Основные показатели: инфляция, точность прогноза, отклонение цены и количества от плана`,
        project_2:
          "В дэшборде представлены визуализации для анализа выручки, количества учеников, среднего чека по ученику по различным курсам, периодам, источникам лидов",
        project_3:
          "В дэшборде представлена аналитика работы офисов по лидам, воронки продаж и системы контроля качества обслуживания клиентов",
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
        reviews: "Отзывы",
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
      Project_1: {
        title: `Анализ основных затрат для компании "Mars"`,
        disclamer: "*Цифры скрыты для соблюдения Коммерческой тайны",
      },
      Project_2: {
        title: "Анализ продаж для онлайн-школы",
      },
      Project_3: {
        title: "Анализ работы отдела продаж",
      },
    },
  },
});
