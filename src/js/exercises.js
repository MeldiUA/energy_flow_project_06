import * as api from './api.js';

const refs = {
  filters: document.querySelector('.filters'),
  exercises: document.querySelector('.exercises'),
  navButtons: document.querySelector('.nav-buttons'),
  musclesBtn: document.querySelector('.muscles-btn'),
  execisesTitle: document.querySelector('.exercises-title')
};

let page = 1;
let limit = 0;
let searchQuery = 'Muscles';

fetchFilter();
refs.musclesBtn.classList.add('active-btn');

refs.filters.addEventListener('click', pressBtn);
refs.exercises.addEventListener('click', loadExercises);

async function fetchFilter() {
  window.innerWidth < 768 ? (limit = 8) : (limit = 12);
  const response = await api.getFilter(searchQuery, page, limit);

  if (response.results.length === 0) {
    refs.exercises.insertAdjacentHTML(
      'beforeend',
      `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`
    );
    return;
  }
  makeCards(response.results);
  makeNavs(response.totalPages);
}

async function pressBtn(event) {
refs.exercises.addEventListener('click', loadExercises);
refs.execisesTitle.innerHTML = `Exercises`;
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  page = 1;
  refs.exercises.innerHTML = '';

  const activeBtn = document.querySelector('.active-btn');
  if (activeBtn) {
    activeBtn.classList.remove('active-btn');
  }
  event.target.classList.add('active-btn');

  searchQuery = event.target.innerHTML;
  fetchFilter();
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


async function loadExercises(event) {
  let filter = '';
  let name = '';
  let tag = event.target;
  page = 1;

  if (tag.tagName === 'IMG') {
    tag = tag.nextElementSibling;
  } 
  if (tag.tagName === 'LI' || tag.tagName === 'P' || tag.tagName === 'H1') {
    tag = tag.offsetParent;
  } 

  filter = tag.lastElementChild.innerHTML;
  name = tag.firstElementChild.innerHTML.toLowerCase();
  refs.execisesTitle.innerHTML = `Exercises / <span class="exercises-subtitle">${name[0].toUpperCase() + name.slice(1)}</span>`
  let resp = '';
  switch (filter) {
    case 'Muscles':
      resp = await api.getExercisesByMuscles(name, page, limit);
      break;
    case 'Body parts':
      resp = await api.getExercisesByBodyPart(name, page, limit);
      break;
    case 'Equipment':
      resp = await api.getExercisesByEquipment(name, page, limit);
      break;
    default:
      refs.exercises.insertAdjacentHTML(
        'beforeend',
        `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`
      );

    }
        if (resp.results === undefined || resp.results.length === 0) {
      console.log(resp)
      refs.exercises.innerHTML = 
        `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`;
      return;
    }
    refs.exercises.removeEventListener('click', loadExercises);

  makeExercisesCards(resp.results);
 refs.navButtons.innerHTML = '';
} 

async function makeExercisesCards(response) {
  refs.exercises.innerHTML = '';
  const markup = response
    .map(({ bodyPart, burnedCalories, name, rating, target, time }) => {
      if (rating % 1 === 0) {
        rating = rating + '.0';
      }
      return `<li class="exercise-information">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${rating}
              <svg fill="#EEA10C" width="18" height="18">
                  <use href="../images/icon.svg#icon-star"></use>
              </svg>
          </span>
          <a href="" target="_blank" rel="noopener noreferrer" class="details-link">
              Start
              <svg  width="14" height="14">
                  <use href="../images/icon.svg#icon-arrow"></use>
              </svg>
          </a>
      </div>
      <div>
        <div class="icon-man-wrap">
          <svg class="icon-man" fill="white" width="15" height="15">
          <use href="../images/icon.svg#icon-man"></use>
          </svg>
        </div>
        <h2 class="exercise-name">${name[0].toUpperCase() + name.slice(1)}</h2>
      </div>
      <ul class="exercise-details">
          <li class="exercise-detail">
              <h3 class="detail-title">Burned calories: </h3>
              <p class="detail-value">${burnedCalories} / ${time} min</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Body part: </h3>
              <p class="detail-value">${
                bodyPart[0].toUpperCase() + bodyPart.slice(1)
              }</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Target: </h3>
              <p class="detail-value">${
                target[0].toUpperCase() + target.slice(1)
              }</p>
          </li>
      </ul>
  </li>`;
    })
    .join('');

  refs.exercises.insertAdjacentHTML('beforeend', markup);
}