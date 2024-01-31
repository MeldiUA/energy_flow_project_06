const modalFirst = document.querySelector('#wellcom-modal');

const modalToShow = () => {
  setTimeout(() => {
      modalFirst.classList.add('active');
  }, 0);
};

const modalToHide = () => {
  setTimeout(() => {
      modalFirst.classList.remove('active');
  }, 10000);
};

const start = () => {
  setInterval(() => {
    modalToShow();
    modalToHide();
  }, 35000);
};

start();
