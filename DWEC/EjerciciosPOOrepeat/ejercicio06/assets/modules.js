export function Empleado(nombre, salario) {
  this._nombre = nombre;
  this._salario = salario;

  this.getNombre = function () {
    return this._nombre;
  };
  this.setNombre = function (nuevoNombre) {
    this._nombre = nuevoNombre;
  };
  this.getSalario = function () {
    return this._salario;
  };
  this.setSalario = function (salario) {
    this._salario = salario;
  };
}

export function Gerente(nombre, salario, departamento) {
  Empleado.call(this, nombre, salario);
  this._departamento = departamento;

  this.getDepartamento = function () {
    return this._departamento;
  };
}

Gerente.prototype = Object.create(Empleado.prototype);

Gerente.prototype.getInformacion = function () {
  return `Nombre: ${this.getNombre()}, Salario: ${this.getSalario()}, Departamento: ${this.getDepartamento()}`;
};

export function Desarrollador(nombre, salario, lenguaje) {
  Empleado.call(this, nombre, salario);
  this._lenguaje = lenguaje;

  this.getLenguaje = function () {
    return this._lenguaje;
  };
}

Desarrollador.prototype = Object.create(Empleado.prototype);

Desarrollador.prototype.getInformacion = function () {
  return `Nombre: ${this.getNombre()}, Salario: ${this.getSalario()}, Lenguaje: ${this.getLenguaje()}`;
};

export function Sistema() {
  this._empleados = [];
}

Sistema.prototype.agregarEmpleado = function (empleado) {
  this._empleados.push(empleado);
};

Sistema.prototype.calcularSalarioTotal = function () {
  return this._empleados.reduce(
    (acc, empleado) => acc + empleado.getSalario(),
    0
  );
};

Sistema.prototype.mostrarInformacion = function () {
  return this._empleados
    .map((empleado) => `Informacion: ${empleado.getInformacion()}`)
    .join("\n");
};
