import { Habitacion, Hotel, Reserva } from "./assets/modules";

const tipo = document.getElementById("numHabitacion");
const textarea = document.getElementById("textarea");
const inputTotal = document.getElementById("totalPrecio");

const btnReservar = document.getElementById("reservar");
const btnCancelar = document.getElementById("cancelar");
const btnTotal = document.getElementById("btnTotal");

let habitacion1 = new Habitacion(101, 100);
let habitacion2 = new Habitacion(102, 150);
let habitacion3 = new Habitacion(103, 80);
let habitacion4 = new Habitacion(104, 50);

let reserva;
const hotelGranada = new Hotel("Hotel Granada");
hotelGranada.agregarHabitacion(habitacion1);
hotelGranada.agregarHabitacion(habitacion2);
hotelGranada.agregarHabitacion(habitacion3);
hotelGranada.agregarHabitacion(habitacion4);

function habitacionSeleccionada() {
  if (tipo.value === "habitacion1") {
    return habitacion1;
  } else if (tipo.value === "habitacion2") {
    return habitacion2;
  } else if (tipo.value === "habitacion3") {
    return habitacion3;
  } else {
    return habitacion4;
  }
}

function handlerReserva(e) {
  e.preventDefault();
  if (habitacionSeleccionada()) {
    reserva = new Reserva(hotelGranada, habitacionSeleccionada().getNumero);
    reserva.realizarReserva();
    textarea.value = hotelGranada.mostrarHabitacionesReservadas();
  }
}

function handlerCancelar(e) {
  e.preventDefault();

  if (habitacionSeleccionada()) {
    let cancelar = new Reserva(
      hotelGranada,
      habitacionSeleccionada().getNumero
    );
    cancelar.cancelarReserva();
    textarea.value = hotelGranada.mostrarHabitacionesReservadas();
  }
}

function handlerTotal(e) {
  e.preventDefault();
  inputTotal.value = hotelGranada.calcularTotalReservas();
}

btnReservar.addEventListener("click", handlerReserva);
btnCancelar.addEventListener("click", handlerCancelar);
btnTotal.addEventListener("click", handlerTotal);
