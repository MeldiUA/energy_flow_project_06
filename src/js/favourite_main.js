import * as api from './api.js';

const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const localStorageQuoteKey = 'quote-info';
const getDataFromLS = JSON.parse(localStorage.getItem(localStorageQuoteKey));
const quoteInfo = {
  quote: '',
  author: '',
  date: 0,
};

if (getDataFromLS && getDataFromLS.date != new Date().getDate()) {
  quoteText.textContent = getDataFromLS.quote;
  quoteAuthor.textContent = getDataFromLS.author;
  fetchQuote();
} else {
  if (getDataFromLS) {
    quoteText.textContent = getDataFromLS.quote;
    quoteAuthor.textContent = getDataFromLS.author;
  }
  fetchQuote();
}

function fetchQuote() {
  api.getQuote()
    .then(newQuote => saveQuote(newQuote))
    .catch(error => console.log(error));
}

function saveQuote(newQuote) {
  quoteInfo.quote = newQuote.quote;
  quoteInfo.author = newQuote.author;
  quoteInfo.date = new Date().getDate();
  localStorage.setItem(localStorageQuoteKey, JSON.stringify(quoteInfo));
}
