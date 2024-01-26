const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');

themeToggle.addEventListener('click', () => {
  if (themeStyle.getAttribute('href') === 'index.css') {
    themeStyle.href = 'dark-theme.css';
  } else {
    themeStyle.href = 'index.css';
  }
});
