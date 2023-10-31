import { bdExamen } from "./assets/datos";
export class Carrito {
  constructor(){
    this.productos = []
  }

  agregarProducto(ISBN,cantidad){
    const libroEncontrado = bdExamen.libros.find((libro) => libro.ISBN === ISBN);
    if (libroEncontrado && libroEncontrado.stock >= cantidad) {
      this.productos.push({
        libro: libroEncontrado,
        cantidad: cantidad,
      });
      libroEncontrado.stock -= cantidad;
    }
  }

  eliminarProducto(ISBN) {
    this.productos = this.productos.filter((producto) => producto.libro.ISBN !== ISBN);
  }

  agregarDescuento() {
    if (this.productos.length > 3) {
      this.productos.forEach((producto) => {
        producto.libro.precio *= 0.9; 
      });
    }
  }

  calcularTotalCarrito(){
    let total = 0;
    this.productos.forEach(producto => {
      total += producto.libro.precio * producto.cantidad;
    })
    total *=1.1;
    return total;
  }

  validarCompra(){
    const venta = {
      productos: this.productos,
      total: this.calcularTotalCarrito(),
    }
    localStorage.setItem('ventas',JSON.stringify(venta))
  }
}

