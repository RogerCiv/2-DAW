import { Libro } from "./Libro";
import { Carrito } from "./Carrito";
import { bdExamen } from "./assets/datos";
import { buscarLibro, menorStock, libroMasVendido } from "./funcionalidades";
const carrito = new Carrito();


carrito.agregarProducto("978-0134685991",2)
carrito.agregarProducto("978-0135471944",3)
carrito.agregarProducto("978-1449337711",2)
carrito.agregarProducto("978-1492040736",5)

carrito.agregarDescuento()

//carrito.eliminarProducto("978-0134685991")

console.log(carrito.calcularTotalCarrito());


console.log(carrito)
console.log(buscarLibro("Addison-Wesley"))
console.log(menorStock())
carrito.validarCompra()



