// Импортируем объект content из файла content.js


console.log("Скрипт начал выполнение");

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM полностью загружен");

    // Ваш JavaScript-код здесь

    const form = document.querySelector('form');
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const bannerTitle = document.querySelector('.banner-text h1');
    const bannerSubtitle = document.querySelector('.banner-text p');
    const langBtns = document.querySelectorAll('.language-switcher .dropdown-content .lang-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Здесь вы можете добавить логику отправки формы
        console.log('Форма отправлена');
        console.log('Имя:', nameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Сообщение:', messageInput.value);
        
        // Очистить поля формы
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });

    const dropdownBtn = document.querySelector('.language-switcher .dropdown button');
    if (!dropdownBtn) {
        console.error("Кнопка выпадающего меню не найдена");
    }
    if (dropdownBtn) {
        console.log("Найден элемент .dropdown button");
        dropdownBtn.addEventListener('click', function() {
            document.querySelector('.language-switcher .dropdown-content').classList.toggle('show');
        });
    } else {
        console.error("Элемент .dropdown button не найден");
    }

    if (langBtns.length === 0) {
        console.error("Кнопки языка не найдены");
    }
    if (langBtns.length > 0) {
        console.log("Найдены элементы .lang-btn");
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                setLanguage(lang);
                updateLanguageBtn(lang);
            });
        });
    } else {
        console.error("Элементы .lang-btn не найдены");
    }

    function setLanguage(lang) {
    console.log("Выбран язык:", lang);
    const translations = content[lang];
    if (translations) {
        for (let key in translations) {
            const elem = document.querySelector(`[data-lang-content="${key}"]`);
            if (elem) {
                elem.innerHTML = translations[key];
            }
        }
        const bannerTitle = document.querySelector('.banner-text h1');
        const bannerSubtitle = document.querySelector('.banner-text p[data-lang-content="bannerSubtitle"]');
        const bannerExperience = document.querySelector('.banner-text p[data-lang-content="bannerExperience"]');
        
        if (bannerTitle) bannerTitle.textContent = translations.bannerTitle;
        if (bannerSubtitle) bannerSubtitle.textContent = translations.bannerSubtitle;
        if (bannerExperience) bannerExperience.textContent = translations.bannerExperience;
    // Обновление заголовков в разделе навыков
        const skillsTitle = document.querySelector('#skills h2');
        const advancedTitle = document.querySelector('#skills .skill-level:nth-child(1) h3');
        const intermediateTitle = document.querySelector('#skills .skill-level:nth-child(2) h3');
        const basicTitle = document.querySelector('#skills .skill-level:nth-child(3) h3');
        
        if (skillsTitle) skillsTitle.textContent = translations.skills;
        if (advancedTitle) advancedTitle.textContent = translations.advancedLevel;
        if (intermediateTitle) intermediateTitle.textContent = translations.intermediateLevel;
        if (basicTitle) basicTitle.textContent = translations.basicLevel;
    } else {
        console.error("Перевод для выбранного языка не найден");
    }
}

    function updateLanguageBtn(lang) {
        const selectedLangBtn = document.querySelector('.language-switcher .dropbtn');
        selectedLangBtn.innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    // Установить начальный язык в самом конце
    setLanguage('ru');
});
