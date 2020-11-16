import menuList from '../JSON/menu-list.json';
import templateMenuCard from '../templates/menu.hbs';

// import { refs, Theme } from '../JS/variables.js';

export const refs = {
  menuList: document.querySelector('.js-menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
  savedTheme: localStorage.getItem('Theme'),
};

export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


refs.menuList.insertAdjacentHTML('afterbegin', onMenuEl(menuList));

function onMenuEl(menuList) {
  return templateMenuCard(menuList);
}

refs.checkbox.addEventListener('change', onChangeTheme);


if (refs.savedTheme) {
refs.body.classList.add(refs.savedTheme);
if (refs.savedTheme === Theme.DARK) {
refs.checkbox.checked = true;
}
}

function onChangeTheme(e) {
if (e.target.checked) {
refs.body.classList.remove(Theme.LIGHT);
refs.body.classList.add(Theme.DARK);
} else {
refs.body.classList.remove(Theme.DARK);
refs.body.classList.add(Theme.LIGHT);
}
  localStorage.setItem('Theme', refs.body.classList);
}
