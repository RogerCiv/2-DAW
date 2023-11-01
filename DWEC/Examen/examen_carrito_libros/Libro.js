export function Libro(ISBN, titulo, numeroDePaginas, autor, editorial, tags, precio, valoracion, stock) {
  this._ISBN = ISBN;
  this._titulo = titulo;
  this._numeroDePaginas = numeroDePaginas;
  this._autor = autor;
  this._editorial = editorial;
  this._tags = tags;
  this._precio = precio;
  this._valoracion = valoracion;
  this._stock = stock;

  this.modificarPrecio = function  (nuevoPrecio) {
    if (nuevoPrecio >= 0) {
      this._precio = nuevoPrecio;
    }
  }
  this.modificarValoracion = function (nuevaValoracion){
    if (nuevaValoracion.length >= 1 && nuevaValoracion.length <= 5) {
      this._valoracion = nuevaValoracion;
    }
  }

  this.modificarStock = function (nuevoStock){
    if (nuevoStock >= 0) {
      this._stock = nuevoStock;
    }
  }
  this.addTags = function (...nuevosTags) { 
    for (let tag of nuevosTags) {
      if (!this.tags.includes(tag)) {
        this._tags.push(tag);
      }
    }
  }
}



