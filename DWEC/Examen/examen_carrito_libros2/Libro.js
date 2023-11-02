export function Libro(
  ISBN,
  titulo,
  numeroPaginas,
  autor,
  editorial,
  tags,
  precio,
  valoracion,
  stock
) {
  this._ISBN = ISBN;
  this._titulo = titulo;
  this._numeroPaginas = numeroPaginas;
  this._autor = autor;
  this._editorial = editorial;
  this._tags = tags;
  this._precio = precio;
  this._valoracion = valoracion;
  this._stock = stock;

  this.modificarPrecio = function (nuevoPrecio) {
    nuevoPrecio >= 0
      ? (this._precio = nuevoPrecio)
      : "No puede ser negativo el precio";
  };

  this.modoficarValoracion = function (nuevaValoracion) {
    nuevaValoracion.length >= 1 && nuevaValoracion.length <= 5
      ? (this._valoracion = nuevaValoracion)
      : "La valoracion tiene que estar entre 1 y 5 estrellas";
  };

  this.modificarStock = function (nuevoStock) {
    nuevoStock >= 0
      ? (this._stock = nuevoStock)
      : "Stock debe ser mayor o igual que 0";
  };

  this.addTags = function (nuevosTags) {
    for (let tag of nuevosTags) {
      if (!this._tags.include(tag)) {
        this._tags = tag;
      }
    }
  };
}
