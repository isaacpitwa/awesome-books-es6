import { Methods  } from "./modules/functions.js";
import {listActive,contactActive,formActive} from './modules/navigation.js'
import {displayBooks,saveData,addBook} from './modules/books.js'

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

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e)=>{ e.preventDefault();addBook(methods)});

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
