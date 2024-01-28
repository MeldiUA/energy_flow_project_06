const refs = {
  cardSet: document.querySelector('.fav_card_list'),
  noCards: document.querySelector('.no_cards_wrapper'),
};

// emulation

const demoObj1 = {
  name: 'Air bike',
  excDetails: {
    burnedCalories: 13,
    bodyPart: 'Waist',
    target: 'Biceps',
  },
  id: 1,
  favourite: true,
};

const demoObj2 = {
  name: 'Stationary bike walk',
  excDetails: {
    burnedCalories: 116,
    bodyPart: 'Cardio',
    target: 'Cardiovascular system',
  },
  id: 2,
  favourite: false,
};

const demoObj2_5 = {
  name: 'Stationary bike walk',
  excDetails: {
    burnedCalories: 116,
    bodyPart: 'Cardio',
    target: 'Cardiovascular system',
  },
  id: 2,
  favourite: false,
};

const demoObj3 = {
  name: 'mcChicken burger',
  excDetails: {
    burnedCalories: -150,
    bodyPart: 'Tummy',
    target: 'Hunger',
  },
  id: 3,
};

const fav = [demoObj1, demoObj2, demoObj3, demoObj2_5];

// ls functions

const LS_FAV = 'favourite';

const setFav = arr => {
  localStorage.setItem(LS_FAV, JSON.stringify(arr));
};

const getFav = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log(err.message);
    //   add notification here in future instead of log
  }
};

const removeFromFav = id => {
  const filteredArr = getFav(LS_FAV).filter(obj => obj.id !== id);
  localStorage.removeItem(LS_FAV);
  localStorage.setItem(LS_FAV, JSON.stringify(filteredArr));
};

setFav(fav);

// render logic

const uniqueIdFilter = arr => {
  const uniqueIds = new Set();
  const newArray = arr.filter(obj => {
    if (!uniqueIds.has(obj.id)) {
      uniqueIds.add(obj.id);
      return true;
    }
    return false;
  });
  return newArray;
};

const renderCards = arr => {
  const uniqueIdOnlyArray = uniqueIdFilter(arr);

  const markup = uniqueIdOnlyArray.map(
    ({ name, id, excDetails: { burnedCalories, bodyPart, target } }) => {
      return `<li data-id-card="${id}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button data-id-del-btn="${id}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="../images/icon.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button data-action="start_exercise_btn" class="btn">
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

// delete card logic

const onClick = e => {
  const startBtn = e.target.closest('[data-action="start_exercise_btn"]');
  const deleteBtn = e.target.closest('[data-action="delete_fav_card"]');
  const cardComponent = e.target.closest('[data-component="fav_card"]');

  if (!e.target.tagName === 'BUTTON' || (!deleteBtn && !startBtn)) {
    return;
  }

  if (deleteBtn) {
    if (deleteBtn.dataset.idDelBtn === cardComponent.dataset.idCard) {
      const idToRemove = Number(deleteBtn.dataset.idDelBtn);
      removeFromFav(idToRemove);
      checkStorage();
    } else return;
  } else if (startBtn) return console.log('Start logic here');
};

// check storage logic

const checkStorage = () => {
  const isFavsExist = getFav(LS_FAV) !== null;

  if (
    localStorage.length === 0 ||
    !isFavsExist ||
    getFav(LS_FAV).length === 0
  ) {
    refs.noCards.classList.remove('visually-hidden');
    refs.cardSet.classList.add('visually-hidden');
    console.log('No Favs');
  } else {
    console.log('Favs there');
    refs.noCards.classList.add('visually-hidden');
    refs.cardSet.classList.remove('visually-hidden');
    renderCards(getFav(LS_FAV));
    refs.cardSet.addEventListener('click', onClick);
  }
};

checkStorage();
