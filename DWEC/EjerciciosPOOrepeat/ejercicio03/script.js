import { Vehiculo, Coche, Moto } from "./assets/modules";

const inputMarca = document.getElementById("marca");
const inputModelo = document.getElementById("modelo");
const inputYear = document.getElementById("year");
const textarea = document.getElementById("textarea");
const selectTipo = document.getElementById("tipo");

const btnEnviar = document.getElementById("btnEnviar");

const btnArrancar = document.getElementById("arrancar");
const btnAcelerar = document.getElementById("acelerar");
const btnFrenar = document.getElementById("frenar");

//const vehiculo = new Vehiculo();

let vehiculo;
function handlerInsertVehicle(e) {
  e.preventDefault();

  if (selectTipo.value === "moto") {
    vehiculo = new Moto(
      inputMarca.value,
      inputModelo.value,
      parseFloat(inputYear.value)
    );
  } else {
    vehiculo = new Coche(
      inputMarca.value,
      inputModelo.value,
      parseFloat(inputYear.value)
    );
  }


}

function handlerArrancar(e) {
  e.preventDefault();
  textarea.value = vehiculo.arrancar();
}

function handlerAcelerar(e){
  e.preventDefault()
  textarea.value = vehiculo.acelerar();
}

function handlerFrenar(e){
  e.preventDefault()
  textarea.value = vehiculo.frenar();
}

btnEnviar.addEventListener("click", handlerInsertVehicle);
btnArrancar.addEventListener("click", handlerArrancar);
btnAcelerar.addEventListener("click", handlerAcelerar);
btnFrenar.addEventListener("click", handlerFrenar);
