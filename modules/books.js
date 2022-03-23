const saveData = (methods) => {
  localStorage.setItem('myBooks', JSON.stringify(methods.books));
};
const displayBooks = (methods) => {
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
      displayBooks(methods);
    });

    bookElement.appendChild(h2);
    bookElement.appendChild(removeBtn);

    booksList.appendChild(bookElement);
  }
  saveData(methods);
};

const getData = (methods) => {
  const formData = JSON.parse(localStorage.getItem('myBooks'));
  if (formData == null) {
    methods.books = [];
  } else {
    methods.books = formData;
  }
};

const addBook = (methods) => {
  const form = document.querySelector('form');
  const author = form.querySelector('#author');
  const title = form.querySelector('#title');
  if (author.value && title.value) {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookId = Date.now();
    methods.addBook(bookTitle, bookAuthor, bookId);
    displayBooks(methods);
    saveData(methods);
    alert(`${title.value} and ${author.value} have been added to the list!!!`);
    title.value = null;
    author.value = null;
  }
};

export {
  saveData, displayBooks, addBook, getData,
};