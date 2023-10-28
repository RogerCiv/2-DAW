export function Comida(nombre, calorias) {
  this._nombre = nombre;
  this._calorias = calorias;

  this.getNombre = function () {
    return this._nombre;
  };

  this.setNombre = function (nuevoNombre) {
    this._nombre = nuevoNombre;
  };

  this.setCalorias = function (calorias) {
    this._calorias = calorias;
  };

  Comida.prototype.calcularCalorias = function () {
    return this._calorias;
  };
}

export function Dieta() {
  this._alimentosConsumidos = [];
}

Dieta.prototype.agregarAlimento = function (comida) {
  this._alimentosConsumidos.push(comida);
};

Dieta.prototype.calcularTotalCalorias = function () {
  return this._alimentosConsumidos.reduce(
    (acc, comida) => acc + comida.calcularCalorias(),
    0
  );
};

Dieta.prototype.listarAlimentosConsumidos = function () {
 return this._alimentosConsumidos.map(
    (comida) =>
      `Comida: ${comida.getNombre()} Calorias: ${comida.calcularCalorias()}.`
  ).join('\n');
};
