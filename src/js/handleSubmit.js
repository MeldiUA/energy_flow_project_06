import iziToast from 'izitoast';
import { isValidEmail, email, expressionKey } from './footer';

export function handleSubmit(event) {
  event.preventDefault();

  if (!isValidEmail(email.value)) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid email address',
      position: 'topRight',
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
      if (!response.ok) {
        iziToast.error({
          message:
            'The email address already exists or there is a data conflict',
          position: 'topRight',
        });
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      iziToast.success({
        message: 'Welcome to energy.flow world!',
        position: 'topRight',
      });

      localStorage.removeItem(expressionKey);
      email.value = '';
    })
    .catch(error => {
      console.error('Error:', error);
      if (error.response.status === 409) {
        iziToast.error({
          message: 'The email address already exists',
          position: 'topRight',
        });
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Something went wrong! Please try again later',
          position: 'topRight',
        });
      }
    });
}
