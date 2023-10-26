/**
 * @author: Rogelio Sánchez
 * @description:  Crea una aplicación que modele una tienda de libros. Cada libro *debe tener un título, un autor y un precio. La tienda debe permitir agregar *libros, eliminar libros y calcular el precio total de todos los libros en el *inventario.
 */

// --------------------- IMPORTS ----------------------------------

import { libroFuncional } from './assets/modules';
// Importar Bootstrap. Previamente se instala con "npm i bootstrap@5.3.2"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// --------------------- VARIABLES GLOBALES ----------------------------------
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const price = document.getElementById('price');
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
//const messageErrorEmpty = document.getElementById('messageErrorEmpty');
const messageErrorDel = document.getElementById('messageErrorDel');
const messageSuccessDel = document.getElementById('messageSuccessDel');
const messageErrorNoBooks = document.getElementById('messageErrorNoBooks');

let getBooks = []

// --------------------- FUNCIONES ----------------------------------

/**
 * Muestra un mensaje de notificación durante un período de tiempo y luego lo oculta.
 *
 * @param {HTMLElement} messageType - El elemento HTML que representa el mensaje de notificación.
 * @param {number} time - El tiempo en milisegundos durante el cual se mostrará el mensaje.
 */
function messageTimeOut(messageType, time) {
  messageType.style.display = "block";

  setTimeout(() => {
    messageType.style.display = "none";
  }, time);
}

/**
 * Maneja la inserción de un nuevo libro en la tienda.
 * 
 * @param {Event} e - El evento que desencadenó la función, normalmente un evento de envío de formulario.
 * @returns {void} La función no devuelve un valor.
 */
function handlerInsertBook(e) {
  e.preventDefault();
  // Comprobar si los campos del libro están vacíos
  if (title.value === "" || author.value === "" || price.value === "") {
    messageError.textContent = "No puedes dejar los campos vacios"
    messageTimeOut(messageError, 5000);
    return;
  }
  // Crear un nuevo libro a partir de libroFuncional
  const newBook = new libroFuncional(title.value, author.value, parseFloat(price.value));

  // Comprobar si el precio del libro es válido
  if (isNaN(newBook.price) || newBook.price <= 0) {
    messageError.textContent = "El precio debe ser mayor que 0";
    messageTimeOut(messageError, 5000);
    price.value = "";
    return;
  }
  // Comprobar si el localStorage tiene una clave "books". Si es así guardar dicho localStorage en un array "getBooks"
  if (localStorage.getItem("books")) {
    getBooks = JSON.parse(localStorage.getItem("books"));
  }

  // Comprobar si el libro ya existe en la tienda
  const existingBook = getBooks.find(book => book._title === newBook._title);

  if (existingBook) {
    messageTimeOut(messageError, 5000);
  } else {
    // Agregar el nuevo libro al inventario y guardar en el almacenamiento local
    getBooks.push(newBook);
    localStorage.setItem("books", JSON.stringify(getBooks));
    messageTimeOut(messageSuccess, 5000);
  }
  // Limpiar los campos del formulario después de la inserción del libro
  title.value = "";
  author.value = "";
  price.value = "";
}

/**
 * Muestra la lista de libros en el textarea de la tienda.
 * 
 * Recupera la lista de libros almacenada en el localStorage y la muestra en el textarea de la tienda. Si no hay libros en el inventario, se muestra un mensaje indicando que no hay libros disponibles.
 * 
 * @returns {void} La función no devuelve un valor.
 */
function displayBookList() {
  const books = JSON.parse(localStorage.getItem("books"));
  if (books === null) {
    textarea.value = "No hay libros que mostrar";
    return;
  }

  //Formatea y muestra la lista de libros en el textarea
  textarea.value = books.map(book => `*** Titulo: ${book._title}, Autor: ${book._author} , Precio: ${book._price}€ ***`).join("\n")
}


/**
 * Calcula el precio total de todos los libros en el localStorage y lo muestra en la tienda.
 * 
 * Esta función obtiene la lista de libros almacenados en el localStorage y calcula el precio total sumando los precios de todos los libros. Luego, muestra el precio total en la tienda y lo borra después de 5 segundos.
 * 
 * @returns {void} La función no devuelve un valor.
 */
function handlerTotalPrice() {
  const books = JSON.parse(localStorage.getItem("books"));
  if (books === null) {
    messageTimeOut(messageErrorNoBooks, 5000);
    return;
  }
  
  const totalPrice = books.reduce((acc, book) => acc + parseFloat(book._price), 0)
  displayBookList();
  //console.log(totalPrice);
  
  showTotalPrice.value = `${totalPrice} €`;
  // Mostrar el precio durante 5 segundos.
  setTimeout(() => {
    showTotalPrice.value = ""
  }, 5000);
  
}

/**
 * Elimina un libro del inventario y muestra un mensaje de éxito o error.
 * 
 * Esta función elimina un libro del inventario utilizando el título proporcionado. Si el libro se encuentra en el inventario, se elimina y se muestra un mensaje de éxito. Si el libro no se encuentra, se muestra un mensaje de error. Después de la operación, se actualiza la lista de libros en la tienda.
 * 
 * @param {Event} e - El evento de clic del botón para prevenir la recarga de la página.
 * @returns {void} La función no devuelve un valor.
 */
function handlerDeleteBook(e) {
  e.preventDefault();
  const books = JSON.parse(localStorage.getItem("books"));
  const index = books.findIndex(book => book._title.toLowerCase() === titleDel.value.trim().toLowerCase());
  
  // Si no se encuentra el libro, muestra un mensaje de error
  if (index === -1) {
    messageTimeOut(messageErrorDel, 5000);
    titleDel.value = "";
    return;
  }
  
  // Elimina el libro del inventario
  books.splice(index, 1);
  
  // Muestra un mensaje de éxito
  messageTimeOut(messageSuccessDel, 5000);
  
  // Actualiza el inventario en el almacenamiento local
  localStorage.setItem("books", JSON.stringify(books));
  
  // Actualiza la lista de libros en la tienda
  displayBookList();
  
  // Borra el campo de entrada del título
  titleDel.value = "";
}

//Carga la lista de libros en el textarea cada vez que se inicia la página.
displayBookList();

// --------------------- addEventListener ----------------------------------

/**
 * Inicializa la aplicación estableciendo los event listeners para los botones.
 * 
 * Esta función se encarga de configurar los event listeners para los botones de la aplicación, lo que permite que los botones realicen las acciones deseadas cuando se hacen clic. Se asocian las funciones correspondientes a cada botón para agregar libros, recargar la lista de libros, calcular el precio total y eliminar libros del inventario.
 */
function init() {
  btnSend.addEventListener("click", handlerInsertBook);
  btnReload.addEventListener("click", displayBookList);
  btnTotalPrice.addEventListener("click", handlerTotalPrice);
  btnDelBook.addEventListener("click", handlerDeleteBook);

}
// -------- Inicio de la aplicación ---------------
// Inicio de la aplicación cuando el DOM se ha cargado completamente
document.addEventListener("DOMContentLoaded", init);