import { Methods  } from "./modules/functions.js";
import {listActive,contactActive,formActive} from './modules/navigation.js'
import {displayBooks,saveData} from './modules/books.js'

const methods = new Methods();
methods.books = [];

const getData = () => {
  const formData = JSON.parse(localStorage.getItem('myBooks'));
  if (formData == null) {
    methods.books = [];
  } else {
    methods.books = formData;
  }
};

window.onbeforeunload = () => {
  getData();
  displayBooks(methods);
};

/* form functions */
const form = document.querySelector('form');
const author = form.querySelector('#author');
const title = form.querySelector('#title');

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e) => {
  if (author.value && title.value) {
    e.preventDefault();
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookId = Date.now();
    methods.addBook(bookTitle, bookAuthor, bookId);
    displayBooks(methods);
    saveData(methods);
    alert(`${title.value} and ${author.value} have been added to the list!!!`);
    title.value = null;
    author.value = null;
  } else {
    e.preventDefault();
  }
});

getData();
displayBooks(methods);

// Referrence to navbar
const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');

list.addEventListener('click', listActive);
add.addEventListener('click', formActive);
contact.addEventListener('click', contactActive);
window.onload = listActive;
