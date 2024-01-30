// import handlerStartBtn from './exercises_card.js';
import axios from 'axios';
import * as api from './api.js';
import {
  getFav,
  setFav,
  removeFromFav,
  LS_FAV,
} from './localalStorageLogical.js';

const refs = {
  cardSet: document.querySelector('.fav_card_list'),
  noCards: document.querySelector('.no_cards_wrapper'),
};

if (refs.noCards.classList.contains('visually-hidden')) {
  refs.noCards.classList.remove('visually-hidden');
}

// emulation

// const fav = [
//   '64f389465ae26083f39b18a1',
//   '64f389465ae26083f39b17a2',
//   '64f389465ae26083f39b17a5',
// ];

// setFav(fav);

//fetch and render logic

const uniqueIdFilter = arr => {
  const uniqueIds = new Set();
  const newArray = arr.filter(obj => {
    if (!uniqueIds.has(obj._id)) {
      uniqueIds.add(obj._id);
      return true;
    }
    return false;
  });
  return newArray;
};

const renderCards = arr => {
  const uniqueIdOnlyArray = uniqueIdFilter(arr);

  const markup = uniqueIdOnlyArray.map(
    ({ name, _id, burnedCalories, bodyPart, target }) => {
      return `<li data-id-card="${_id}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button data-id-del-btn="${_id}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="../images/icon.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button data-id-start-btn="${_id}" data-action="start_exercise_btn" class="btn">
                <span class="start">start</span>
                <svg width="16" height="16" aria-label="arrow icon">
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
    }
  );

  refs.cardSet.innerHTML = markup.join('');
};

const fetchAndRenderFav = async (idsArr, toRender = true) => {
  try {
    const favsArr = await Promise.all(
      idsArr.map(async id => {
        const response = await api.getExerciseById(id);
        return response;
      })
    );
    if (toRender === true) {
      renderCards(favsArr);
    } else {
      return favsArr;
    }
  } catch (err) {
    console.error(err.message);
    // add a notification here in future instead of log
  }
};

// delete and start card logic

const onClick = async e => {
  const startBtn = e.target.closest('[data-action="start_exercise_btn"]');
  const deleteBtn = e.target.closest('[data-action="delete_fav_card"]');
  const cardComponent = e.target.closest('[data-component="fav_card"]');

  if (!e.target.tagName === 'BUTTON' || (!deleteBtn && !startBtn)) {
    return;
  }

  if (deleteBtn) {
    const deleteId = deleteBtn.dataset.idDelBtn;

    if (deleteId === cardComponent.dataset.idCard) {
      const idToRemove = deleteBtn.dataset.idDelBtn;
      removeFromFav(idToRemove);
      checkStorage();
    } else return;
  } else if (startBtn) {
    const startId = startBtn.dataset.idStartBtn;

    if (startId === cardComponent.dataset.idCard) {
      const arrOfObjects = await fetchAndRenderFav(getFav(LS_FAV), false);
      const toModalOutput = arrOfObjects.find(obj => obj._id === startId);
      console.log(toModalOutput, true);
      // add a handlerStartBtn function here instead of log
    }
  }
};

// check storage logic

const checkStorage = () => {
  const isFavsExist = getFav(LS_FAV) !== null;

  if (getFav(LS_FAV) && getFav(LS_FAV).some(key => key === null)) {
    const arr = getFav(LS_FAV).filter(key => key !== null);
    setFav(arr);
  }
  if (
    localStorage.length === 0 ||
    !isFavsExist ||
    getFav(LS_FAV).length === 0
  ) {
    // console.log('No Favs');
    refs.noCards.classList.remove('visually-hidden');
    refs.cardSet.classList.add('visually-hidden');
    refs.cardSet.removeEventListener('click', onClick);
  } else {
    // console.log('Favs there');
    refs.noCards.classList.add('visually-hidden');
    refs.cardSet.classList.remove('visually-hidden');
    fetchAndRenderFav(getFav(LS_FAV));
    refs.cardSet.addEventListener('click', onClick);
  }
};

checkStorage();
