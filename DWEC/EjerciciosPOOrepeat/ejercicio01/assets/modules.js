export class Libro {
  constructor(titulo, autor, precio) {
    this._titulo = titulo;
    this._autor = autor;
    this._precio = precio;
  }
  get titulo() {
    return this._titulo;
  }
  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }
  get autor() {
    return this._autor;
  }
  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
  get precio() {
    return this._precio;
  }
  set precio(nuevoPrecio) {
    this._precio = nuevoPrecio;
  }
}

export class Tienda {
  constructor() {
    this._inventario = [];
  }

  get inventario() {
    return this._inventario;
  }

  agregarLibro(libro) {
    this.inventario.push(libro);
  }

  eliminarLibro(titulo){
    const nuevosLibros = this.inventario = this.inventario.filter(libro => libro.titulo !== titulo);
    this._inventario = nuevosLibros;
  }
  calcularPrecioTotal(){
    return this.inventario.reduce((acc, libro) => acc + libro.precio ,0);
  }
  infolibros(){
    if (this.inventario.length === 0) {
      return 'No hay libros en el inventario.';
    }
    return this.inventario.map( libro => `Titulo: ${libro.titulo} Autor: ${libro.autor} Precio: ${libro.precio}` ).join('\n');
  }
}


export function backup(nombre,arr){
  return localStorage.setItem(nombre,JSON.stringify(arr));
}

export function load(nombre) {
  let arr = [];
  
  if (localStorage.getItem(nombre)) {
    let temp = JSON.parse(localStorage.getItem(nombre));
    
    if(Array.isArray(temp)){
      arr = temp;
    }
  }
  
  // Convierte los objetos del almacenamiento local en instancias de Libro
  return arr.map(obj => new Libro(obj._titulo, obj._autor, obj._precio));
}
