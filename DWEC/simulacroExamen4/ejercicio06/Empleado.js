export function Empleado(nombre,salario){
    this._nombre = nombre;
    this._salario = salario

    this.getNombre = function () {
        return this._nombre
    }
    this.getSalario = function () {
        return this._salario
    }
}