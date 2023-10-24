//const horarios = document.getElementById("horarios");
/*

hoursArray.forEach((hour, index) => {
    const button = document.createElement("button");
    button.textContent = hour;
    button.value = index;
    button.addEventListener("click", selectHorarios);
    horarios.appendChild(button);
});

function selectHorarios(event) {
    const selectedButton = event.target;
    const selectedHour = selectedButton.textContent;

    // Puedes usar este valor seleccionado como necesario en tu formulario.
    document.getElementById("appointmentDate").value = selectedHour;
}
*/


/**
 * @author: Rogelio Sánchez
 * @description: Disponemos de un centro medico que permite realizar reservas para asistir a la consulta medica de un medico. Disponemos de un array que contiene las horas entre las 9:00 AM y las 15:00 PM , separadas en intervalos de 15 minutos. Disponemos de un array con 5 emoticonos (carita feliz, carita triste,bandera roja, bandera verde, bandera .naranja).
A traves de un formulario, crearemos una interfaz cuyo titulo sea COnsulta medica "DAW", dispondremos de un label que diga nombre paciente, input de nombre paciente, tendremos un label "fecha", input fecha. Generareis una matriz con botones que sean las horas de las consultas y un ENVIAR.
Automaticamente de dicho formlario se gestionaran las citas medicas, almacenando en una clave hospital, un array de Map que contenga, nombre de usuario, fecha-hora. 
No esta permitido insertar usuarios repetidos.
*/

import { Cita, Usuario } from './assets/modules.js';

// Selecciona todos los botones de hora por su id.
const form = document.getElementById('form');
const horaButtons = document.querySelectorAll('.horarios button');
const btnEnviar = document.getElementById("btnEnviar");
const hoursArray = ["09:00 AM", "09:15 AM", "09:30 AM", "09:45 AM", "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM", "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM", "01:00 PM", "01:15 PM", "01:30 PM", "01:45 PM", "02:00 PM", "02:15 PM", "02:30 PM", "02:45 PM"];
const emojiArray = ["😃", "😞", "🚩", "🟢"];
let citas = new Map();

let cita = [];


// Agrega un evento de clic a cada botón de hora.
horaButtons.forEach(button => {
    button.addEventListener('click', function() {
        const horaSeleccionada = button.id; 
        const nombrePaciente = document.getElementById('nombrePaciente').value;
        const fecha = document.getElementById('date').value;
        const horaFecha = `${fecha} ${horaSeleccionada}`;

       crearCita(nombrePaciente, horaFecha); 
    });
});

function crearCita(nombrePaciente,fecha){
    //console.log(horaFecha)
    cita = new Cita(nombrePaciente, fecha);
}


function handlerSetCita(e){
    e.preventDefault();
    console.log(cita);
    if(localStorage.getItem("hospital")){
        citas = new Map(JSON.parse(localStorage.getItem("hospital")));
    }
    
    if(citas.has(cita._usuario)){
        console.log("ya existe el usuario");
    }else{

        citas.set(cita._usuario,cita.fecha);
        console.log(citas)
        localStorage.setItem("hospital", JSON.stringify(Array.from(citas.entries())));
    }

    

}
function horasOcupadas(){
    if (localStorage.getItem("hospital")) {
        let citas = new Map(JSON.parse(localStorage.getItem("hospital")));
    
        // Recorre todos los botones de hora
        horaButtons.forEach(button => {
            // Recorre todas las citas
            for (let cita of citas.values()) {
                // Divide la fecha y hora de la cita en dos partes
                let partesCita = cita.split(" ");
                // La segunda parte es la hora
                let horaCita = partesCita[1];
    
                // Si la hora del botón coincide con la hora de la cita, añade una bandera roja al texto del botón
                if (button.id === horaCita) {
                    button.textContent += " 🚩";
                    // No necesitamos buscar más citas para este botón, así que salimos del bucle
                    break;
                }
            }
        });
    }
  
}


function init(){
 btnEnviar.addEventListener("click", handlerSetCita); 
 horasOcupadas();
}


document.addEventListener("DOMContentLoaded", init);