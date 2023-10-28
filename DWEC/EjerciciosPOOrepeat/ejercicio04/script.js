import { Calculadora } from "./assets/modules";

const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputResultado = document.getElementById("resultado");

const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const btnPotencia = document.getElementById("btnPotencia");
const btnRaiz = document.getElementById("btnRaiz");

const calculadora = Object.create(Calculadora);

function handlerSumar(e) {
  e.preventDefault();
  inputResultado.value = calculadora.suma(
    parseFloat(inputNum1.value),
    parseFloat(inputNum2.value)
  );
}

function handlerRestar(e) {
  e.preventDefault();
  inputResultado.value = calculadora.resta(
    parseFloat(inputNum1.value),
    parseFloat(inputNum2.value)
  );
}

function handlerMultiplicar(e) {
  e.preventDefault();
  inputResultado.value = calculadora.multiplicacion(
    parseFloat(inputNum1.value),
    parseFloat(inputNum2.value)
  );
}

function handlerDividir(e) {
  e.preventDefault();
  inputResultado.value = calculadora.division(
    parseFloat(inputNum1.value),
    parseFloat(inputNum2.value)
  );
}

function handlerPotencia(e) {
  e.preventDefault();
  inputResultado.value = calculadora.potencia(
    parseFloat(inputNum1.value),
    parseFloat(inputNum2.value)
  );
}

function handlerRaiz(e) {
  e.preventDefault();
  inputResultado.value = calculadora.raizCuadrada(parseInt(inputNum1.value));
}

btnSumar.addEventListener("click", handlerSumar);
btnRestar.addEventListener("click", handlerRestar);
btnMultiplicar.addEventListener("click", handlerMultiplicar);
btnDividir.addEventListener("click", handlerDividir);
btnPotencia.addEventListener("click", handlerPotencia);
btnRaiz.addEventListener("click", handlerRaiz);
