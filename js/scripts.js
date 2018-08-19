(function () {
'use strict';

  const navMain = document.querySelector('.menu');
  const navToggle = document.querySelector('.menu__toggle');

  if (navMain) {
    navMain.classList.remove('menu--nojs');
  }

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('menu--closed')) {
      navMain.classList.remove('menu--closed');
      navMain.classList.add('menu--opened');
    } else {
      navMain.classList.add('menu--closed');
      navMain.classList.remove('menu--opened');
    }
  });


  const anchorTop = document.createElement(`a`);
  anchorTop.setAttribute(`id`,`#top`);
  const btnUp = document.createElement(`a`);
  btnUp.innerHTML = `^Вверх`.trim();
  btnUp.classList.add(`link`);
  btnUp.classList.add(`link--up`);
  btnUp.setAttribute(`href`,anchorTop.getAttribute(`id`));

  const parentElem = document.querySelector('.content');


  window.onscroll = function() {
    let pageY =
                window.pageYOffset
                || document.documentElement.scrollTop;
    let innerHeight = document.documentElement.clientHeight;

    parentElem.insertBefore(btnUp, parentElem.firstElementChild);
    parentElem.insertBefore(anchorTop, parentElem.btnUp);

    btnUp.classList.toggle(`link--show`, pageY > innerHeight);
  }


  const eqiupMenu = document.querySelector('.equipments');
  const eqiupToggle = document.querySelector('.equipments__toggle');

  if (eqiupMenu) {
    eqiupMenu.classList.remove('equipments--nojs');

    eqiupMenu.addEventListener('click', function() {
      if (eqiupMenu.classList.contains('equipments--closed')) {
        eqiupMenu.classList.remove('equipments--closed');
        eqiupMenu.classList.add('equipments--opened');
      } else {
        eqiupMenu.classList.add('equipments--closed');
        eqiupMenu.classList.remove('equipments--opened');
      }
    });
  }
})();
