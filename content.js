const content = {
    ru: {
        aboutMe: 'Обо мне',
        experience: 'Опыт работы',
        portfolio: 'Портфолио',
        contact: 'Контакты',
        bioContent: `<p>Привет! Меня зовут Павел, и я профессиональный тестировщик с четырехлетним опытом работы в мобильной игровой индустрии. Моя карьера началась в крупных компаниях, таких как Utest и Vk Testers, где я приобрел ценный опыт и навыки в области функционального и автоматизированного тестирования.</p>
                     <p>В последние годы я работал в студиях Stereo 7, Deus Craft и Playphoria, где смог глубже погрузиться в процессы тестирования игр. Моя работа заключается не только в обнаружении багов, но и в активном участии в процессе создания качественных игровых продуктов.</p>
                     <p>Я владею широким спектром инструментов и технологий, включая Git для управления версиями кода, A/B-тестирование для оптимизации пользовательского опыта, TeamCity и Jira для организации рабочего процесса, а также многими другими инструментами, необходимыми для успешного тестирования и разработки игр.</p>
                     <p>Мой образовательный путь начался с средней школы, продолжился в строительном колледже, где я получил техническое образование, и завершился курсами по тестированию от GeekBrains, которые помогли мне систематизировать и расширить мои знания в области QA.</p>`,
        experienceContent: `
            <h3><a href="https://www.playphoria.io/" target="_blank">Playphoria</a></h3>
            <p><strong>Должность:</strong> QA</p>
            <p><strong>Период:</strong> Декабрь 2021 — Август 2024 (2 года 9 месяцев)</p>
            <ul>
                <li>Тестирование мобильных игр на Android/iOS/Unity</li>
                <li>Тестирование прототипов и внутренней платформы компании</li>
                <li>Составление и актуализация тестовой документации</li>
                <li>Генерация идей для новых и текущих проектов/прототипов</li>
                <li>Модерация Discord серверов</li>
                <li>Загрузка ассетов из Asset Store в собственный сервер компании</li>
            </ul>

            <h3><a href="https://www.deuscraft.com/" target="_blank">Deus Craft</a></h3>
            <p><strong>Должность:</strong> QA engineer</p>
            <p><strong>Период:</strong> Январь 2022 — Март 2022 (3 месяца)</p>
            <ul>
                <li>Тестирование игр: Grand Hotel Mania, Evolution</li>
                <li>Составление и актуализация тестовой документации</li>
                <li>Участие в ежедневных митапах с командой тестирования</li>
            </ul>

            <h3><a href="https://www.stereo7.com/" target="_blank">Stereo 7</a></h3>
            <p><strong>Должность:</strong> QA engineer</p>
            <p><strong>Период:</strong> Февраль 2021 — Декабрь 2021 (11 месяцев)</p>
            <ul>
                <li>Обеспечение качества новых билдов</li>
                <li>Поиск и документирование багов в новых фичах билда</li>
                <li>Регрессионное тестирование</li>
                <li>Релиз новых версий на Google Play</li>
                <li>A/B тестирование</li>
                <li>Частичное управление проектами</li>
            </ul>

            <h3>VK Testers</h3>
            <p><strong>Должность:</strong> Тестировщик</p>
            <p><strong>Период:</strong> Декабрь 2020 — Январь 2021 (2 месяца)</p>
            <ul>
                <li>Тестирование приложений ВКонтакте</li>
            </ul>

            <h3>Utest</h3>
            <p><strong>Должность:</strong> Краудтестер</p>
            <p><strong>Период:</strong> Июнь 2020 — Ноябрь 2020 (6 месяцев)</p>
            <ul>
                <li>Написание тест-кейсов</li>
                <li>Составление баг-репортов</li>
            </ul>
        `,
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
        bannerExperience: 'Опыт работы 4 года 3 месяца',
        // Другие переводы для баннера
    },
    en: {
        aboutMe: 'About Me',
        experience: 'Work Experience',
        portfolio: 'Portfolio',
        contact: 'Contact',
        bioContent: 'Content of your biography in English...',
        experienceContent: 'Content of your work experience in English...',
        // ... other content in English
        bannerTitle: 'Pavel Badmaev',
        bannerSubtitle: 'QA GameDev',
        // Другие переводы для баннера
    },
    zh: {
        aboutMe: '关于我',
        experience: '工作经验',
        portfolio: '作品集',
        contact: '联系方式',
        bioContent: '您的中文传记内容......',
        experienceContent: '您的中文工作经验内容......',
        // ... other content in Chinese
        bannerTitle: '保尔巴德马耶夫', // Заголовок баннера на китайском
        bannerSubtitle: 'QA GameDev', // Подзаголовок баннера на китайском
        // Другие переводы для баннера на китайском
    },
    kk: {
        aboutMe: 'Мен туралы',
        experience: 'Жұмыс тәжірибесі',
        portfolio: 'Портфолио',
        contact: 'Байланыс',
        bioContent: 'Сіздің қазақ тіліндегі өмірбаяныңыздың мазмұны...',
        experienceContent: 'Сіздің қазақ тіліндегі жұмыс тәжірибеңіздің мазмұны...',
        // ... other content in Kazakh
        bannerTitle: 'Павел Бадмаев', // Заголовок баннера на казахском
        bannerSubtitle: 'QA GameDev', // Подзаголовок баннера на казахском
        // Другие переводы для баннера на казахском
    },
    be: {
        aboutMe: 'Пра мяне',
        experience: 'Вопыт працы',
        portfolio: 'Партфоліа',
        contact: 'Кантакты',
        bioContent: 'Змест вашай біяграфіі на беларускай мове...',
        experienceContent: 'Змест вашага вопыту працы на беларускай мове...',
        // ... other content in Belarusian
        bannerTitle: 'Павел Бадмаев', // Заголовок баннера на белорусском
        bannerSubtitle: 'QA GameDev', // Подзаголовок баннера на белорусском
        // Другие переводы для баннера на белорусском
    },
    uk: {
        aboutMe: 'Про мене',
        experience: 'Досвід роботи',
        portfolio: 'Портфоліо',
        contact: 'Контакти',
        bioContent: 'Зміст вашої біографії українською мовою...',
        experienceContent: 'Зміст вашого досвіду роботи українською мовою...',
        // ... other content in Ukrainian
        bannerTitle: 'Павло Бадмаєв', // Заголовок баннера на украинском
        bannerSubtitle: 'QA GameDev', // Подзаголовок баннера на украинском
        // Другие переводы для баннера на украинском
    }
};
