// Importa los objetos desde modules.js
import { CocheFuncional, MotoFuncional } from "./assets/modules";


const textareaCoche = document.getElementById('textareaCoche');
const textareaMoto = document.getElementById('textareaMoto');


// Buttons
// --- Coche
const btnArrancarCoche = document.getElementById('arrancarCoche');
const btnAcelerarCoche = document.getElementById('acelerarCoche');
const btnFrenarCoche = document.getElementById('frenarCoche');

// ---- Moto
const btnArrancarMoto = document.getElementById('arrancarMoto');
const btnAcelerarMoto = document.getElementById('acelerarMoto');
const btnFrenarMoto = document.getElementById('frenarMoto');

let coche;
let moto ;

function crearVehiculos(){
   coche = new CocheFuncional("Toyota","Corolla",1999)
   moto = new MotoFuncional("Honda","HondaModelo",2005);
}

function handlerArrancarCoche(e){
  e.preventDefault();
 textareaCoche.value =  coche.arrancar();
}

function handlerAcelerarCoche(){
 textareaCoche.value = coche.acelerar();
}


function handlerFrenarCoche(){
  textareaCoche.value = coche.frenar();
}

function handlerArrancarMoto(){
  textareaMoto.value = moto.arrancar();
}

function handlerAcelerarMoto(){
  textareaMoto.value = moto.acelerar(); 
}

function handlerFrenarMoto(){
  textareaMoto.value = moto.frenar();
}



function init() {
  crearVehiculos(); 
  btnArrancarCoche.addEventListener("click", handlerArrancarCoche);
  btnAcelerarCoche.addEventListener('click', handlerAcelerarCoche)
  btnFrenarCoche.addEventListener('click', handlerFrenarCoche );

  btnArrancarMoto.addEventListener("click", handlerArrancarMoto);
  btnAcelerarMoto.addEventListener("click", handlerAcelerarMoto);
  btnFrenarMoto.addEventListener("click", handlerFrenarMoto);
  
}
// -------- Inicio de la aplicación ---------------
// Inicio de la aplicación cuando el DOM se ha cargado completamente
document.addEventListener("DOMContentLoaded", init);