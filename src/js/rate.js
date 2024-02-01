import { addExerciseRatingById } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formCloseBtn = document.getElementById('form-close-btn');
const backdrop = document.querySelector('.backdrop');
const userEmail = document.querySelector('#user-email');
const userComment = document.getElementById('user-comment');
const formSendBtn = document.querySelector('.form-send-btn');
// formSendBtn.disabled = true;

formCloseBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-open');
});

backdrop.addEventListener('click', (event) => {
  if (event.target === backdrop)
  backdrop.classList.remove('is-open');
});

const ratingWrapper = document.querySelector('.rating-wrapper');
const ratingStarValue = document.querySelector('.rating-star-value');

const userFeedback = {
  rate: 0,
  email: '',
  comment: '',
};

ratingWrapper.addEventListener('click', event => {
  const ratingStarIcons = document.querySelectorAll('.rating-star-icons');
  userFeedback.rate = event.target.dataset.id;
  for (let index = 0; index < 5; index++) {
    if (index < userFeedback.rate) {
      ratingStarIcons[index].style.fill = '#EEA10C';
      ratingStarValue.textContent =
        userFeedback.rate === undefined ? `0.0` : `${userFeedback.rate}.0`;
    } else {
      ratingStarIcons[index].style.fill = 'rgba(27, 27, 27, 0.20)';
      ratingStarValue.textContent =
        userFeedback.rate === undefined ? `0.0` : `${userFeedback.rate}.0`;
    }
  }
});
let exerciseId = null;

const backdropForm = document.querySelector('.backdrop-form');

export function handlerOpenRate(id) {
  exerciseId = id;
  backdrop.classList.add('is-open');
}

backdropForm.addEventListener('submit', handlerAddRate);

async function handlerAddRate(event) {
  event.preventDefault();
  userFeedback.email = userEmail.value.trim();
  userFeedback.comment = userComment.value.trim();

  if (userFeedback.email !== '' && userFeedback.rate !== 0) {
    formSendBtn.disabled = false;
    try {
      const response = await addExerciseRatingById(exerciseId, userFeedback);
      iziToast.success({
        message: 'Your rating is accepted',
        position: 'topRight',
        color: 'green',
      });
      backdrop.classList.remove('is-open');
    } catch (error) {
      iziToast.error({
        message: `${error.message}`,
        position: 'topRight',
        color: 'red',
      });
      backdrop.classList.remove('is-open');
    }
  }
}
