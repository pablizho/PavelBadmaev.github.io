const content = {
  ru: {
    aboutMe: 'Обо мне',
    experience: 'Опыт работы',
    skills: 'Навыки',
    portfolio: 'Портфолио',
    contact: 'Контакты',
    bioContent: `<p>Привет! Меня зовут Павел. Я QA engineer с четырехлетним опытом работы в мобильной игровой индустрии.</p>
                 <p>В последние годы я работал в студиях Stereo 7, Playphoria и Finiki Games, где приобрёл опыт работы с Git, Unity и автоматизацией тестирования. Моя специализация – hyper/hybrid casual и tower defense, а также я участвовал в создании мобильных игр на Unity и занимался частичным менеджментом проектов.</p>
                 <p>Образование началось со школы, продолжилось в строительном колледже, а затем курсы по тестированию от GeekBrains позволили систематизировать знания в области QA. Сейчас развиваюсь в ручном и автоматизированном тестировании, а также в разработке.</p>`,
    experienceContent: [

       {
        company: 'Finiki Games',
        url: 'https://finiki.games/',
        position: 'QA Engineer',
        period: 'Сентябрь 2024 — по настоящее время',
        responsibilities: [
          'Тестирование Match-3 RPG (<a href="https://play.google.com/store/apps/details?id=com.finiki.ac.puzzlerpg" target="_blank">PuzzlerPG</a>)',
          'Тестирование клиент-серверной архитектуры: проверка работы как на серверной, так и на клиентской стороне',
          'Изменение и валидация JSON на сервере',
          'Приемка фичей',
          'Тестирование в редакторе Unity',
          'Выполнение стандартных QA задач'
        ]
      },


      {
        company: 'Playphoria',
        url: 'https://www.playphoria.io/',
        position: 'QA',
        period: 'Декабрь 2021 — Август 2024 (2 года 9 месяцев)',
        responsibilities: [
          'Тестирование мобильных игр на Android/iOS/Unity',
          'Тестирование готовых игр, прототипов и внутренней платформы компании',
          'Регрессионное, интеграционное, функциональное и нефункциональное тестирование',
          'A/B тестирование',
          'Сбор логов через Charles, Adb logcat, imazing',
          'Работа с Git и Unity',
          'Интеграция с GameAnalytics',
          'Подготовка и актуализация тестовой документации',
          'Генерация идей для новых и текущих проектов',
          'Модерация Discord-серверов',
          'Загрузка ассетов из Asset Store на сервер компании',
          'Автоматизация тестирования на Appium',
          'Работа с Notion, Clickup, Trello',
          'Загрузка билдов в Google Play и App Store',
          'Подготовка скриншотов для сторов'
        ]
      },
      
      {
        company: 'Stereo 7',
        url: 'https://www.stereo7.com/',
        position: 'QA engineer',
        period: 'Февраль 2021 — Декабрь 2021 (11 месяцев)',
        responsibilities: [
          'Поиск и документирование багов в новых фичах билда',
          'Регрессионное, интеграционное и функциональное тестирование',
          'Тестирование клиент-серверной архитектуры (Postman)',
          'Работа с Firebase',
          'Сбор логов через Charles, Adb logcat, imazing',
          'Релиз новых версий на Google Play',
          'A/B тестирование',
          'Частичное управление проектами',
          'Работа с Trello, Jira, Confluence',
          'Customer support'
        ]
      },
      {
        company: 'VK Testers',
        position: 'Тестировщик',
        period: 'Декабрь 2020 — Январь 2021 (2 месяца)',
        responsibilities: [
          'Тестирование приложений ВКонтакте'
        ]
      },
      {
        company: 'Utest',
        position: 'Краудтестер',
        period: 'Июнь 2020 — Ноябрь 2020 (6 месяцев)',
        responsibilities: [
          'Написание тест-кейсов',
          'Составление баг-репортов'
        ]
      }
    ],
    skillsGroups: {
      testing: {
        title: 'Тестирование',
        skills: [
          'Функциональное тестирование',
          'Сквозное тестирование',
          'Приемочное тестирование',
          'Тестирование производительности',
          'Smoke-тестирование',
          'Регрессионное тестирование',
          'Ручное тестирование',
          'Подготовка тестовых данных',
          'A/B тесты',
          'Тестирование клиент-серверных приложений'
        ]
      },
      tools: {
        title: 'Инструменты',
        skills: [
          'Android Studio',
          'Adb logcat',
          'Imazing',
          'Selenium IDE',
          'Trello',
          'Jira',
          'Confluence',
          'Notion',
          'Firebase',
          'Game Analytics',
          'TeamCity',
          'Appium',
          'Unity',
          'Visual Studio C#',
          'Charles',
          'Postman',
          'Git',
          'MySQL',
          'Photoshop',
          'Работа с JSON'
        ]
      }
    },
    portfolioContent: [
      {
        title: 'Moon Pioneer',
        image: 'Image/Pioner.jpg',
        link: 'https://play.google.com/store/apps/details?id=com.norwichsidegames.tothemoon',
        rating: '56.9 тыс.',
        downloads: '10 млн+'
      },
      {
        title: 'Oilman',
        image: 'Image/Oilman.jpg',
        link: 'https://play.google.com/store/apps/details?id=com.lilacwoodgames.oilman',
        rating: '28.5 тыс.',
        downloads: '5 млн+'
      },
      {
        title: 'Idle Lumberjack 2',
        image: 'Image/Lumberjack.jpg',
        link: 'https://play.google.com/store/apps/details?id=by.hitbox.magicwoods',
        rating: '108 тыс.',
        downloads: '10 млн+'
      },
      {
        title: 'Beekeeper',
        image: 'Image/Beekeeper.jpg',
        link: 'https://play.google.com/store/apps/details?id=com.redflowersgames.beekeeper',
        rating: '3.32 тыс.',
        downloads: '1 млн+'
      },
      {
        title: 'Water Power',
        image: 'Image/Water_power.jpg',
        link: 'https://play.google.com/store/apps/details?id=com.mountaincreekgames.waterpower',
        rating: '12.9 тыс.',
        downloads: '1 млн+'
      },
      {
        title: 'Camp Defense',
        image: 'Image/Camp_Defense.jpg',
        link: 'https://play.google.com/store/apps/details?id=com.stereo7games.tl',
        rating: '28.5 тыс.',
        downloads: '1 млн+'
      },
      {
        title: 'PuzzlerPG',
        image: 'Image/PuzzlerPG.jpg',
        link: 'https://play.google.com/store/apps/details?id=com.finiki.ac.puzzlerpg',
        rating: '749',
        downloads: '10 тыс.+'
      }
    ],
    contactContent: `
      <ul class="contact-list">
        <li><i class="fas fa-envelope"></i> <a href="mailto:pavelsmirnov98@gmail.com">pavelsmirnov98@gmail.com</a></li>
        <li><i class="fas fa-phone"></i> <a href="tel:+79538075371">+7 (953) 807-53-71</a></li>
        <li><i class="fas fa-map-marker-alt"></i> Новосибирск, Россия</li>
        <li><i class="fab fa-telegram"></i> <a href="https://t.me/Zogang" target="_blank">@Zogang</a></li>
      </ul>
    `,
    bannerTitle: 'Павел Бадмаев',
    bannerSubtitle: 'QA GameDev',
    bannerExperience: 'Опыт работы 4 года 10 месяцев'
  },
  // Аналогичная структура для других языков (en, zh и т.д.) при необходимости
};
