// document.getElementById('homeButton').classList.add('active'); // Default to 'Home' active
// const toggleContainer = document.querySelector('.toggle-container');

// toggleContainer.addEventListener('click', toggleButton);

// function toggleButton() {
//   let homeButton = document.getElementById('homeButton');
//   let favoritesButton = document.getElementById('favoritesButton');
//   let indicator = document.querySelector('.toggle-indicator');

//   if (homeButton.classList.contains('active')) {
//     homeButton.classList.remove('active');
//     favoritesButton.classList.add('active');
//     indicator.style.left = 'calc(50% - 5px)';
//   } else {
//     favoritesButton.classList.remove('active');
//     homeButton.classList.add('active');
//     indicator.style.left = '5px';
//   }
// }

// // The initial active button
// document.getElementById('homeButton').classList.add('active');
// const toggleNav = document.querySelector('.toggle-nav'); // Changed from toggle-container to toggle-nav

// toggleNav.addEventListener('click', toggleButton);

// function toggleButton() {
//   let homeButton = document.getElementById('homeButton');
//   let favoritesButton = document.getElementById('favoritesButton');
//   let indicator = document.querySelector('.toggle-indicator');

//   // Toggle the 'active' class
//   homeButton.classList.toggle('active');
//   favoritesButton.classList.toggle('active');

//   // Move the indicator based on which button is active
//   if (homeButton.classList.contains('active')) {
//     // Adjust the left property to match your specific design requirements
//     indicator.style.left = '5px'; // You might need to adjust this
//   } else {
//     // Adjust the left property to match your specific design requirements
//     indicator.style.left = 'calc(100% - 100px)'; // You might need to adjust this
//   }
// }

//============================ BURGER MENU WORK ============================

const openMenuButton = document.querySelector('.open-mobile-menu-btn');
const closeMenuButton = document.querySelector('.close-mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');

openMenuButton.addEventListener('click', function () {
  mobileMenu.classList.add('is-open');
});

closeMenuButton.addEventListener('click', function () {
  mobileMenu.classList.remove('is-open');
});
//=========================== /BURGER MENU WORK ============================


// document.getElementById('backToTop').addEventListener('click', function () {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });
