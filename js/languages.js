// Récupérez la langue actuelle depuis localStorage, par défaut en français
let currentLanguage = localStorage.getItem('language') || 'fr';

// Chargez les traductions de la langue actuelle
let translations = {};


function loadTranslations() {
  fetch(`languages/${currentLanguage}.json`)
      .then(response => response.json())
      .then(data => {
          translations = data;
          translatePage(); 
      })
      .catch(error => console.error('Error loading translations', error));
}

// Traduisez la page en utilisant les traductions actuelles
function translatePage() {
    document.getElementById('homeText').textContent = translations.homeText;
    document.getElementById('pageText').textContent = translations.pageText;
    document.getElementById('portfolioText').textContent = translations.portfolioText;
    // document.getElementById('comicBookStore').textContent = translations.comicBookStore;
    // document.getElementById('videoPortal').textContent = translations.videoPortal;
    // ... autres traductions
    document.getElementById('homeText1').textContent = translations.homeText;
    document.getElementById('pageText1').textContent = translations.pageText;
    document.getElementById('portfolioText1').textContent = translations.portfolioText;
    document.getElementById('comicBookStore1').textContent = translations.comicBookStore;
    document.getElementById('videoPortal1').textContent = translations.videoPortal;
}

// Changez la langue et mettez à jour les traductions
function changeLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    loadTranslations();
}

// Fonction pour configurer chaque dropdown
function setupDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
            changeLanguage(option.getAttribute('value')); // Appeler la fonction changeLanguage avec la valeur de l'option
        });
    });
}

// Initialiser les traductions au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  loadTranslations();
  // Setup each dropdown separately
  setupDropdown('dropdown1');
  setupDropdown('dropdown2');
});