// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";


// circle text

const circleType = new CircleType(document.getElementById('circle-text'));
circleType.radius(160).dir(-1);

//========================================================================================================================================================
window.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
      const timer = document.querySelector('.cd-container');
      timer.style.overflow = "visible!important";
   }, 2000);

})
