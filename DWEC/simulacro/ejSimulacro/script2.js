import { Paquete, Tipo, } from "./assets/modules";

const paquete1 = new Tipo("Calle Falsa", 20);
const paquete2 = new Tipo("Calle Verdadrea", 15);
const paquete3 = new Tipo("Calle Polopo", 50);
const paquete4 = new Tipo("Calle LALALA", 2);

let paquetes = []

//paquetes.push
paquete1.setPaquetes(paquetes,paquete1)
paquete2.obtenerInformacion()
paquete2.calcularTarifa();
paquete2.setPaquetes(paquetes,paquete2)
paquete3.setPaquetes(paquetes,paquete3)
paquete4.setPaquetes(paquetes,paquete4)

console.log(paquete1.obtenerInformacion());
console.log(paquete1.calcularTarifa());
console.log(paquete1.calcularTarifa());
