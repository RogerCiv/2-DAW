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
    this._año = año >= 0 ? año : "El año tiene que ser mayor o igual a 0";
  };
}

Vehiculo.prototype.acelerar = function () {
  return `El Vehiculo con marca ${this.getMarca()} modelo ${this.getModelo()} y del año ${this.getAño()} esta acelerandor`;
};

export function Coche(marca, modelo, año) {
  Vehiculo.call(this, marca, modelo, año);
}

Coche.prototype = Object.create(Vehiculo.prototype);

Coche.prototype.arrancar = function () {
  return `El Coche con marca ${this.getMarca()} modelo ${this.getModelo()} y año ${this.getAño()} está arrancando`;
};

Coche.prototype.frenar = function () {
  return `El Coche con marca ${this.getMarca()} modelo ${this.getModelo()} y año ${this.getAño()} está frenando`;
}


export function Moto(marca, modelo, año) {
  Vehiculo.call(this, marca, modelo, año);
}

Moto.prototype = Object.create(Vehiculo.prototype);

Moto.prototype.arrancar = function () {
  return `El Moto con marca ${this.getMarca()} modelo ${this.getModelo()} y año ${this.getAño()} está arrancando`;
};

Moto.prototype.frenar = function () {
  return `El Moto con marca ${this.getMarca()} modelo ${this.getModelo()} y año ${this.getAño()} está frenando`;
}


