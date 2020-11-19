export const refs = {
  menuList: document.querySelector('.js-menu'),
  checkboxTheme: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
  savedTheme: localStorage.getItem('Theme'),
};

export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// export const lang = {
  // todo:  зараз добавлення класів (display:none)
//   RU: 'ru-lang',
//   UK: 'ua-lang',
// };