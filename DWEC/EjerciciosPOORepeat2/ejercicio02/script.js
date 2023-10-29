import { Comida, Dieta } from "./assets/modules";

const inputComida = document.getElementById("comida");
const inputCalorias = document.getElementById("calorias");
const inputTotal = document.getElementById("totalCalorias");

const textarea = document.getElementById("textarea");

const btnEnviar = document.getElementById("btnEnviar");
const btnTotal = document.getElementById("btnTotal");

const dieta = new Dieta();

function handlerInsertFood(e) {
  e.preventDefault();
  let food = new Comida(inputComida.value, parseFloat(inputCalorias.value));

  dieta.agregarAlimentos(food);

  textarea.value = dieta.listarAlimentosConsumidos();
}

function handlerShowTotal(e){
  e.preventDefault();
  inputTotal.value = dieta.calcularTotalCalorias()
}

btnEnviar.addEventListener("click", handlerInsertFood);
btnTotal.addEventListener("click", handlerShowTotal);
