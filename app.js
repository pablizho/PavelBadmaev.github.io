console.log("Скрипт начал выполнение");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM полностью загружен");

  // Установка начального языка
  setLanguage('ru');

  // Обработчик для кнопок выбора языка (если они появятся)
  const langBtns = document.querySelectorAll('.language-switcher .dropdown-content .lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      updateLanguageBtn(lang);
    });
  });

  // Пример работы с формой (если понадобится)
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Форма отправлена');
      // Здесь логика отправки формы...
      form.reset();
    });
  }

  // Логика для выпадающего меню языка (если используется)
  const dropdownBtn = document.querySelector('.language-switcher .dropdown button');
  if (dropdownBtn) {
    dropdownBtn.addEventListener('click', function() {
      document.querySelector('.language-switcher .dropdown-content').classList.toggle('show');
    });
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
});

// Функция установки языка и обновления всех динамических блоков
function setLanguage(lang) {
  console.log("Выбран язык:", lang);
  const translations = content[lang];
  if (!translations) {
    console.error("Перевод для выбранного языка не найден");
    return;
  }

  // Обновление статичных элементов
  document.querySelector('[data-lang-content="bannerTitle"]').textContent = translations.bannerTitle;
  document.querySelector('[data-lang-content="bannerSubtitle"]').textContent = translations.bannerSubtitle;
  document.querySelector('[data-lang-content="bannerExperience"]').textContent = translations.bannerExperience;
  document.querySelector('h2[data-lang-content="aboutMe"]').textContent = translations.aboutMe;
  document.querySelector('h2[data-lang-content="experience"]').textContent = translations.experience;
  document.querySelector('h2[data-lang-content="skills"]').textContent = translations.skills;
  document.querySelector('h2[data-lang-content="portfolio"]').textContent = translations.portfolio;
  document.querySelector('h2[data-lang-content="contact"]').textContent = translations.contact;
  document.querySelector('[data-lang-content="bioContent"]').innerHTML = translations.bioContent;
  document.querySelector('[data-lang-content="contactContent"]').innerHTML = translations.contactContent;

  // Рендер динамических блоков
  renderExperience(lang);
  renderSkills(lang);
  renderPortfolio(lang);
}

// Обновление кнопки выбора языка (если используется)
function updateLanguageBtn(lang) {
  const selectedLangBtn = document.querySelector('.language-switcher .dropbtn');
  if (selectedLangBtn) {
    selectedLangBtn.innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;
  }
}

// Рендер карточек опыта работы
function renderExperience(lang) {
  const experienceContainer = document.querySelector('.experience-container');
  const jobs = content[lang].experienceContent;
  let html = '';
  jobs.forEach(job => {
    html += `<div class="experience-card">
      <h3>${job.url ? `<a href="${job.url}" target="_blank">${job.company}</a>` : job.company}</h3>
      <p class="position"><strong>Должность:</strong> ${job.position}</p>
      <p class="period"><strong>Период:</strong> ${job.period}</p>
      <ul>`;
    job.responsibilities.forEach(task => {
      html += `<li>${task}</li>`;
    });
    html += `</ul></div>`;
  });
  experienceContainer.innerHTML = html;
}

// Рендер группы навыков
function renderSkills(lang) {
  const skillsContainer = document.querySelector('.skills-container');
  const groups = content[lang].skillsGroups;
  let html = '';
  for (let key in groups) {
    const group = groups[key];
    html += `<div class="skill-group">
      <h3>${group.title}</h3>
      <ul>`;
    group.skills.forEach(skill => {
      html += `<li>${skill}</li>`;
    });
    html += `</ul></div>`;
  }
  skillsContainer.innerHTML = html;
}

// Рендер карточек портфолио
function renderPortfolio(lang) {
  const portfolioContainer = document.querySelector('.portfolio-container');
  const items = content[lang].portfolioContent;
  let html = '';
  items.forEach(item => {
    html += `<div class="portfolio-card">
      <a href="${item.link}" target="_blank">
        <img src="${item.image}" alt="${item.title}">
        <div class="card-content">
          <h3>${item.title}</h3>
          <div class="rating"><i class="fas fa-star"></i> ${item.rating}</div>
          <div class="downloads"><i class="fas fa-download"></i> ${item.downloads}</div>
        </div>
      </a>
    </div>`;
  });
  portfolioContainer.innerHTML = html;
}
