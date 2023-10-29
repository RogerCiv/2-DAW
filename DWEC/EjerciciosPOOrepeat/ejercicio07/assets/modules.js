export class Habitacion {
  constructor(numero, precio) {
    this._numero = numero;
    this._precio = precio;
    this._reserva = false;
  }

  get getNumero() {
    return this._numero;
  }
  set setNumero(numero) {
    this._numero = numero;
  }

  get getPrecio() {
    return this._precio;
  }
  set setPrecio(precio) {
    this._precio = precio;
  }
  get getReserva() {
    return this._reserva;
  }

  reservar() {
    this._reserva = true;
  }
  cancelarReserva() {
    this._reserva = false;
  }
}

export class Hotel {
  constructor(nombre) {
    this._nombre = nombre;
    this._habitaciones = [];
  }
  get getNombre() {
    return this._nombre;
  }

  agregarHabitacion(habitacion) {
    this._habitaciones.push(habitacion);
  }

  reservarHabitacion(numero) {
    let habitacion = this._habitaciones.find(
      (habitacion) => habitacion.getNumero === numero
    );
    if (habitacion && !habitacion._reserva) {
      habitacion.reservar();
      return true;
    }
    return false;
  }

  mostrarHabitacionesReservadas() {
    return this._habitaciones
      .filter((h) => h.getReserva)
      .map((h) => `Habitacion: ${h.getNumero}, Precio: ${h.getPrecio}`)
      .join("\n");
  }

  cancelarReserva(numero) {
    let habitacion = this._habitaciones.find(
      (habitacion) => habitacion.getNumero === numero
    );
    if (habitacion && habitacion._reserva) {
      habitacion.cancelarReserva();
      return true;
    }
    return false;
  }

  calcularTotalReservas() {
    return this._habitaciones
      .filter(h => h._reserva)
      .reduce((total, h) => total + h.getPrecio, 0);
  }
}

export class Reserva {
  constructor(hotel, numHabitacion) {
    this._hotel = hotel;
    this._numHabitacion = numHabitacion;
  }

  realizarReserva() {
    return this._hotel.reservarHabitacion(this._numHabitacion);
  }

  cancelarReserva() {
    return this._hotel.cancelarReserva(this._numHabitacion);
  }
}
