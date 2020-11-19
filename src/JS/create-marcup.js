import menuFood from '../JSON/menu-list.json';
import templateMenuCard from '../templates/menu.hbs';

import { refs } from './variables.js';

// TODO: Створення розмітки
const createMenuMarkup = templateMenuCard(menuFood);

refs.menuList.insertAdjacentHTML('afterbegin', createMenuMarkup);
