

import { Paquete , Tipo } from './modules.js';

let paquetes = []

const paquete = new Tipo("Calle falsa 123",20)
const paquete2 = new Tipo("Calle Verdadera 123",50)
//paquetes.push
paquete.setPaquetes(paquetes,paquete)
paquete2.obtenerInformacion()
paquete2.calcularTarifa();
paquete2.setPaquetes(paquetes,paquete2)

console.log(paquete.obtenerInformacion());
console.log(paquete.calcularTarifa());


