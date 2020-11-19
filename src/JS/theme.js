import { refs, Theme } from './variables.js';

// TODO: слухач на зміні 
refs.checkboxTheme.addEventListener('change', onChangeTheme);

if (refs.savedTheme) {
  refs.body.classList.add(refs.savedTheme);
  if (refs.savedTheme === Theme.DARK) {
    refs.checkboxTheme.checked = true;
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
