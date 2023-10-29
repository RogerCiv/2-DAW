export function Libro(titulo, autor, precio) {
  this._titulo = titulo;
  this._autor = autor;
  this._precio = precio;

  this.getTitulo = function () {
    return this._titulo;
  };
  this.setTitulo = function (titulo) {
    this._titulo = titulo;
  };
  this.getAutor = function () {
    return this._autor;
  };

  this.getPrecio = function () {
    return this._precio;
  };
}

export function Tienda() {
  this._inventario = [];

  this.agregarLibros = function (libro) {
    this._inventario.push(libro);
  };

  this.eliminarLibro = function (libro) {
    let update = this._inventario.filter(l =>  l.getTitulo() !== libro.titulo);
    this._inventario = update;
  };

  this.eliminarLibro = function (titulo) {
    const libroExiste = this._inventario.some(libro => libro.getTitulo() === titulo);
    if (libroExiste) {
      this._inventario = this._inventario.filter(libro => libro.getTitulo() !== titulo);
    } else {
      console.log(`El libro con el título "${titulo}" no se encuentra en el inventario.`);
    }
  };

  this.mostrarInformacion = function () {
    return this._inventario
      .map(
        (book) =>
          `Titulo: ${book.getTitulo()}, Autor: ${book.getAutor()} Precio: ${book.getPrecio()}`
      )
      .join("\n");
  };
}
