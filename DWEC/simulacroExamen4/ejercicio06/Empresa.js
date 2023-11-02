export function Empresa() {
  this._empleados = [];

  this.agregarEmpleados = function (empleado) {
    this._empleados.push(empleado);
  };

  this.calcularSalarioTotal = function () {
    return this._empleados.reduce(
      (acc, empleado) => acc + empleado.getSalario,
      0
    );
  };

  this.mostrarInfoEmpleados = function () {
    return this._empleados
      .map((empleado) => `Informacion: ${empleado.getInformacion()}`)
      .join("\n");
  };
}
