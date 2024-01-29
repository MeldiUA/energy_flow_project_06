import * as api from './api.js';
import axios from 'axios';
// import handlerStartBtn from './exercises_card.js';

const refs = {
  filters: document.querySelector('.filters'),
  exercises: document.querySelector('.exercises'),
  navButtons: document.querySelector('.nav-buttons'),
  musclesBtn: document.querySelector('.muscles-btn'),
  exercisesTitle: document.querySelector('.exercises-title'),
  searchForm: document.querySelector('.search-form'),
  navForm: document.querySelector('.nav-form'),
  navSum: document.querySelector('.nav-sum'),
};

let page = 1;
let limit = 0;
let searchQuery = 'Muscles';
let keyWord = '';
let filter = '';
let name = '';
let localResponse = null;
let activeIndex = 1;

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
  filter = '';
  name = '';
  refs.exercises.addEventListener('click', loadExercises);
  refs.exercisesTitle.innerHTML = `Exercises`;
  refs.searchForm.style.display = 'none';
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  page = 1;
  refs.exercises.innerHTML = '';
  refs.navForm.innerHTML = '';
  updateList();

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
    .sort((a, b) => a.name > b.name)
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
  refs.navButtons.innerHTML = '';
  if (totalPages === 1 || !totalPages) {
    return;
  }
  let markup =
    '<li><button class="nav-button active-nav-button" type="button">1</button></li>';
  for (let i = 2; i <= totalPages; i += 1) {
    markup += `<li><button class="nav-button" type="button">${i}</button></li>`;
  }
  refs.navButtons.insertAdjacentHTML('beforeend', markup);

  const listItems = document.getElementById('list').getElementsByTagName('li');
  const listItemslength = listItems.length;

  // if (listItemslength > 5) {
  //   const navInput = `<p>...${listItemslength}</p>`;
  //   refs.navSum.insertAdjacentHTML('beforeend', navInput);
  // } 

  if (listItemslength >= 10) {
    const navInput = `<input type="number" name="searchIndex"><button id="nav-form-button" type="submit">press</button>`;
    refs.navForm.insertAdjacentHTML('beforeend', navInput);
  } 

  updateList();
}



function updateList() {
  var listItems = document.querySelectorAll('#list li');
  for (var i = 0; i < listItems.length; i++) {
    var paragraph = listItems[i].querySelector('p');
    if (listItems[i] && paragraph) {
      listItems[i].removeChild(paragraph);
    }
  }

  for (var i = 0; i < listItems.length; i++) {
    var isInRange = i >= activeIndex - 3 && i <= activeIndex + 1;
    var isFirstOrLast = i === 0 || i === listItems.length - 1;

    if (isFirstOrLast && !isInRange) {
      listItems[i].classList.remove('visually-hidden');
      listItems[i].insertAdjacentHTML('afterbegin', '<p>...</p>');
    } else if (!isInRange) {
      listItems[i].classList.add('visually-hidden');
      var paragraph = listItems[i].querySelector('p');
      if (paragraph) {
        listItems[i].removeChild(paragraph);
      }
    } else {
      listItems[i].classList.remove('visually-hidden');
      var paragraph = listItems[i].querySelector('p');
      if (paragraph) {
        listItems[i].removeChild(paragraph);
      }
    }
  }
}
async function buttonClickFunction() {
  updateList();
  if (keyWord !== '') {
    const response = await loadNextPageByKeyWord();
    makeExercisesCards(response.results);
    return;
  }
  if (filter !== '' && name !== '') {
    const response = await defineAndLoadSearchType(filter, name);
    makeExercisesCards(response.results);
    return;
  }
  const response = await api.getFilter(searchQuery, page, limit);
  makeCards(response.results);
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
  activeIndex = page;
  buttonClickFunction();
});



refs.navForm.addEventListener('submit', async event => {
  event.preventDefault();
  const listItems = document.getElementById('list').getElementsByTagName('li');
  const navIndex = event.target.searchIndex.value.trim();
  event.target.reset();
  const activeBtn = document.querySelector('.active-nav-button');
  if (activeBtn) {
    activeBtn.classList.remove('active-nav-button');
  }

  const liButtonNavIndex = listItems[navIndex - 1].getElementsByTagName('button');
  liButtonNavIndex[0].classList.add('active-nav-button');
  page = navIndex;
  activeIndex = Number(page);
  buttonClickFunction();
});



async function loadExercises(event) {
  refs.searchForm.style.display = 'block';

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
  refs.exercisesTitle.innerHTML = `Exercises / <span class="exercises-subtitle">${
    name[0].toUpperCase() + name.slice(1)
  }</span>`;

  let resp = await defineAndLoadSearchType(filter, name);

  if (resp.results === undefined || resp.results.length === 0) {
    refs.exercises.innerHTML = `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`;
    return;
  }
  refs.exercises.removeEventListener('click', loadExercises);

  makeExercisesCards(resp.results);
  //  refs.navButtons.innerHTML = '';
  makeNavs(resp.totalPages);
}

async function defineAndLoadSearchType(filter, name) {
  switch (filter) {
    case 'Muscles':
      return await api.getExercisesByMuscles(name, page, limit);
    case 'Body parts':
      return await api.getExercisesByBodyPart(name, page, limit);
    case 'Equipment':
      return await api.getExercisesByEquipment(name, page, limit);
    default:
      refs.exercises.insertAdjacentHTML(
        'beforeend',
        `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`
      );
  }
}

async function makeExercisesCards(response) {
  refs.exercises.innerHTML = '';
  localResponse = response;
  const markup = response
    .sort((a, b) => a.name > b.name)
    .map(({ name, _id, rating, burnedCalories, bodyPart, target }) => {
      if (rating % 1 === 0) {
        rating = rating + '.0';
      }
      return `<li data-id-card="${_id}" data-component="fav_card" class="list_item">
            <div class="fav_card">
              <div class="actions_wrapper">
                <div class="workout_wrapper">
                  <span class="workout">workout</span>
                    <span>${rating}
                      <svg fill="#EEA10C" width="18" height="18" aria-label="star icon">
                        <use href="../images/icon.svg#icon-star"></use>
                      </svg>
                    </span>
                </div>
                <button data-action="start_exercise_btn" data-id-start-btn="${_id}" class="btn">
                  <span class="start">Start</span>
                  <svg stroke="#1B1B1B" width="16" height="16" aria-label="arrow icon">
                    <use href="../images/icon.svg#icon-arrow"></use>
                  </svg>
                </button>
              </div>
  
              <div class="inner_wrapper">
                <div class="icon_man">
                  <svg width="16" height="16">
                    <use href="../images/icon.svg#icon-man"></use>
                  </svg>
                </div>
                <p class="exercise_name">${name}</p>
              </div>
  
              <div class="details_wrapper">
                <ul class="details_list">
                  <li>
                    <div class="detail_wrapper">
                      <p class="detail_item">
                        Burned calories:
                        <span class="detail_value">${burnedCalories} / 3 min</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="detail_wrapper">
                      <p class="detail_item">
                        Body part: <span class="detail_value">${bodyPart}</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="detail_wrapper">
                      <p class="detail_item">
                        Target: <span class="detail_value">${target}</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>`;
    })
    .join('');

  refs.exercises.insertAdjacentHTML('beforeend', markup);
}

// refs.exercises.addEventListener('click', event => {
//   const startBtn = event.target.closest('[data-action="start_exercise_btn"]');
//   const cardComponent = event.target.closest('[data-component="fav_card"]');

//   if (!event.target.tagName === 'BUTTON' || (!startBtn)) {
//     return;
//   }
//   if (startBtn) {
//     const startId = startBtn.dataset.idStartBtn;
//     const outputObj = localResponse.find(obj => obj._id === startId);

//     handlerStartBtn(outputObj);
//   }
// });

refs.searchForm.addEventListener('submit', async event => {
  refs.navForm.innerHTML = '';
  activeIndex = 1;
  updateList();
  event.preventDefault();
  keyWord = event.target.searchQuery.value.trim();
  event.target.reset();
  page = 1;
  let response = await loadNextPageByKeyWord();

  if (response.results.length === 0) {
    refs.exercises.innerHTML = `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`;
    refs.navButtons.innerHTML = '';
    return;
  }
  makeExercisesCards(response.results);
  makeNavs(response.totalPages);
});

async function loadNextPageByKeyWord() {
  switch (filter) {
    case 'Muscles':
      return await api.getExercises(
        undefined,
        name,
        undefined,
        keyWord,
        page,
        limit
      );
    case 'Body parts':
      return await api.getExercises(
        name,
        undefined,
        undefined,
        keyWord,
        page,
        limit
      );
    case 'Equipment':
      return await api.getExercises(
        undefined,
        undefined,
        name,
        keyWord,
        page,
        limit
      );
    default:
      refs.exercises.innerHTML = `<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`;
  }
}

// ------------------------------------------------

// const list = document.getElementById('list');
// const items = Array.from(list.getElementsByTagName('li'));
// const itemsPerPage = 5; // Кількість елементів на одній сторінці

// function displayList(items, startIndex, endIndex) {
//   list.innerHTML = '';
//   for (let i = startIndex; i < endIndex && i < items.length; i++) {
//     list.appendChild(items[i]);
//   }
// }

// function setupPagination(items) {
//   const pageCount = Math.ceil(items.length / itemsPerPage);
//   const pagination = document.getElementById('pagination');
//   pagination.innerHTML = '';

//   for (let i = 1; i <= pageCount; i++) {
//     const li = document.createElement('li');
//     li.innerText = i;

//     navButtons.addEventListener('click', function () {
//       const currentPage = parseInt(this.innerText);
//       const startIndex = (currentPage - 1) * itemsPerPage;
//       const endIndex = startIndex + itemsPerPage;
//       displayList(items, startIndex, endIndex);

//       const paginationItems = pagination.getElementsByTagName('li');
//       for (let j = 0; j < paginationItems.length; j++) {
//         paginationItems[j].classList.remove('active');
//       }
//       this.classList.add('active');
//     });

//     pagination.appendChild(li);
//   }
// }

// // Початкове відображення списку і пагінації
// displayList(items, 0, itemsPerPage);
// setupPagination(items);