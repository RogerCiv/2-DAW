export function Vehiculo(marca, modelo, año) {
  this._marca = marca;
  this._modelo = modelo;
  this._año = año;

  this.getMarca = function () {
    return this._marca;
  };
  this.setMarca = function (marca) {
    this._marca = marca;
  };

  this.getModelo = function () {
    return this._modelo;
  };
  this.setModelo = function (modelo) {
    this._modelo = modelo;
  };
  this.getAño = function () {
    return this._año;
  };
  this.setAño = function (año) {
    año >= 0 ? (this._año = año) : console.log("El año debe ser mayor que 0");
  };
}

Vehiculo.prototype.acelerar = function () {
  return `El Vehiculo con marca ${this.getMarca()} modelo 
  ${this.getModelo()} y año ${this.getAño()} esta acelerando `;
};

export function Coche(marca, modelo, año) {
  Vehiculo.call(this, marca, modelo, año);
}

Coche.prototype = Object.create(Vehiculo.prototype);

Coche.prototype.arrancar = function () {
  return `El coche ${this.getMarca()} ${this.getModelo()} ${this.getAño()}  esta arrancando`;
};

Coche.prototype.frenar = function () {
  return `El coche ${this.getMarca()} ${this.getModelo()} ${this.getAño()}  esta frenando`;
};

export function Moto(marca, modelo, año) {
  Vehiculo.call(this, marca, modelo, año);
}

Moto.prototype = Object.create(Vehiculo.prototype);

Moto.prototype.arrancar = function () {
  return `El Moto ${this.getMarca()} ${this.getModelo()} ${this.getAño()}  esta arrancando`;
};

Moto.prototype.frenar = function () {
  return `El Moto ${this.getMarca()} ${this.getModelo()} ${this.getAño()}  esta frenando`;
};

export function Concesionario() {
  this._inventario = [];


}
Concesionario.prototype.agregarVehiculo = function(vehiculo){
  this._inventario.push(vehiculo)
}

export function backup(name, arr) {
  return localStorage.setItem(name, JSON.stringify(arr));
}
