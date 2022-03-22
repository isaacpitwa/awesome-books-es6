const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');
const wholeForm = document.querySelector('#form-container');
const books = document.querySelector('#books-container');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const contactContainer = document.querySelector('.contact-section');

const listActive = () => {
    list.classList.add('active-page');
    add.classList.remove('active-page');
    contact.classList.remove('active-page');
    if (document.body.contains(wholeForm)) { body.removeChild(wholeForm); }
    if (document.body.contains(contactContainer)) { body.removeChild(contactContainer); }
    books.classList.remove('contact-section');
    contactContainer.classList.remove('contact-section-active');
};

const formActive = () => {
    list.classList.remove('active-page');
    add.classList.add('active-page');
    contact.classList.remove('active-page');
    if (document.body.contains(books)) { books.classList.add('contact-section'); }
    if (document.body.contains(contactContainer)) { body.removeChild(contactContainer); }
    body.insertBefore(wholeForm, footer);
    contactContainer.classList.remove('contact-section-active');
  };

const contactActive = () => {
    list.classList.remove('active-page');
    add.classList.remove('active-page');
    contact.classList.add('active-page');
    if (document.body.contains(books)) { books.classList.add('contact-section'); }
    if (document.body.contains(wholeForm)) { body.removeChild(wholeForm); }
    body.insertBefore(contactContainer, footer);
    contactContainer.classList.add('contact-section-active');
  };


export {listActive,contactActive,formActive}