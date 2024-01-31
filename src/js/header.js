//============================= MAIN-MENU-WORK =============================
document.addEventListener('DOMContentLoaded', function () {
  let currentPage = window.location.href;

  let homeLink = document.getElementById('homeLink');
  let favoritesLink = document.getElementById('favoritesLink');
  let mobHomeLink = document.getElementById('mobileHomeLink');
  let mobFavoritesLink = document.getElementById('mobileFavoritesLink');

  if (currentPage.includes('index.html')) {
    homeLink.classList.add('active');
    favoritesLink.classList.remove('active');
    mobHomeLink.classList.add('active');
    mobFavoritesLink.classList.remove('active');
  } else if (currentPage.includes('favourite.html')) {
    favoritesLink.classList.add('active');
    homeLink.classList.remove('active');
    mobFavoritesLink.classList.add('active');
    mobHomeLink.classList.remove('active');
  }
});
//============================ /MAIN-MENU-WORK =============================

//============================ BURGER-MENU-WORK ============================

const openMenuButton = document.querySelector('.open-mobile-menu-btn');
const closeMenuButton = document.querySelector('.close-mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');

openMenuButton.addEventListener('click', function () {
  mobileMenu.classList.add('is-open');
});

closeMenuButton.addEventListener('click', function () {
  mobileMenu.classList.remove('is-open');
});
//=========================== /BURGER-MENU-WORK ============================
