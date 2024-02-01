//============================= MAIN-MENU-WORK =============================
document.addEventListener('DOMContentLoaded', function () {
  var currentPage = window.location.href;

  var homeLink = document.getElementById('homeLink');
  var favoritesLink = document.getElementById('favoritesLink');

  if (currentPage.includes('index.html')) {
    homeLink.classList.add('active');
    favoritesLink.classList.remove('active');
  } else if (currentPage.includes('favourite.html')) {
    favoritesLink.classList.add('active');
    homeLink.classList.remove('active');
  }
});
//============================ /MAIN-MENU-WORK =============================

//============================ BURGER-MENU-WORK ============================

const openMenuButton = document.querySelector('.open-mobile-menu-btn');
const closeMenuButton = document.querySelector('.close-mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');

openMenuButton.addEventListener('click', function () {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('not-scrollable');

  setTimeout(() => {
    mobileMenu.classList.add('mobile-menu-wrapper-anim');
  }, 2500);
});

closeMenuButton.addEventListener('click', function () {
  document.body.classList.remove('not-scrollable');
  mobileMenu.classList.add('mobile-menu-wrapper-anim-hide');

  setTimeout(function () {
    mobileMenu.classList.remove('is-open');
    mobileMenu.classList.remove('mobile-menu-wrapper-anim');
  }, 1400);
});

mobileMenu.addEventListener('animationend', event => {
  if (event.animationName === 'mobile-menu-wrapper-hide-animation') {
    mobileMenu.classList.remove('mobile-menu-wrapper-anim-hide');
  }
});
//=========================== /BURGER-MENU-WORK ============================
