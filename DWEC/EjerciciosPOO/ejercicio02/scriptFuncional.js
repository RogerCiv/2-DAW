/**
 * @author: Rogelio Sánchez
 * @description: Crea una aplicación web para calcular las calorías consumidas en una dieta .Crea una
clase Comida con un constructor que tome dos parámetros: nombre y calorias.
Esta clase debe tener un método calcularCalorias que retorne la cantidad de calorías.
Crea una clase Dieta con un constructor que inicialice un arreglo llamado
alimentosConsumidos.

Agrega un método llamado agregarAlimento a la clase Dieta, que permita agregar un objeto de
tipo Comida al arreglo alimentosConsumidos.

Implementa un método llamado calcularTotalCalorias en la clase Dieta que calcule el total de
calorías consumidas sumando las calorías de todos los alimentos en el arreglo.

Crea un método listarAlimentosConsumidos en la clase Dieta que muestre en la consola el
nombre y la cantidad de calorías de cada alimento consumido.

Crea instancias de la clase Dieta y de la clase Comida, agrega alimentos a la dieta y muestra la
lista de alimentos consumidos junto con el total de calorías en la consola.

 */
// --------------------- IMPORTS ----------------------------------

import { ComidaFuncional,  DietaFuncional } from './assets/modules.js';
// Importar Bootstrap. Previamente se instala con "npm i bootstrap@5.3.2"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



const form = document.getElementById('form');
const inputAlimento = document.getElementById('alimento');
const inputCalorias = document.getElementById('calorias');
const btnSave = document.getElementById('guardar');
const messageError = document.getElementById('messageError');
const messageSuccess = document.getElementById('messageSuccess');

// Elementos para mostrar la lista de alimentos y el total de calorías
const textarea = document.getElementById('textarea');
const inputTotalCalorias = document.getElementById('mostrarTotalCalorias');

const btnReload = document.getElementById('reload');
const btnTotalCalorias = document.getElementById('totalCalorias');

// Inicializar la lista de alimentos consumidos
let newFood  ;
let miDieta = new DietaFuncional();

function messageTimeOut(messageType, time) {
  messageType.style.display = "block";

  setTimeout(() => {
    messageType.style.display = "none";
  }, time);
}

function handlerInsertFood(e) {
  e.preventDefault();

  if (inputAlimento.value === "" || inputCalorias.value === "") {
    messageTimeOut(messageError, 5000);
    return;
  }
  if (isNaN(inputCalorias.value) || inputCalorias.value < 0) {
    messageError.textContent = "Introduce una cantidad correcta, mayor o igual a 0";
    messageTimeOut(messageError, 5000);
    return;
  }

   newFood = new ComidaFuncional();
  newFood.nombre = inputAlimento.value;
  newFood.calorias = parseFloat(inputCalorias.value);
  console.log(newFood)

  console.log(miDieta)
  // Inicializar la dieta antes de agregar el alimento

  miDieta.agregarAlimento(newFood);

  // Limpiar los campos del formulario
  inputAlimento.value = "";
  inputCalorias.value = "";

  // Mostrar la lista de alimentos consumidos

}


function handlerLoadTextArea(e) {
  e.preventDefault();

  if(miDieta.listarAlimentosConsumidos().length <= 0){
    textarea.textContent = "No hay Dieta";
  }else{

    textarea.value = miDieta.listarAlimentosConsumidos().join("\n")
  }

}

function handlerShowTotalCalorias(e) {
  e.preventDefault();
  inputTotalCalorias.value = miDieta.calcularTotalCalorias();
}





function init() {
  btnSave.addEventListener("click", handlerInsertFood);
  btnReload.addEventListener("click", handlerLoadTextArea);
  btnTotalCalorias.addEventListener("click", handlerShowTotalCalorias);

}
// -------- Inicio de la aplicación ---------------
// Inicio de la aplicación cuando el DOM se ha cargado completamente
document.addEventListener("DOMContentLoaded", init);