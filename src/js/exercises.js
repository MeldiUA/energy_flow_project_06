import * as api from './api.js';

const refs = {
  filters: document.querySelector('.filters'),
  exercises: document.querySelector('.exercises'),
  navButtons: document.querySelector('.nav-buttons'),
};

let page = 1;
let limit = 0;
let searchQuery = null;

refs.filters.addEventListener('click', pressBtn);

async function pressBtn(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  page = 1;
  const activeBtn = document.querySelector('.active-btn');
  if (activeBtn) {
    activeBtn.classList.remove('active-btn');
  }
  event.target.classList.add('active-btn');

  window.innerWidth < 768 ? (limit = 8) : (limit = 12);

  searchQuery = event.target.innerHTML;
  const response = await api.getFilter(searchQuery, page, limit);

  makeCards(response.results);
  makeNavs(response.totalPages);
}

async function makeCards(response) {
  refs.exercises.innerHTML = '';
  let markup = response
    .map(({ name, filter, imgUrl }) => {
      return `<li class="exercise">
        <img src="${imgUrl}" alt="${name}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${
              name[0].toUpperCase() + name.slice(1)
            }</h1>
            <p class="exercise-filter">${filter}</p>
        </div>
        </li>`;
    })
    .join('');

  refs.exercises.insertAdjacentHTML('beforeend', markup);
}

async function makeNavs(totalPages) {
  let markup =
    '<li><button class="nav-button active-nav-button" type="button">1</button></li>';
  refs.navButtons.innerHTML = '';
  for (let i = 2; i <= totalPages; i += 1) {
    markup += `<li><button class="nav-button" type="button">${i}</button></li>`;
  }
  refs.navButtons.insertAdjacentHTML('beforeend', markup);
}

refs.navButtons.addEventListener('click', async event => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  const activeBtn = document.querySelector('.active-nav-button');
  if (activeBtn) {
    activeBtn.classList.remove('active-nav-button');
  }
  event.target.classList.add('active-nav-button');
  page = Number(event.target.innerHTML);
  const response = await api.getFilter(searchQuery, page, limit);

  makeCards(response.results);
});
