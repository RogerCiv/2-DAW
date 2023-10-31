import { Libro } from "./Libro";
import { Carrito } from "./Carrito";
import { bdExamen } from "./assets/datos";
const carrito = new Carrito();



const libro = new Libro("978-0134685991","Effective Java",368,"Joshua Bloch","Addison-Wesley",["Programación, Java"],45.99,"★★★★★",10);

carrito.agregarProducto(libro)

console.log(libro)

console.log(carrito)
  
carrito.validarCompra()