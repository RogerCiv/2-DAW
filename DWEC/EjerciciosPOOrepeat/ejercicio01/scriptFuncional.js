/**
 * @author: Rogelio Sánchez
 * @description:  Crea una aplicación que modele una tienda de libros. Cada libro *debe tener un título, un autor y un precio. La tienda debe permitir agregar *libros, eliminar libros y calcular el precio total de todos los libros en el *inventario.
 */

// --------------------- IMPORTS ----------------------------------

import { Libro, Tienda, backup, load } from "./assets/modules";
// Importar Bootstrap. Previamente se instala con "npm i bootstrap@5.3.2"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const titulo = document.getElementById("title");
const autor = document.getElementById("author");
const precio = document.getElementById("price");

const textarea = document.getElementById("textarea");
const showTotalPrice = document.getElementById("showTotalPrice");
const delBook = document.getElementById("titleDel");

const tienda = new Tienda(load("Tienda"));

const btnSendBook = document.getElementById("sendBook");
const btnReload = document.getElementById("reloadBooks");
const btntotalPrice = document.getElementById("totalPrice");
const btndelBook = document.getElementById("delBook");

function handlerInsertBook(e) {
  e.preventDefault();
  const book = new Libro(titulo.value, autor.value, parseFloat(precio.value));

  comprobarLocalStorage(book);
  console.log(tienda);
}

function comprobarLocalStorage(book) {
  let arr = load("Tienda");

  const encontrado = arr.some((el) => el._titulo === book._titulo);
  if (!encontrado) {
    tienda.agregarLibro(book);
    backup("Tienda", tienda.inventario);
  } else {
    console.log("Ya existe");
  }
}

function handlerReloadBook(e){
  e.preventDefault();
  textarea.value = tienda.infolibros();
  console.log("Pruebas: ",tienda.infolibros());
}

function handlerShowPrice(e){
  e.preventDefault();
  showTotalPrice.value = tienda.calcularPrecioTotal()
}

function handlerDelBook(e){
  e.preventDefault();
  tienda.eliminarLibro(delBook.value);
}

btnSendBook.addEventListener("click", handlerInsertBook);
btnReload.addEventListener("click", handlerReloadBook);
btntotalPrice.addEventListener("click", handlerShowPrice);
btndelBook.addEventListener("click", handlerDelBook);
