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