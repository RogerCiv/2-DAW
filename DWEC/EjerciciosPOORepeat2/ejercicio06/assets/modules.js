export function Empleado(nombre, salario) {
  this._nombre = nombre;
  this._salario = salario;

  this.getNombre = function () {
    return this._nombre;
  };
  this.getSalario = function () {
    return this._salario;
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

export function Empresa(nombre, empleados = []) {
  this._nombre = nombre;
  this._empleados = empleados;

  this.getNombre = function () {
    return this._nombre;
  };
  this.getEmpleados = function () {
    return this._empleados;
  };
}

Empresa.prototype.agregarEmpleados = function (empleado) {
  this._empleados.push(empleado);
};

Empresa.prototype.calcularSalarioTotal = function () {
  return this._empleados.reduce(
    (acc, empleado) => acc + empleado.getSalario,
    0
  );
};

Empresa.prototype.infoEmpleados = function () {
  return this._empleados
    .map((empleado) => `Informacion: ${empleado.getInformacion()}`)
    .join("\n");
};

export function backup(name, arr) {

  if(localStorage.getItem(name)){
    const oldLocalStorage = JSON.parse(localStorage.getItem(name))
    const updateLS = [].concat(oldLocalStorage,arr);
    localStorage.setItem(name,JSON.stringify(updateLS))
  }
  localStorage.setItem(name, JSON.stringify(arr));
}


