import { bdExamen } from "./assets/datos";
export class Carrito {
  constructor(){
    this._carrito = []
  }

  agregarProducto(ISBN,cantidad){
    const libroEncontrado = bdExamen.libros.find((libro) => libro.ISBN === ISBN);
    if (libroEncontrado && cantidad <= libroEncontrado.stock ) {
      this._carrito.push({
        libro: libroEncontrado,
        cantidad: cantidad,
      });
      libroEncontrado.stock -= cantidad;
    }
  }

  eliminarProducto(ISBN) {
    this._carrito = this._carrito.filter((producto) => producto.libro.ISBN !== ISBN);
  }
  agregarDescuento() {
    if (this._carrito.length > 3) {
      this._carrito.forEach((producto) => {
        producto.libro.precio *= 0.9; 
      });
    }
  }

  calcularTotalCarrito(){
    let total = 0;
    this._carrito.forEach(producto => {
      total += producto.libro.precio * producto.cantidad;
    })
    total *=1.1;
    return total;
  }

  validarCompra(){
    const venta = {
      productos: this._carrito,
      total: this.calcularTotalCarrito(),
    }
    localStorage.setItem('ventas',JSON.stringify(venta))
  }
}

