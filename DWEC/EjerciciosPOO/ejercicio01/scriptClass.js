/**
 * @author: Rogelio Sánchez
 * @description:  Crea una aplicación que modele una tienda de libros. Cada libro *debe tener un título, un autor y un precio. La tienda debe permitir agregar *libros, eliminar libros y calcular el precio total de todos los libros en el *inventario.
 */

// --------------------- IMPORTS ----------------------------------
import { libroClass } from './assets/modules';
// Importar Bootstrap. Previamente se instala con "npm i bootstrap@5.3.2"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// --------------------- VARIABLES GLOBALES ----------------------------------
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
 * Valida los datos de un libro antes de su inserción.
 * 
 * Esta función verifica si el título, autor y precio del libro son válidos antes de insertar el libro en la lista. 
 * Si alguno de los campos no cumple con los requisitos, se muestra un mensaje de error y la inserción no se realiza.
 * 
 * @param {string} title - El título del libro.
 * @param {string} author - El autor del libro.
 * @param {number} price - El precio del libro.
 * @returns {boolean} - Devuelve true si los datos son válidos, de lo contrario, devuelve false.
 */
function validateBookData(title, author, price) {
  if (title === "" || author === "" || price === "") {
    // Si alguno de los campos está vacío, mostrar un mensaje de error
    messageTimeOut(messageErrorEmpty, 5000);
    return false;
  }
  if (isNaN(price) || price <= 0) {
    // Si el precio no es un número válido o es menor o igual a cero, mostrar un mensaje de error
    messageTimeOut(messageErrorPrice, 5000);
    return false;
  }
  return true;
}

/**
 * Comprueba si un libro ya existe en la tienda.
 * 
 * Esta función verifica si un libro ya existe en la tienda comparando su título con los libros existentes en el almacenamiento local (localStorage).
 * Si el libro ya existe, muestra un mensaje de error y devuelve true. En caso contrario, devuelve false.
 * 
 * @param {object} newBook - El nuevo libro que se desea comprobar si existe.
 * @returns {boolean} - Devuelve true si el libro ya existe, de lo contrario, devuelve false.
 */
function checkIfBookExists(newBook) {
  // Comprobar si el localStorage tiene una clave "books". Si es así, guardar dicho localStorage en un array "getBooks"
if (localStorage.getItem("books")) {
  getBooks = JSON.parse(localStorage.getItem("books"));
}
// Comprobar si el libro ya existe en la tienda
const existingBook = getBooks.find(book => book._title === newBook._title);
if (existingBook) {
  // Si el libro ya existe, mostrar un mensaje de error
  messageTimeOut(messageError, 5000);
  return true;
}
return false;
}

/**
 * Inserta un nuevo libro en la tienda y actualiza el almacenamiento local.
 * 
 * Esta función agrega un nuevo libro a la tienda y actualiza el almacenamiento local (localStorage) con la lista de libros actualizada.
 * Además, muestra un mensaje de éxito durante un tiempo determinado.
 * 
 * @param {object} newBook - El nuevo libro que se desea agregar a la tienda.
 */
function insertNewBook(newBook) {
  // Agregar el nuevo libro a la lista de libros en la tienda
  getBooks.push(newBook);
  // Actualizar el almacenamiento local con la lista de libros actualizada
  localStorage.setItem("books", JSON.stringify(getBooks));
  // Mostrar un mensaje de éxito durante un tiempo determinado
  messageTimeOut(messageSuccess, 5000);
}

/**
 * Maneja la inserción de un nuevo libro en la aplicación.
 * 
 * Esta función se activa cuando se hace clic en el botón para agregar un libro. Primero, se realiza una validación de los datos del libro (título, autor y precio) utilizando la función `validateBookData`. Si los datos no son válidos, se detiene el proceso de inserción. Luego, se crea un nuevo objeto de libro utilizando la clase `libroClass` con los datos proporcionados. Después, se verifica si el libro ya existe en la aplicación usando la función `checkIfBookExists`. Si el libro ya existe, se detiene el proceso de inserción. Si el libro es nuevo, se agrega a la aplicación utilizando la función `insertNewBook`. Finalmente, los campos del formulario se reinician a sus valores iniciales.

 * @param {Event} e - El evento de clic que desencadena esta función.
 */
function handlerInsertBook(e) {
  e.preventDefault();
  
  // Crear un nuevo libro con los datos del formulario
  const newBook = new libroClass(title.value, author.value, parseFloat(price.value));
  
  // Validar los datos del libro y detener la inserción si no son válidos
  if (!validateBookData(title.value, author.value, parseFloat(price.value))) return;
  
  // Verificar si el libro ya existe en la aplicación y detener la inserción si es el caso
  if (checkIfBookExists(newBook)) return;
  
  // Insertar el nuevo libro en la aplicación
  insertNewBook(newBook);
  
  // Reiniciar los campos del formulario
  title.value = "";
  author.value = "";
  price.value = "";
}


/**
 * Muestra la lista de libros en el textarea de la aplicación.
 * 
 * Esta función se encarga de obtener la lista de libros almacenados en el almacenamiento local (localStorage) y mostrarlos en el textarea de la aplicación. Si no hay libros en la lista, muestra un mensaje indicando que no hay libros para mostrar.

 * @returns {void}
 */
function displayBookList() {
  // Obtener la lista de libros almacenados en localStorage
  const books = JSON.parse(localStorage.getItem("books"));
  
  if (books === null) {
    // Si no hay libros, mostrar un mensaje indicando que no hay libros para mostrar
    textarea.value = "No hay libros que mostrar";
    return;
  }

  // Crear una lista formateada de libros y mostrarla en el textarea
  const bookList = books.map(book => `*** Titulo: ${book._title}, Autor: ${book._author} , Precio: ${book._price}€ ***`).join("\n");
  textarea.value = bookList;
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