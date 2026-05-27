// =========================
// script.js
// =========================

// Theme Toggle

const themeBtn =
  document.getElementById('themeToggle');

const body =
  document.body;

// Load Theme

if (
  localStorage.getItem('theme')
  === 'dark'
) {

  body.classList.add('dark');

  themeBtn.innerHTML = '🌙';

}

// Toggle Theme

themeBtn.addEventListener('click', () => {

  body.classList.toggle('dark');

  if (
    body.classList.contains('dark')
  ) {

    localStorage.setItem(
      'theme',
      'dark'
    );

    themeBtn.innerHTML = '🌙';

  } else {

    localStorage.setItem(
      'theme',
      'light'
    );

    themeBtn.innerHTML = '☀️';

  }

});
