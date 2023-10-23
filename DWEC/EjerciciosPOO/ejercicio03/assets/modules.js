
// Objetos Literales

export const VehiculoLiteral = {
  _marca:'',
  _modelo: '',
  _año: '',

  get marca() { return this._marca; },

  set marca(nuevaMarca) { this._marca = nuevaMarca; },

  get modelo() { return this._modelo; },
  
  set modelo(nuevoModelo) { this._modelo = nuevoModelo;},

  get año() { return this._año; },
  set año(nuevoAño) { nuevoAño > 0 ? this._año = nuevoAño : 0},

  acelerar: function(){
    console.log("El vehículo está acelerando");
  }
}

export const CocheLiteral = Object.create(VehiculoLiteral);
CocheLiteral.arrancar = function () {
  console.log("El coche está acelerando");
};
CocheLiteral.frenar = function () {
  console.log('El coche está frenando');
};

export const MotoLiteral = Object.create(VehiculoLiteral);
MotoLiteral.arrancar = function () {
  console.log('La moto está acelerando');
};
MotoLiteral.frenar = function () {
  console.log('La moto está frenando');
};




// funciones constructoras

export function VehiculoFuncional(marca,modelo,año) {
  this._marca = marca;
  this._modelo = modelo;
  this._año = año;
}

// Getter para 'marca'
VehiculoFuncional.prototype.getMarca = function() {
  return this._marca;
}

// Setter para 'marca'
VehiculoFuncional.prototype.setMarca = function(marca) {
  this._marca = marca;
}

VehiculoFuncional.prototype.getModelo = function() {
  return this._modelo;
}

VehiculoFuncional.prototype.setModelo = function(modelo) {
  this._modelo = modelo;
}

VehiculoFuncional.prototype.getAño = function() {
  return this._año;
}

VehiculoFuncional.prototype.setAño = function(año) {
  this._año = año;
}

VehiculoFuncional.prototype.acelerar = function() {
  return `El ${this.getMarca()} ${this.getModelo()} está acelerando`;
}


export function CocheFuncional(marca,modelo,año) {
  VehiculoFuncional.call(this,marca,modelo,año)
}

CocheFuncional.prototype =  Object.create(VehiculoFuncional.prototype);
CocheFuncional.prototype.constructor = CocheFuncional;

CocheFuncional.prototype.arrancar = function(){
  return `El ${this.getMarca()} ${this.getModelo()} está arrancando`;
}

CocheFuncional.prototype.frenar = function(){
  return `El ${this.getMarca()} ${this.getModelo()} está frenando`;
}


export function MotoFuncional(marca,modelo,año) {
  VehiculoFuncional.call(this,marca,modelo,año);
}

MotoFuncional.prototype = Object.create(VehiculoFuncional.prototype);
MotoFuncional.prototype.constructor = MotoFuncional;

MotoFuncional.prototype.arrancar = function() {
  return `El ${this.getMarca()} ${this.getModelo()} está arrancando`;
};

MotoFuncional.prototype.frenar = function() {
  return `El ${this.getMarca()} ${this.getModelo()} está frenando`;
};



// Class

export class VehiculoClass {
  constructor(marca, modelo, año) {
    this._marca = marca;
    this._modelo = modelo;
    this._año = año;
  }

  get marca() {
    return this._marca;
  }

  set marca(nuevaMarca) {
    this._marca = nuevaMarca;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(nuevoModelo) {
    this._modelo = nuevoModelo;
  }

  get año() {
    return this._año;
  }

  set año(nuevoAño) {
    if(nuevoAño > 0){
      this._año = nuevoAño;
    }
  }

  acelerar() {
    return "El Vehículo esta acelereando";
  }

}

export class CocheClass extends VehiculoClass {
  constructor(marca,modelo,año){
    super(marca,modelo,año)
  }

  acelerar(){
    return `El ${this.marca} ${this.modelo} está acelerando`;
  }

  arrancar(){
    return `El ${this.marca} ${this.modelo} está arrancando`;
  }

  frenar(){
    return 'El coche esta frenando';
  }
}


export class MotoClass extends VehiculoClass {
  constructor(marca,modelo,año){
    super(marca,modelo,año);
  }

  arrancar(){
    return `${this.marca} ${this.modelo} arranca`;
  }

  frenar(){
   return `${this.marca} ${this.modelo} frena`;
  }
  acelerar(){
    return `${this.marca} ${this.modelo} está acelerando`;
  }
}
