import { CalculadoraLiteral } from './assets/modules.js';



const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');

const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');
const btnRaiz = document.getElementById('btnRaiz');
const btnPotencia = document.getElementById('btnPotencia');

const resultado = document.getElementById('resultado');
const btnRestablecer = document.getElementById('limpiar');



function handlerSumar(e){
  e.preventDefault();
  resultado.value = CalculadoraLiteral.suma(parseFloat(number1.value),parseFloat(number2.value));
}

function handlerRestar(e){
  e.preventDefault();
  resultado.value = CalculadoraLiteral.resta(parseFloat(number1.value),parseFloat(number2.value));
}

function handlerMultiplicar(e){
  e.preventDefault();
  resultado.value = CalculadoraLiteral.multiplicacion(parseFloat(number1.value),parseFloat(number2.value));
}

function handlerDividir(e){
  e.preventDefault();
  resultado.value = CalculadoraLiteral.division(parseFloat(number1.value),parseFloat(number2.value));
}

function handlerRaiz(e){
  e.preventDefault();
  resultado.value = CalculadoraLiteral.raizCuadrada(parseFloat(number1.value),parseFloat(number2.value));
}

function handlerPotencia(e){
  e.preventDefault();
  resultado.value = CalculadoraLiteral.potenciacion(parseFloat(number1.value),parseFloat(number2.value));
}
function handlerRestablecer(e){
  e.preventDefault();
  resultado.value = '';
}
function init() {
  btnSumar.addEventListener('click',handlerSumar);
  btnRestar.addEventListener('click',handlerRestar);
  btnDividir.addEventListener('click',handlerDividir);
  btnMultiplicar.addEventListener('click',handlerMultiplicar);
  btnRaiz.addEventListener('click',handlerRaiz);
  btnPotencia.addEventListener('click',handlerPotencia);
  btnRestablecer.addEventListener('click',handlerRestablecer);

}
// -------- Inicio de la aplicación ---------------
// Inicio de la aplicación cuando el DOM se ha cargado completamente
document.addEventListener("DOMContentLoaded", init);