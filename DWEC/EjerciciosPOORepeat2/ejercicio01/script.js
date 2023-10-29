import { Libro, Tienda } from "./assets/modules";

const inputTitulo = document.getElementById("titulo");
const inputAutor = document.getElementById("autor");
const inputPrecio = document.getElementById("precio");
const inputTotalPrecio = document.getElementById("precioTotal");
const inputEliminar = document.getElementById("eliminar");

const textarea = document.getElementById("textarea");

const btnEnviar = document.getElementById("btnEnviar");
const btnCalcular = document.getElementById("btnPrecio");
const btnEliminar = document.getElementById("btnEliminar");

const tienda = new Tienda();

function handlerInsertBook(e) {
  e.preventDefault();
  let book = new Libro(
    inputTitulo.value,
    inputAutor.value,
    parseFloat(inputPrecio.value)
  );

  tienda.agregarLibros(book);
  console.log(tienda.mostrarInformacion());
  agregarTextArea();
}

function agregarTextArea() {
  textarea.value = tienda.mostrarInformacion();
}

function handlerShowTotal(e) {
  e.preventDefault();
  inputTotalPrecio.value = tienda.calcularPrecioTotal();
}

function handlerDelete(e) {
  e.preventDefault();
  tienda.eliminarLibro(inputEliminar.value);
  agregarTextArea();
}

btnEnviar.addEventListener("click", handlerInsertBook);
btnCalcular.addEventListener("click", handlerShowTotal);
btnEliminar.addEventListener("click", handlerDelete);
