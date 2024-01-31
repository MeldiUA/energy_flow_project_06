
import handlerStartBtn from './exercises_card.js';

const refs = {
  filters: document.querySelector('.filters'),
  exercises: document.querySelector('.exercises'),
  navButtons: document.querySelector('.nav-buttons'),
  musclesBtn: document.querySelector('.muscles-btn'),
  exercisesTitle: document.querySelector('.exercises-title'),
  searchForm: document.querySelector('.search-form'),
};

let limit = 0;
let searchQuery = 'Muscles';
let keyWord = '';
let filter = '';
let name = '';
let localResponse = null;

fetchFilter();
refs.musclesBtn.classList.add('active-btn');

refs.filters.addEventListener('click', pressFilterBtn);
refs.exercises.addEventListener('click', loadExercises);

async function fetchFilter() {
  window.innerWidth < 768 ? (limit = 8) : (limit = 12);

  $(async function () {
    $('#pagination-container').pagination({
      activeClassName: 'active-nav-button',
      ulClassName: 'nav-buttons',
      pageSize: limit,
      dataSource: function (done) {
        $.ajax({
          type: 'GET',
          url: `https://energyflow.b.goit.study/api/filters?filter=${searchQuery}&limit=${300}`,
          success: function (response) {
            refs.navButtons.innerHTML = '';
            done(response.results);
          },
          error: function () {
            console.log('Помилка запиту даних');
          },
        });
      },
      callback: function (data, pagination) {
        if (data.length === 0) {
          refs.exercises.insertAdjacentHTML(
            'beforeend',
            `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`
          );
          return;
        }
        makeCards(data);
      },
    });
  });
}

async function pressFilterBtn(event) {
  filter = '';
  name = '';
  refs.exercises.addEventListener('click', loadExercises);
  refs.exercisesTitle.innerHTML = `Exercises`;
  refs.searchForm.style.display = 'none';
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  refs.exercises.innerHTML = '';

  const activeBtn = document.querySelector('.active-btn');
  if (activeBtn) {
    activeBtn.classList.remove('active-btn');
    activeBtn.classList.add('not-active-btn');
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

async function loadExercises(event) {
  refs.searchForm.style.display = 'block';

  let tag = event.target;

  if (tag.tagName === 'IMG') {
    tag = tag.nextElementSibling;
  }
  if (tag.tagName === 'LI' || tag.tagName === 'P' || tag.tagName === 'H1') {
    tag = tag.offsetParent;
  }

  filter = tag.lastElementChild.innerHTML;
  name = tag.firstElementChild.innerHTML.toLowerCase();
  refs.exercisesTitle.innerHTML = `Exercises / <span class="exercises-subtitle">${
    name[0].toUpperCase() + name.slice(1)
  }</span>`;

  refs.exercises.removeEventListener('click', loadExercises);

  $(async function () {
    $('#pagination-container').pagination({
      activeClassName: 'active-nav-button',
      ulClassName: 'nav-buttons',
      pageSize: limit,
      dataSource: function (done) {
        $.ajax({
          type: 'GET',
          url: `https://energyflow.b.goit.study/api/exercises?${filter.toLowerCase()}=${name}&limit=${300}`,
          success: function (response) {
            refs.navButtons.innerHTML = '';
            done(response.results);
          },
          error: function () {
            console.log('Помилка запиту даних');
          },
        });
      },
      callback: function (data, pagination) {
        if (data.length === 0) {
          refs.exercises.insertAdjacentHTML(
            'beforeend',
            `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`
          );
          return;
        }
        makeExercisesCards(data);
      },
    });
  });
}

async function makeExercisesCards(response) {
  refs.exercises.innerHTML = '';
  localResponse = response;
  const markup = response
    .map(({ name, _id, rating, burnedCalories, bodyPart, target, time }) => {
      if (rating % 1 === 0) {
        rating = rating + '.0';
      }
      return `<li class="exercise-information" data-id-card="${_id}">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${rating}
              <svg fill="#EEA10C" width="18" height="18">
                  <use href="./images/icon.svg#icon-star"></use>
              </svg>
          </span>
          <button data-action="start_exercise_btn" data-id-start-btn="${_id}" class="details-link">
          Start
              <svg stroke="#1B1B1B"  width="14" height="14">
                  <use href="./images/icon.svg#icon-arrow"></use>
              </svg>
          </button>
      </div>
      <div>
        <div class="icon-man-wrap">
          <svg class="icon-man" fill="white" width="15" height="15">
          <use href="./images/icon.svg#icon-man"></use>
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

refs.exercises.addEventListener('click', event => {
  const startBtn = event.target.closest('[data-action="start_exercise_btn"]');

  if (!event.target.tagName === 'BUTTON' || (!startBtn)) {
    return;
  }
  if (startBtn) {
    const startId = startBtn.dataset.idStartBtn;
    const outputObj = localResponse.find(obj => obj._id === startId);

    handlerStartBtn(outputObj);
  }
});

refs.searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  keyWord = event.target.searchQuery.value.trim();
  event.target.reset();
  $(async function () {
    $('#pagination-container').pagination({
      activeClassName: 'active-nav-button',
      ulClassName: 'nav-buttons',
      pageSize: limit,
      dataSource: function (done) {
        $.ajax({
          type: 'GET',
          url: `https://energyflow.b.goit.study/api/exercises?${filter.toLowerCase()}=${name}&keyword=${keyWord}&limit=${300}`,
          success: function (response) {
            refs.navButtons.innerHTML = '';
            done(response.results);
          },
          error: function () {
            console.log('Помилка запиту даних');
          },
        });
      },
      callback: function (data, pagination) {
        // Обробка отриманих даних та оновлення DOM
        if (data.length === 0) {
          refs.exercises.insertAdjacentHTML(
            'beforeend',
            `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`
          );
          return;
        }
        makeExercisesCards(data);
      },
    });
  });
});

