
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

Vehiculo.prototype.acelerar = function(){
  console.log('El coche esta acelerando') 
}


export function CocheFuncional(marca,modelo,año) {
  Vehiculo.call(this,marca,modelo,año)
}

CocheFuncional.prototype =  Object.create(VehiculoFuncional.prototype);
Coche.prototype.constructor = Coche;

CocheFuncional.prototype.arrancar = function(){
  console.log('El coche esta arrancando');
}

CocheFuncional.prototype.frenar = function(){
  console.log('El coche está frenando');
}


export function MotoFuncional(marca,modelo,año) {
  Vehiculo.call(this,marca,modelo,año);
}

MotoFuncional.prototype = Object.create(Vehiculo.prototype);
MotoFuncional.prototype.constructor = Moto;

MotoFuncional.prototype.arrancar = function() {
    console.log('La moto está arrancando');
};

MotoFuncional.prototype.frenar = function() {
    console.log('La moto está frenando');
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
    console.log("El Vehículo esta acelereando")
  }

}

export class CocheClass extends VehiculoClass {
  constructor(marca,modelo,año){
    super(marca,modelo,año)
  }

  arrancar(){
    console.log('El coche está arrancando')
  }

  frenar(){
    console.log('El coche esta frenando');
  }
}


export class MotoClass extends VehiculoClass {
  constructor(marca,modelo,año){
    super(marca,modelo,año);
  }

  arrancar(){
    console.log('La moto arranca')
  }

  frenar(){
    console.log('La moto frena')
  }
}
