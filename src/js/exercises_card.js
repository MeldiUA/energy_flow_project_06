import { handlerOpenRate } from './rate';
import * as localStorageLogic from './localalStorageLogical';

const cardBackdrop = document.querySelector('.exr-card-backdrop');
let isFavourite = false;
let savedExercises = [];
let tempArray = JSON.parse(localStorage.getItem('favourite'));
if (tempArray) {
  tempArray.forEach(element => {
    if (!savedExercises[0]) savedExercises[0] = element;
    savedExercises.push(element);
  });
}

function capitalizeFirstLetter(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export default function handlerStartBtn(exercise, isFav = false, isFavouritePage = false) {
  isFavourite = isFav;
  if (!isFavourite) {
    savedExercises.forEach(element => {
      if (element._id === exercise._id) isFavourite = true;
    });
  }

  renderModal(exercise, isFavouritePage);
  cardBackdrop.classList.add('card-is-open');
  document.body.classList.add('not-scrollable');

  if (isFavourite === true) {
    document.querySelector('.add-favourite-btn').innerHTML = `Remove from
          <svg class="heart-icon">
            <use href="../images/icon.svg#icon-heart"></use>
          </svg>`;
  }
}

function renderModal(data, isFavouritePage) {
  const markup = `
    <div class="exr-card-cont">
      <button id="close-card" type="button" class="close-card-button">
      <svg class="close-card-icon">
        <use href="../images/icon.svg#icon-x"></use>
      </svg>
    </button>
    <img src="${data.gifUrl}" alt="example-img" class="exr-image" />
    <div>
      <h3 class="exercise-name">${capitalizeFirstLetter(data.name)}</h3>
      <div class="rating-container">
        <ul class="star-rating-list">
          <li>
            <p class="rating-score">${data.rating}</p>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="../images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
        </ul>
      </div>
      <div class="exr-information-container">
        <div class="exr-info-block">
          <p class="info-label">Target</p>
          <p class="exr-info" id="exr-target">${capitalizeFirstLetter(
            data.target
          )}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Body Part</p>
          <p class="exr-info" id="body-part">${capitalizeFirstLetter(
            data.bodyPart
          )}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Equipment</p>
          <p class="exr-info" id="exr-equip">${capitalizeFirstLetter(
            data.equipment
          )}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Popular</p>
          <p class="exr-info" id="exr-popularity">${data.popularity}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Burned Calories</p>
          <p class="exr-info" id="burned-cal">${data.burnedCalories}/${
    data.time
  } min</p>
        </div>
      </div>
      <p class="exr-description">${data.description}</p>
      <div class="buttons-cont">
        <button class="add-favourite-btn">
          Add to favourites
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>
        </button>
        <button class="give-rating-btn">Give a rating</button>
      </div>
    </div>
    </div>`;
  cardBackdrop.innerHTML = markup;
  const arrStar = document.querySelectorAll(".star-rating-icon");
  for(let i = 0; i < Math.round(data.rating); ++i){
    arrStar[i].style.fill = "#eea10c";
  }
 
  const addFavBtn = document.querySelector('.add-favourite-btn');

  addFavBtn.addEventListener('click', function () {
    if (!isFavourite) {
      savedExercises.push(data);
      localStorageLogic.setFav(savedExercises);
      addFavBtn.innerHTML = `Remove from
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>`;
      isFavourite = true;
    } else {
      localStorageLogic.removeFromFav(data._id);
      addFavBtn.innerHTML = `Add to favourite
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>`;
      isFavourite = false;
    }
  });

  document.getElementById('close-card').addEventListener('click', () => {
    cardBackdrop.classList.remove('card-is-open');
    document.body.classList.remove('not-scrollable');
    if(isFavouritePage){
      window.open('./favourite.html')
    }
  });

  document.querySelector('.give-rating-btn').addEventListener('click', () => {
    cardBackdrop.classList.remove('card-is-open');
    document.body.classList.remove('not-scrollable');
     handlerOpenRate(data._id);
  });
}
