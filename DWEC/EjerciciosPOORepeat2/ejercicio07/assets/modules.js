export function Hotel(nombre) {
  this._nombre = nombre;
  this._habitaciones = [];

  this.getNombre = function () {
    return this._nombre;
  };
}

Hotel.prototype.agregarHabitacion = function (habitacion) {
  this._habitaciones.push(habitacion);
};

Hotel.prototype.reservarHabitacion = function (numero) {
  let habitacion = this._habitaciones.find(
    (habitacion) => habitacion.getNumero === numero
  );
  if (habitacion && !habitacion._reserva) {
    habitacion.reservar();
    return true;
  }
  return false;
};

Hotel.prototype.mostrarHabitacionesReservadas = function () {
  return this._habitaciones
    .filter((h) => h.getReserva())
    .map((h) => `Habitacion: ${h.getNumero()}, Precio: ${h.getPrecio()}`)
    .join("\n");
};

Hotel.prototype.cancelarReserva = function (numero) {
  let habitacion = this._habitaciones.find(
    (habitacion) => habitacion.getNumero === numero
  );
  if (habitacion && habitacion._reserva) {
    habitacion.cancelarReserva();
    return true;
  }
  return false;
};

Hotel.prototype.calcularTotalReservas = function () {
  return this._habitaciones
    .filter((h) => h._reserva)
    .reduce((total, h) => total + h.getPrecio(), 0);
};

export function Habitacion(numero, precio) {
  this._numero = numero;
  this._precio = precio;
  this._reserva = false;

  this.getNumero = function () {
    return this._numero;
  };
  this.getPrecio = function () {
    return this._precio;
  };
  this.getReserva = function () {
    return this._reserva;
  };
}

Habitacion.prototype.reservar = function () {
  this._reserva = true;
};
Habitacion.prototype.cancelarReserva = function () {
  this._reserva = false;
};
export function Reserva(hotel, numHabitacion) {
  this._hotel = hotel;
  this._numHabitacion = numHabitacion;

  this.getHotel = function () {
    return this._hotel;
  };
  this.getNumHabitacion = function () {
    return this._numHabitacion;
  };
}
Reserva.prototype.realizarReserva = function () {
  return this._hotel.reservarHabitacion(this._numHabitacion);
};

Reserva.prototype.cancelarReserva = function () {
  return this._hotel.cancelarReserva(this._numHabitacion);
};