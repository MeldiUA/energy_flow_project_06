import throttle from 'lodash.throttle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const email = document.querySelector('input');
const expressionKey = 'feedback-form-state';

function saveDataToLocalStorage() {
  const formData = {
    email: email.value,
  };
  localStorage.setItem(expressionKey, JSON.stringify(formData));
}

function refillDataFromLocalStorage() {
  const localData = localStorage.getItem(expressionKey);

  if (localData) {
    const formData = JSON.parse(localData);
    email.value = formData.email || '';
  }
}

refillDataFromLocalStorage();

email.addEventListener('input', throttle(saveDataToLocalStorage, 500));

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (!isValidEmail(email.value)) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid email address',
    });
    return;
  }

  const formData = {
    email: email.value,
  };

  fetch('https://energyflow.b.goit.study/api/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (response.status === 409) {
        iziToast.error({
          title: 'Error',
          message:
            'The email address already exists or there is a data conflict',
        });
        throw new Error('Email already exists');
      }
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      iziToast.success({
        title: 'Success',
        message: 'Welcome to energy.flow world!',
      });

      localStorage.removeItem(expressionKey);
      email.value = '';
    })
    .catch(error => {
      console.error('Error:', error);
      if (error.message !== 'Email already exists') {
        iziToast.error({
          title: 'Error',
          message: 'Something went wrong! Please try again later',
        });
      }
    });
}

function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}
