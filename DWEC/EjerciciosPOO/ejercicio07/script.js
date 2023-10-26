/**
 * @author: Rogelio Sánchez
 * @description: Enunciado: Crea un sistema de reservas de hoteles en JavaScript que incluye las siguientes clases:
Hotel, Habitacion, Reserva. El sistema debe permitir la creación de hoteles con habitaciones, la
realización de reservas y el cálculo del costo total de las reservas.
 */

import { Hotel, Habitacion, Reserva } from './assets/modules.js';

// Ejemplo de uso:
const habitacion1 = new Habitacion(101, 'Doble', 100);
const habitacion2 = new Habitacion(102, 'Individual', 80);

const hotel = new Hotel('Ejemplo Hotel');
hotel.agregarHabitacion(habitacion1);
hotel.agregarHabitacion(habitacion2);


const reserva = new Reserva(hotel.buscarHabitacionDisponible('Doble'), new Date('2023-11-01'), new Date('2023-11-05'));
const costoTotal = reserva.calcularCostoTotal();

console.log(`Reserva en ${hotel.nombre}`);
console.log(`Habitación: ${reserva.habitacion.numero}`);
console.log(`Fechas de estancia: ${reserva.fechaInicio.toDateString()} - ${reserva.fechaFin.toDateString()}`);
console.log(`Costo total: ${costoTotal} euros`);