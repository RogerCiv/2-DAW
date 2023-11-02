import { Empleado } from "./Empleado";

export function Desarrollador(nombre, salario, lenguaje) {
  Empleado.call(this, nombre, salario);
  this._lenguaje = lenguaje;

  this.getLenguaje = function () {
    return this._lenguaje;
  };
  this.getInformacion = function () {
    return `Nombre: ${this.getNombre()} , Salario: ${this.getSalario()} Lenguaje: ${this.getLenguaje()}`;
  };
}

Desarrollador.prototype = Object.create(Empleado.prototype)
