export function Hotel(nombre) {
  this._nombre = nombre;
  this._habitaciones = [];

  this.getNombre = function () {
    return this._nombre;
  };

  this.agregarHabitacion = function (habitacion) {
    this._habitaciones.push(habitacion);
  };
  this.reservarHabitacion = function (numero) {
    let habitacion = this._habitaciones.find(
      (habitacion) => habitacion.getNumero === numero
    );
    if (habitacion && !habitacion._reserva) {
      habitacion.reservar();
      return true;
    }
    return false;
  };
  this.cancelarReserva = function (numero) {
    let habitacion = this._habitaciones.find(
      (habitacion) => habitacion.getNumero === numero
    );
    if(habitacion && habitacion._reserva){
      habitacion.cancelarReserva()
      return true;
    }
    return false;
  };

  this.mostrarHabitacionesReservadas = function () {
    return this._habitaciones
      .filter((h) => h.getReserva())
      .map((h) => `Habitacion: ${h.getNumero}, Precio: ${h.getPrecio()}`)
      .join("\n");
  };
}

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

  this.reservar = function () {
    this._reserva = true;
  };
  this.cancelarReserva = function () {
    this._reserva = false;
  };
}

export function Reserva(hotel, numHabitacion) {
  this._hotel = hotel;
  this._numHabitacion = numHabitacion;

  this.getHotel = function () {
    return this._hotel;
  };
  this.getNumHabitacion = function () {
    return this._numHabitacion;
  };

  this.realizarReserva = function () {
    return this._hotel.reservarHabitacion(this._numHabitacion);
  };
}
