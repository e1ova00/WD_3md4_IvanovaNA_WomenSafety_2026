// menu.js — навигация открывается кликом по логотипу (≤834px)

(function () {
  var logo = document.querySelector('.header__logo');
  var nav  = document.getElementById('nav');
  if (!logo || !nav) return;

  var isMobile = window.matchMedia('(max-width: 834px)');

  function openMenu() {
    nav.classList.add('nav--open');
    logo.classList.add('header__logo--nav-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('nav--open');
    logo.classList.remove('header__logo--nav-open');
    document.body.style.overflow = '';
  }

  /* Клик по логотипу работает как меню только на ≤834px */
  logo.addEventListener('click', function (e) {
    if (!isMobile.matches) return;   /* на десктопе — обычная ссылка на #hero */
    e.preventDefault();
    nav.classList.contains('nav--open') ? closeMenu() : openMenu();
  });

  /* Закрываем при клике на пункт меню */
  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Закрываем Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* Закрываем кликом по подложке оверлея */
  nav.addEventListener('click', function (e) {
    if (e.target === nav) closeMenu();
  });

  /* При ресайзе до десктопа — закрываем и восстанавливаем прокрутку */
  isMobile.addEventListener('change', function (mq) {
    if (!mq.matches) closeMenu();
  });
})();
