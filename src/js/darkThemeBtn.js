let checkbox = null;
const themeStylesheet = document.getElementById('theme-stylesheet');
debugger;
document.addEventListener('DOMContentLoaded', function () {
  checkbox =
    window.innerWidth > 1440
      ? document.getElementById('checkbox')
      : document.getElementById('theme-checkbox');

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
    checkbox.checked = true;
  }

  function setLightTheme() {
    themeStylesheet.href = './css/index.css';
  }
});
