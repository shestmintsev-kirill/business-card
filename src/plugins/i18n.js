import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ru",
  fallbackLocale: "en",
  messages: {
    en: {
      HomePage: {
        name1: "ANALYTICS",
        name2: "FINANCE",
        name3: "INVESTMENTS",
        profession: "Alina Shestmintseva",
      },
      AboutPage: {
        title: "Who am I?",
        about:
          "Hi, I am business analyst, financial expert and qualified investor. I have international working experience on business analyst positions (Mars, Coca-Cola HBC). I have professional degree of Investment management, 3-year experience of trading on funding market and the qualified investor status.",
        subTitle: "How could I be useful?",
        subAbout:
          "• Consultation and teaching of Excel (from beginner to advanced level): formulas, pivot tables, Power Query and Power Pivot.{break}{break}• Consultation and teaching of Power BI (from beginner to advanced level): work with different data sources, DAX language, visualization, dashboards.{break}{break}• Developing of reports on Excel and Power BI basis from scratch. Possible source connections: Excel, google tables, CRM, 1C, MySQL, etc.{break}{break}• Personal finance and investment consultation: choosing of broker, work on funding market, formation of investment portfolio in accordance to your goal.",
      },
      SkillsPage: {
        title: "Skills",
      },
      PortfolioPage: {
        title: "Portfolio",
        project_1:
          "Key figures: inflation, forecast accuracy, price and quantity deviation from plan.",
        project_2:
          "Key figures: proceeds, profit, student number, average check by student, courses, period, source of leads.",
        project_3:
          "Key figures: leads, sales conversion, quality control system.",
      },
      Review: {
        title: "Reviews",
        review_1: {
          review:
            "Алина помогла мне разобраться в базовых вещах в инвестициях, ответила на все вопросы доступным языком. Очень внимательная к вопросам, рекомендую!",
          title: "Консультация по инвестициям",
          name: "Ольга",
        },
        review_2: {
          review:
            "Все четко, в срок и по делу. Алина сделала срочную для нас задачу и результат презентовала заказчику. Речь поставлена, в Power BI разбирается на отлично!",
          title: "Аналитика под ключ в Power BI",
          name: "Михаил",
        },
        review_3: {
          review:
            "Хорошее знание мат. части. Понятное объяснение. Быстрый прогресс.",
          title: "Обучение Power BI",
          name: "Эльдар",
        },
        review_4: {
          review:
            "Отличное объяснение Power Query. По моей задаче было подсказано очень быстро и все было предельно понятно. Специалист отвечает на все вопросы и у неё получилось объяснить даже такому тупому человеку как я",
          title: "Консультация по Power Query",
          name: "Евгений",
        },
        review_5: {
          review: "Все супер",
          title: "Консультация по Power BI",
          name: "Денис",
        },
        review_6: {
          review:
            "Алина смогла оказать помощь в очень короткие сроки. Надеюсь на дальнейшее сотрудничество!",
          title: "Консультация по инвестициям",
          name: "Сергей",
        },
        review_7: {
          review:
            "Хороший специалист. Всё понятно объяснила. Всем рекомендую данного специалиста.",
          title: "Обучение Power BI",
          name: "Тимофей",
        },
        review_8: {
          review:
            "Быстро вникла в задачу, учла пожелания. Не нашла ошибку в файле.",
          title: "Консультация по Excel",
          name: "Оксана",
        },
        review_9: {
          review:
            "Спасибо. Алина объясняет с большим желанием помочь. Терпеливо, доходчиво. Рекомендую!",
          title: "Обучение Excel",
          name: "Раиса",
        },
        review_10: {
          review:
            "Спасибо за отчеты, работа выполнена в тот срок, который и обговаривали. Результатом довольна. Рекомендую данного специалиста.",
          title: "Аналитика под ключ в Power BI",
          name: "Марина",
        },
        review_11: {
          review:
            "Спасибо Алине большое! Помогла с моей рабочей  задачей в power BI, на которой я прям забуксовала, дальше дело пошло. Я в этом деле новичок, а Алина быстро схватила суть задачи и предложила решение! Все обозначенные мною вопросы успели обсудить. Спасибо ещё раз!",
          title: "Консультация по Power BI",
          name: "Екатерина",
        },
        review_12: {
          review: "Отличный специалист по excel, рекомендую!",
          title: "Консультация по Excel",
          name: "Вадим",
        },
        review_13: {
          review:
            "Алина, благодарю за очень продуктивное занятие. Я не новичок в power bi, при этом Алина показала мне полезные фишки для оптимизации моих запросов в power query и power bi. Занятие проходило в zoom: я сама зашла в power bi и демонстрировала свой экран. Алина подсказывала, что мне сделать. Такой формат занятия мне очень подошёл: фактически я все сделала своими руками, поэтому лучше поняла и запомнила.  Очень рекомендую Алину за профессионализм!",
          title: "Консультация по Power BI",
          name: "Ирина",
        },
        review_14: {
          review:
            "Выражаю огромную благодарность за помощь в выполнении рабочих заданий в excel. Спасибо за подробное объяснение и нестандартный подход ( я бы сказала, даже творческий )! Обязательно будут рекомендоваться Вас своим друзьям и коллегам ! Теперь я знаю к кому я могу обратиться , если потребуется помощь! Ещё раз спасибо!",
          title: "Обучение Excel",
          name: "Анна",
        },
        review_15: {
          review:
            "Хочу также оставить свой отзыв о пройденном курсе по инвестициям и твоём сопровождении. Все получилось отлично! Ты отлично подаёшь информацию, это не «сухая» теория, а реальные примеры, графики, знания из твоего опыта.  Что-то новенькое и не совсем понятное для меня можешь разложить обычным языком и все объяснить.  Благодаря тебе обучение прошло максимально быстро (менее месяца), спасибо, что напоминала о планировании дат следующих занятий. Да, после этого курса я вовлечена в Инвестиции и не намерена останавливаться на достигнутом, ведь есть то, что я ещё хочу познать и открыть для себя. Спасибо за кучу мотивации и энергии. Не пожалела, что прошла обучение и провела время в твоей приятной компании, спасибо!",
          title: "Сопровождение, Инвестиции",
          name: "Ульяна",
        },
        review_16: {
          review:
            "Хороший преподаватель. Получен ответ на вопрос, последовательно и структурировано даёт информацию. Рекомендую в качестве наставника.",
          title: "Консультация по Power Query",
          name: "Елена",
        },
        review_17: {
          review:
            "Брала у Алины занятие по Power BI. Все занятие было очень структурировано от самого простого к более сложному. На примерах мы разбирали как визуализовать данные, какие бывают форматы визуализации, как менять данные при загрузке и многое другое. Занятием осталась очень довольна! Однозначно буду рекомендовать Алину своим знакомым для обучения!",
          title: "Обучение Power BI",
          name: "Анастасия",
        },
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
        title: `Prime cost analysis for Mars LLC`,
        disclamer: "*numbers are hidden due to Commercial policy",
      },
      Project_2: {
        title: "Sales analysis for online-school",
      },
      Project_3: {
        title: "Sales department performance analysis",
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
      Review: {
        title: "Отзывы",
        review_1: {
          review:
            "Алина помогла мне разобраться в базовых вещах в инвестициях, ответила на все вопросы доступным языком. Очень внимательная к вопросам, рекомендую!",
          title: "Консультация по инвестициям",
          name: "Ольга",
        },
        review_2: {
          review:
            "Все четко, в срок и по делу. Алина сделала срочную для нас задачу и результат презентовала заказчику. Речь поставлена, в Power BI разбирается на отлично!",
          title: "Аналитика под ключ в Power BI",
          name: "Михаил",
        },
        review_3: {
          review:
            "Хорошее знание мат. части. Понятное объяснение. Быстрый прогресс.",
          title: "Обучение Power BI",
          name: "Эльдар",
        },
        review_4: {
          review:
            "Отличное объяснение Power Query. По моей задаче было подсказано очень быстро и все было предельно понятно. Специалист отвечает на все вопросы и у неё получилось объяснить даже такому тупому человеку как я",
          title: "Консультация по Power Query",
          name: "Евгений",
        },
        review_5: {
          review: "Все супер",
          title: "Консультация по Power BI",
          name: "Денис",
        },
        review_6: {
          review:
            "Алина смогла оказать помощь в очень короткие сроки. Надеюсь на дальнейшее сотрудничество!",
          title: "Консультация по инвестициям",
          name: "Сергей",
        },
        review_7: {
          review:
            "Хороший специалист. Всё понятно объяснила. Всем рекомендую данного специалиста.",
          title: "Обучение Power BI",
          name: "Тимофей",
        },
        review_8: {
          review:
            "Быстро вникла в задачу, учла пожелания. Не нашла ошибку в файле.",
          title: "Консультация по Excel",
          name: "Оксана",
        },
        review_9: {
          review:
            "Спасибо. Алина объясняет с большим желанием помочь. Терпеливо, доходчиво. Рекомендую!",
          title: "Обучение Excel",
          name: "Раиса",
        },
        review_10: {
          review:
            "Спасибо за отчеты, работа выполнена в тот срок, который и обговаривали. Результатом довольна. Рекомендую данного специалиста.",
          title: "Аналитика под ключ в Power BI",
          name: "Марина",
        },
        review_11: {
          review:
            "Спасибо Алине большое! Помогла с моей рабочей  задачей в power BI, на которой я прям забуксовала, дальше дело пошло. Я в этом деле новичок, а Алина быстро схватила суть задачи и предложила решение! Все обозначенные мною вопросы успели обсудить. Спасибо ещё раз!",
          title: "Консультация по Power BI",
          name: "Екатерина",
        },
        review_12: {
          review: "Отличный специалист по excel, рекомендую!",
          title: "Консультация по Excel",
          name: "Вадим",
        },
        review_13: {
          review:
            "Алина, благодарю за очень продуктивное занятие. Я не новичок в power bi, при этом Алина показала мне полезные фишки для оптимизации моих запросов в power query и power bi. Занятие проходило в zoom: я сама зашла в power bi и демонстрировала свой экран. Алина подсказывала, что мне сделать. Такой формат занятия мне очень подошёл: фактически я все сделала своими руками, поэтому лучше поняла и запомнила.  Очень рекомендую Алину за профессионализм!",
          title: "Консультация по Power BI",
          name: "Ирина",
        },
        review_14: {
          review:
            "Выражаю огромную благодарность за помощь в выполнении рабочих заданий в excel. Спасибо за подробное объяснение и нестандартный подход ( я бы сказала, даже творческий )! Обязательно будут рекомендоваться Вас своим друзьям и коллегам ! Теперь я знаю к кому я могу обратиться , если потребуется помощь! Ещё раз спасибо!",
          title: "Обучение Excel",
          name: "Анна",
        },
        review_15: {
          review:
            "Хочу также оставить свой отзыв о пройденном курсе по инвестициям и твоём сопровождении. Все получилось отлично! Ты отлично подаёшь информацию, это не «сухая» теория, а реальные примеры, графики, знания из твоего опыта.  Что-то новенькое и не совсем понятное для меня можешь разложить обычным языком и все объяснить.  Благодаря тебе обучение прошло максимально быстро (менее месяца), спасибо, что напоминала о планировании дат следующих занятий. Да, после этого курса я вовлечена в Инвестиции и не намерена останавливаться на достигнутом, ведь есть то, что я ещё хочу познать и открыть для себя. Спасибо за кучу мотивации и энергии. Не пожалела, что прошла обучение и провела время в твоей приятной компании, спасибо!",
          title: "Сопровождение, Инвестиции",
          name: "Ульяна",
        },
        review_16: {
          review:
            "Хороший преподаватель. Получен ответ на вопрос, последовательно и структурировано даёт информацию. Рекомендую в качестве наставника.",
          title: "Консультация по Power Query",
          name: "Елена",
        },
        review_17: {
          review:
            "Брала у Алины занятие по Power BI. Все занятие было очень структурировано от самого простого к более сложному. На примерах мы разбирали как визуализовать данные, какие бывают форматы визуализации, как менять данные при загрузке и многое другое. Занятием осталась очень довольна! Однозначно буду рекомендовать Алину своим знакомым для обучения!",
          title: "Обучение Power BI",
          name: "Анастасия",
        },
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
