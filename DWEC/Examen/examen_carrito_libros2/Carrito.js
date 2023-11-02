import { bdExamen } from "./assets/datos";

export class Carrito {
  constructor() {
    this._carrito = [];
  }

  agregarProducto(ISBN, cantidad) {
    let encontrado = bdExamen.find((libro) => libro.ISBN === ISBN);

    if (encontrado && cantidad <= encontrado.stock) {
      this._carrito.push({
        libro: encontrado,
        cantidad: cantidad,
      });
      encontrado.stock -= cantidad;
    }
  }

  eliminarProducto(ISBN) {
    this._carrito = this._carrito.filter(
      (producto) => producto.libro.ISBN !== ISBN
    );
  }

  agregarDescuento() {
    if (this._carrito.length > 3) {
      this._carrito.forEach((producto) => {
        producto.libro.precio *= 0.9;
      });
    }
  }

  calcularTotalCarrito() {
    let total = 0;
    this._carrito.forEach((producto) => {
      total = producto.libro.precio * producto.cantidad;
    });
    total *= 1.1;
    return total;
  }

  validarCompra() {
    const data = {
      libro: this._carrito,
      total: this.calcularTotalCarrito(),
    };
    localStorage.setItem("Ventas", JSON.stringify(data));
  }
}
