import {disableScroll} from "../../functions/disable-scroll";
import {enableScroll} from "../../functions/enable-scroll";


export default function burgerJs() {
  const menu = document.querySelector('.nav__menu__block');
  const menuBtn = document.querySelector('.menu__icon');
  const menuMobile = document.querySelector('.nav__menu-mobile');
  const menuBtnMobile = document.querySelector('.menu__icon-mobile');
  const check = document.querySelector('.check');

  if (menu && menuBtn) {
    menuBtn.addEventListener('click', e => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  }

  if (menuMobile && menuBtnMobile) {
    menuBtnMobile.addEventListener('click', e => {
      menuMobile.classList.toggle('active');
      menuBtnMobile.classList.toggle('active');

      if (menuMobile.classList.contains('active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
  }
}
