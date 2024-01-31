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
});

closeMenuButton.addEventListener('click', function () {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('not-scrollable');
});
//=========================== /BURGER-MENU-WORK ============================