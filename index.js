import { Methods  } from "./modules/functions.js";
import {listActive,contactActive,formActive} from './modules/navigation.js'

const methods = new Methods();
methods.books = [];

const saveData = () => {
  localStorage.setItem('myBooks', JSON.stringify(methods.books));
};

const displayBooks = () => {
  const booksList = document.querySelector('.books');
  booksList.innerHTML = '';
  for (let i = 0; i < methods.books.length; i += 1) {
    const book = methods.books[i];
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    if ((i + 1) % 2 !== 0) {
      bookElement.classList.add('odd');
    }

    const h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.textContent = `"${book.title}"  by ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add(`remove-${book.id}`);
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      methods.removeBook(book.id);
      displayBooks();
    });

    bookElement.appendChild(h2);
    bookElement.appendChild(removeBtn);

    booksList.appendChild(bookElement);
  }
  saveData();
};

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
  displayBooks();
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
    displayBooks();
    saveData();
    alert(`${title.value} and ${author.value} have been added to the list!!!`);
    title.value = null;
    author.value = null;
  } else {
    e.preventDefault();
  }
});

getData();
displayBooks();

// Referrence to navbar
const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');
const wholeForm = document.querySelector('#form-container');
const books = document.querySelector('#books-container');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const contactContainer = document.querySelector('.contact-section');


list.addEventListener('click', listActive);
add.addEventListener('click', formActive);
contact.addEventListener('click', contactActive);
window.onload = listActive;
