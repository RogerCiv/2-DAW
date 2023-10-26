
export function Empleado(nombre,salario){
  this._nombre = nombre;
  this._salario = salario;

 this.getInformacion = function(){
  return `Nombre: ${this._nombre} Salario: ${this._salario} €`;
 }

}

export function Gerente(nombre,salario,departamento){
  Empleado.call(this,nombre,salario);
  this._departamento = departamento;
}

Gerente.prototype = Object.create(Empleado.prototype);
Gerente.prototype.constructor = Gerente;

Gerente.prototype.getInformacion = function(){
  return `Nombre: ${this._nombre} Salario: ${this._salario}, Departamento: ${this._departamento}`;
}


export function Desarrollador(nombre,salario,lenguaje){
  Empleado.call(this,nombre,salario);
  this._lenguaje = lenguaje;
}

Desarrollador.prototype = Object.create(Empleado.prototype);
Desarrollador.prototype.constructor = Desarrollador;

Desarrollador.prototype.getInformacion = function() {
  return `Nombre: ${this._nombre}, Salario: ${this._salario}, lenguaje: ${this._lenguaje}`;
}

export function SistemaEmpleados(){
  this._empleados = []


}


SistemaEmpleados.prototype.agregarEmpleados = function(empleado){
  this._empleados.push(empleado);
}

SistemaEmpleados.prototype.calcularSalarioTotal = function(){
  return this._empleados.reduce((total,empleado) => total + empleado._salario,0)
}

SistemaEmpleados.prototype.mostrarInformacionEmpleados = function() {
  /*
  let informacion = '';
  for (let empleado of this._empleados) {
    informacion += empleado.getInformacion() + '\n';
  }
  return informacion;
  */
  return this._empleados.map(empleado => empleado.getInformacion()).join('\n');
}