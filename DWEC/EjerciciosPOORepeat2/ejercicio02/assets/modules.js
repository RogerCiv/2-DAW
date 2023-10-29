export function Comida(nombre, calorias) {
  this._nombre = nombre;
  this._calorias = calorias;

  this.getNombre = function () {
    return this._nombre;
  };
  this.setNombre = function (nombre) {
    this._nombre = nombre;
  };
  this.getCalorias = function () {
    return this._calorias;
  };
  this.setCalorias = function (calorias) {
    this._calorias = calorias;
  };
}

export function Dieta() {
  this._alimentosConsumidos = [];
}

Dieta.prototype.agregarAlimentos = function (comida) {
  this._alimentosConsumidos.push(comida);
};

Dieta.prototype.calcularTotalCalorias = function () {
  return this._alimentosConsumidos.reduce(
    (acc, comida) => acc + comida.getCalorias(),
    0
  );
};

Dieta.prototype.listarAlimentosConsumidos = function () {
  return this._alimentosConsumidos
    .map(
      (comida) =>
        `Comida: ${comida.getNombre()}, Calorias: ${comida.getCalorias()}`
    )
    .join("\n");
};
