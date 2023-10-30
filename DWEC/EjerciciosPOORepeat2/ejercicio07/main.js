import { Hotel, Habitacion, Reserva } from "./assets/modules";

const habitaciones = document.getElementById("habitaciones");
const textarea = document.getElementById("textarea");
const inputTotal = document.getElementById("precioTotal");

const btnReservar = document.getElementById("btnReservar");
const btnCancelar = document.getElementById("btnCancelar");
const btnTotal = document.getElementById("btnTotal");

const hotel = new Hotel("Hotel Del AmoOOOOooOOoOORR");

let reserva;
let habitacion1 = new Habitacion(101, 100);
let habitacion2 = new Habitacion(102, 150);
let habitacion3 = new Habitacion(103, 80);
let habitacion4 = new Habitacion(104, 50);

hotel.agregarHabitacion(habitacion1);
hotel.agregarHabitacion(habitacion2);
hotel.agregarHabitacion(habitacion3);
hotel.agregarHabitacion(habitacion4);

function habitacionSeleccionada() {
  if (habitaciones.value === "habitacion101") {
    return habitacion1;
  } else if (habitaciones.value === "habitacion102") {
    return habitacion2;
  } else if (habitaciones.value === "habitacion103") {
    return habitacion3;
  } else {
    return habitacion4;
  }
}

function handlerReservar(e) {
  e.preventDefault();
  textarea.value = "h";
  if (habitacionSeleccionada()) {
    reserva = new Reserva(hotel, habitacionSeleccionada().getNumero);
    reserva.realizarReserva();
    textarea.value = hotel.mostrarHabitacionesReservadas();
    console.log(hotel.mostrarHabitacionesReservadas());
  }

}

function handlerCancelar(e) {
  e.preventDefault();
  if (habitacionSeleccionada()) {
    let cancelar = new Reserva(hotel, habitacionSeleccionada().getNumero);
    cancelar.cancelarReserva();
    textarea.value = hotel.mostrarHabitacionesReservadas();
  }

}

function handlerPrecioTotal(e) {
  e.preventDefault();
  inputTotal.value = hotel.calcularTotalReservas();
}

btnReservar.addEventListener("click", handlerReservar);
btnCancelar.addEventListener("click", handlerCancelar);
btnTotal.addEventListener("click", handlerPrecioTotal);





