import { Desarrollador } from "./Desarrollador";
import { Empleado } from "./Empleado";
import { Empresa } from "./Empresa";
import { Gerente } from "./Gerente";

const gerente = new Gerente("Pepinho",2000,"Ventas");
const desarrollador = new Desarrollador("Abelinho",3000,"Python");

const empresa = new Empresa();
empresa.agregarEmpleados(gerente)
empresa.agregarEmpleados(desarrollador)
console.log(gerente.getInformacion());
console.log(desarrollador.getInformacion());

console.log(empresa.mostrarInfoEmpleados());