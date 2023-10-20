// modules.js
import { libroFuncional } from './assets/modules';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// script.js
const btnSend = document.getElementById('sendBook');

const textarea = document.getElementById('textarea');
const btnReload = document.getElementById("reloadBooks");

const btnTotalPrice = document.getElementById("totalPrice");
const showTotalPrice = document.getElementById("showTotalPrice");

const btnDelBook = document.getElementById("delBook");
const titleDel = document.getElementById("titleDel");

const messageError = document.getElementById('messageError');
const messageSuccess = document.getElementById('messageSuccess');
const messageErrorPrice = document.getElementById('messageErrorPrice');
const messageErrorEmpty = document.getElementById('messageErrorEmpty');
const messageErrorDel = document.getElementById('messageErrorDel');
const messageSuccessDel = document.getElementById('messageSuccessDel');
const messageErrorNoBooks = document.getElementById('messageErrorNoBooks');

let getBooks = [];

// ...


function messageTimeOut(messageType, time) {
  messageType.style.display = "block";

  setTimeout(() => {
    messageType.style.display = "none";
  }, time);
}

function handlerInsertBook(e) {
  e.preventDefault();

  if (title.value === "" || author.value === "" || price.value === "") {
    messageTimeOut(messageErrorEmpty, 5000);
    return;
  }

  const newBook = new libroFuncional(title.value, author.value, parseFloat(price.value));

  if (isNaN(newBook.price) || newBook.price <= 0) {
    messageTimeOut(messageErrorPrice, 5000);
    price.value = "";
    return;
  }

  if (localStorage.getItem("books")) {
    getBooks = JSON.parse(localStorage.getItem("books"));
  }

  const existingBook = getBooks.find(book => book._title === newBook._title);

  if (existingBook) {
    messageTimeOut(messageError, 5000);
  } else {

    getBooks.push(newBook);
    localStorage.setItem("books", JSON.stringify(getBooks));

    messageTimeOut(messageSuccess, 5000);
  }
  title.value = "";
  author.value = "";
  price.value = "";

}

function displayBookList() {

  const books = JSON.parse(localStorage.getItem("books"));
  if (books === null) {
    textarea.value = "No hay libros que mostrar";
    return;
  }

  const bookList = books.map(book => `*** Titulo: ${book._title}, Autor: ${book._author} , Precio: ${book._price}€ ***`).join("\n")

  textarea.value = bookList;

}

displayBookList();

function handlerTotalPrice() {
  const books = JSON.parse(localStorage.getItem("books"));
  if (books === null) {
    messageTimeOut(messageErrorNoBooks, 5000);
    return;
  }

  const totalPrice = books.reduce((acc, book) => acc + parseFloat(book._price), 0)
  displayBookList();
  // console.log(totalPrice);

  showTotalPrice.value = `${totalPrice} €`;
  setTimeout(() => {
    showTotalPrice.value = ""
  }, 5000);q

}

function handlerDeleteBook(e) {
  e.preventDefault();
  const books = JSON.parse(localStorage.getItem("books"));
  const index = books.findIndex(book => book._title.toLowerCase() === titleDel.value.trim().toLowerCase());
  console.log(index)
  if (index === -1) {
    messageTimeOut(messageErrorDel, 5000)
    titleDel.value = ""
    return;
  }
  books.splice(index, 1);
  messageTimeOut(messageSuccessDel, 5000)
  localStorage.setItem("books", JSON.stringify(books));
  displayBookList();
  titleDel.value = ""

}

function init() {
  btnSend.addEventListener("click", handlerInsertBook);
  btnReload.addEventListener("click", displayBookList);
  btnTotalPrice.addEventListener("click", handlerTotalPrice);
  btnDelBook.addEventListener("click", handlerDeleteBook);

}
// -------- Inicio de la aplicación ---------------

document.addEventListener("DOMContentLoaded", init);