import menuFood from '../JSON/menu-list.json';
import templateMenuCard from '../templates/menu.hbs';

import { refs, Theme } from '../JS/variables.js';


refs.menuList.insertAdjacentHTML('afterbegin', onMenuEl(menuFood));

function onMenuEl(menuFood) {
  return templateMenuCard(menuFood);
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
