import { Empleado } from "./Empleado";

export function Gerente(nombre, salario, departamento) {
  Empleado.call(this, nombre, salario);
  this._departamento = departamento;

  this.getDepartamento = function () {
    return this._departamento;
  };
  this.getInformacion = function () {
    return `Nombre: ${this.getNombre()} , Salario: ${this.getSalario()} Departamento: ${this.getDepartamento()}`;
  };
}
