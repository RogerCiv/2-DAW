/**
 * @author
 * @description: En una clinica medica, necesita getsionar las citas de los pacientes.Crear una estructura
 */


import { Cita, CitaMedica, backup } from "./modules.js";




const pepe = Object.create(Cita);
pepe.dni = "111111"
pepe.nombre = "pepe";
pepe.fecha = "30/10/2023";
pepe.hora = "10:00";

let citas = []
pepe.setInformacion(citas,pepe)
console.log(citas);
const perico = Object.create(Cita)

perico.dni = "321321"
perico.nombre = "Perico"
perico.fecha = "31/10/2023"
perico.hora = "11:00"

perico.setInformacion(citas,perico)
console.log(citas);





//cita.obtenerInformacion();
console.log(citas);
/*
function comprobarCita(cita){
    if(localStorage.getItem("Citas") === null){
        backup("Citas", cita);
    }else {
        if(localStorage.getItem("Citas").includes(cita.dni)){
            console.log("Ya existe dni");
        }else{
            citas.push(cita)
            backup("Citas", citas)
            console.log("Cita sacada");
        }
    }
}
*/





/// TESTs

console.log();