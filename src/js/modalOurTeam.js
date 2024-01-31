const modalFirst = document.querySelector("#wellcom-modal")

console.log(modalFirst);


const modalToShow = () => {
    setTimeout(() => {
        modalFirst.style.display = 'block';
    }, 2000);
}

const modalToHide = () => {
    setTimeout(() => {
        modalFirst.style.display = 'none';
    }, 7000);
}

const start = () => {
    setInterval(() => {
        modalToShow();
        modalToHide();
}, 90000);
}

start();