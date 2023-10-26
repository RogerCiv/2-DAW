
/*
export function Hotel(nombre){
    this._nombre = nombre;
    this.getNombre = function(){
        return this._nombre;
    }
}


export function Habitacion(numero,precio) {
    this._numero = numero;
    this._precio = precio;

    this.getNumero = function(){
        return this._numero;
    }

    this.getPrecio = function(){
        return this._precio;
    }

    this.setNumero = function(nuevoNumero){
        this._numero = nuevoNumero;
    }

    this.setPrecio = function(nuevoPrecio){
        this._precio = nuevoPrecio;
    }
}


export function Reserva(habitacion){
    this._habitacion = habitacion;
}

*/
export class Habitacion {
    constructor(numero, tipo, precio) {
      this.numero = numero;
      this.tipo = tipo;
      this.precio = precio;
    }
  }
  
  export class Hotel {
    constructor(nombre) {
      this.nombre = nombre;
      this.habitaciones = [];
    }
  
    agregarHabitacion(habitacion) {
      this.habitaciones.push(habitacion);
    }
  
    buscarHabitacionDisponible(tipo) {
      return this.habitaciones.find(habitacion => habitacion.tipo === tipo);
    }
  }
  
  export class Reserva {
    constructor(habitacion, fechaInicio, fechaFin) {
      this.habitacion = habitacion;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
    }
  
    calcularCostoTotal() {
      const dias = (this.fechaFin - this.fechaInicio) / (1000 * 60 * 60 * 24); // Calcular los días de estancia
      return this.habitacion.precio * dias;
    }
  }

