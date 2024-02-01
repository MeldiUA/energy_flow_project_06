import throttle from 'lodash.throttle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { postSubscriptions } from './api';

// const form = document.querySelector('form');
const email = document.querySelector('input[name=email]');
const submitBtnFooter = document.querySelector('.footer-send-button');
const expressionKey = 'feedback-form-state';



// $('form input').on('keypress', function(e) {
//   return e.which !== 13;
// });

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
    if(isValidEmail(email.value)){
      submitBtnFooter.disabled = false;
    }
  }
}

refillDataFromLocalStorage();

email.addEventListener('input', throttle(saveDataToLocalStorage, 500));
email.addEventListener('change', (event) => {
  if(isValidEmail(event.currentTarget.value)){
      submitBtnFooter.disabled = false;
  }
  else{
    iziToast.info({
      message: 'Please enter a valid email address',
    });
  }
})

submitBtnFooter.addEventListener('click', async event=> {
  event.preventDefault();
try {
  await postSubscriptions(email.value);
  iziToast.success({
          title: 'Success',
          message: 'Welcome to energy.flow world!',
        })
        email.value = '';
} catch (error) {
  if (error.response.status === 409) {
    iziToast.warning({
      message:
      'Email already exists'
    });
  }
  else{
    iziToast.error({
      title: 'Error',
      message:
      'Something went wrong! Please try again later'
    });
    }
  }
});

function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   if (!isValidEmail(email.value)) {
//     iziToast.info({
//       message: 'Please enter a valid email address',
//     });
//     return;
//   }

//   // const formData = {
//   //   email: email.value,
//   // };

//   // fetch('https://energyflow.b.goit.study/api/subscription', {
//   //   method: 'POST',
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //   },
//   //   body: JSON.stringify(formData),
//   // })
//   postSubscriptions(email.value)
//   .then(data => {
//     console.log('Success:', data);
//     iziToast.success({
//       title: 'Success',
//       message: 'Welcome to energy.flow world!',
//     })
//     .catch(error => {
//       if (error.status === 409) {
//         iziToast.error({
//           title: 'Error',
//           message:
//           'Email already exists'
//         });
//       }
//       else{
//         iziToast.error({
//           title: 'Error',
//           message:
//           'Something went wrong! Please try again later'
//         });
//       }
//     })
    

    //   localStorage.removeItem(expressionKey);
    //   email.value = '';
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   if (error.message !== 'Email already exists') {
    //     iziToast.error({
    //       title: 'Error',
    //       message: 'Something went wrong! Please try again later',
    //     });
      // }
    // });
// }


