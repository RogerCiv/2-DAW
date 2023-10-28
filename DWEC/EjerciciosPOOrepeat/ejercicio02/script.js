import { Dieta, Comida } from "./assets/modules";

const comida = document.getElementById("comida");
const calorias = document.getElementById("calorias");
const textarea = document.getElementById("textarea");
const inputTotalCalorias = document.getElementById("totalCalorias");

const btnEnviar = document.getElementById("btnEnviar");
const btnMostrar = document.getElementById("btnMostrar");
const btnCalcular = document.getElementById("btnCalcular");

const dieta = new Dieta();

function handlerInsertFood(e) {
  e.preventDefault();

  const food = new Comida(comida.value, parseFloat(calorias.value));
  dieta.agregarAlimento(food);
  //console.log(dieta);
}

function handlerShowtFood(e) {
  e.preventDefault();

  textarea.value = dieta.listarAlimentosConsumidos();
}

function handlerShowCalories(e){
  e.preventDefault();
  console.log(dieta)

  inputTotalCalorias.value = dieta.calcularTotalCalorias();

}

btnEnviar.addEventListener("click", handlerInsertFood);
btnMostrar.addEventListener("click", handlerShowtFood);
btnCalcular.addEventListener("click", handlerShowCalories);
