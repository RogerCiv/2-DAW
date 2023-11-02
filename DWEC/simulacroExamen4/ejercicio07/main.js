import { Habitacion, Hotel, Reserva } from "./Clases";

const hotel = new Hotel("Hotel Transilvania");



let habitacion1 = new Habitacion(101, 100);
let habitacion2 = new Habitacion(102, 150);
let habitacion3 = new Habitacion(103, 80);
let habitacion4 = new Habitacion(104, 50);
const reserva = new Reserva(hotel, habitacion1.getNumero);
hotel.agregarHabitacion(habitacion1);
hotel.agregarHabitacion(habitacion2);
hotel.agregarHabitacion(habitacion3);
hotel.agregarHabitacion(habitacion4);

hotel.reservarHabitacion(habitacion1)


console.log(hotel.mostrarHabitacionesReservadas());