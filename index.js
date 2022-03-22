import { Methods  } from "./modules/functions.js";
import {listActive,contactActive,formActive} from './modules/navigation.js'
import {displayBooks,addBook,getData} from './modules/books.js'
import  {luxon} from "./modules/luxon.js";

const methods = new Methods();
methods.books = [];

window.onbeforeunload = () => {
  getData(methods);
  displayBooks(methods);
};
window.onload = listActive;

// Date
const setTime =()=>{
  const dateContainer = document.getElementById("date")
  dateContainer.innerText = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_FULL)
}
setInterval(setTime, 1000);

/* form functions */

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e)=>{ e.preventDefault();addBook(methods)});

getData(methods);
displayBooks(methods);

// Referrence to navbar
const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');

list.addEventListener('click', listActive);
add.addEventListener('click', formActive);
contact.addEventListener('click', contactActive);

