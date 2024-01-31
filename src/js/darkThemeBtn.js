const checkbox = document.getElementById('theme-checkbox');
const themeStylesheet = document.getElementById('theme-stylesheet');

document.addEventListener('DOMContentLoaded', function () {
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      setDarkTheme();
      localStorage.setItem('theme', 'dark');
    } else {
      setLightTheme();
      localStorage.setItem('theme', 'light');
    }
  });

  function setDarkTheme() {
    themeStylesheet.href = './css/dark-theme.css';
  }

  function setLightTheme() {
    themeStylesheet.href = './css/index.css'; 
  }
});
