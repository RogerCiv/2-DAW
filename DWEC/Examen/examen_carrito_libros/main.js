import { Libro } from "./Libro";
import { Carrito } from "./Carrito";
import { bdExamen } from "./assets/datos";
import { buscarLibro, menorStock, libroMasVendido } from "./funcionalidades";
const carrito = new Carrito();



const libro = new Libro("978-0134685991","Effective Java",368,"Joshua Bloch","Addison-Wesley",["Programación, Java"],45.99,"★★★★★",10);

carrito.agregarProducto("978-0134685991",2)
carrito.agregarProducto("978-0135471944",3)

//carrito.eliminarProducto("978-0134685991")

console.log(carrito.calcularTotalCarrito());
console.log(libro)

console.log(carrito)
console.log(buscarLibro("Addison-Wesley"))
console.log(menorStock())
carrito.validarCompra()



