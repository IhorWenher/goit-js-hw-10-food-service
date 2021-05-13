import cardsTmpl from './cards-template.hbs';
import cards from './menu.json';
import './styles.css';

// Разметка карточек

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createCardsMarkup(cards);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(cards) {
    return cards.map(cardsTmpl).join('');
}

// Изменения тем

const bodySelector = document.querySelector('body');
const themeSwitch = document.querySelector('.theme-switch__control');
const themeToggler = document.querySelector('.theme-switch__toggle');
const currentTheme = localStorage.getItem('Theme');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Загрузка до изменений переключателя 

if (currentTheme !== null || null) {
    bodySelector.classList.add(currentTheme);
    if (currentTheme === 'dark-theme'){
        themeToggler.setAttribute('checked', '')
    }
}

// Обработка событий переключателя

function changeTheme(addTheme, removeTheme) {
    if (addTheme === Theme.LIGHT) {
        themeToggler.removeAttribute('checked');
    } else (
        themeToggler.setAttribute('checked', '')
    )
    bodySelector.classList.add(addTheme);
    bodySelector.classList.remove(removeTheme);
    localStorage.setItem('Theme', addTheme);
}

function onChangeCheckbox(event) {
    if (!event.target.checked) {
        changeTheme(Theme.LIGHT, Theme.DARK);
    } else {
        changeTheme(Theme.DARK, Theme.LIGHT);
    }
}

themeSwitch.addEventListener('change', onChangeCheckbox);