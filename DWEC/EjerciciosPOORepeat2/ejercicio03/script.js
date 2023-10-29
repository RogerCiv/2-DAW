import { Vehiculo, Coche, Moto, Concesionario, backup } from "./assets/modules";

const inputMarca = document.getElementById("marca");
const inputModelo = document.getElementById("modelo");
const inputYear = document.getElementById("year");

const tipo = document.getElementById("tipo");
const textarea = document.getElementById("textarea");

const btnEnviar = document.getElementById("btnEnviar");
const btnFrenar = document.getElementById("btnFrenar");
const btnAcelerar = document.getElementById("btnAcelerar");
const btnArrancar = document.getElementById("btnArrancar");

const concesionario = new Concesionario();
let vehiculo;
function insertVehicle() {}

function handlerAddVehicle(e) {
  e.preventDefault();

  if (tipo.value === "moto") {
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

  concesionario.agregarVehiculo(vehiculo);
  backup("Vehiculos",concesionario)
  console.log(concesionario)
}

function handlerAcelerar(e) {
  e.preventDefault();

  textarea.value = vehiculo.acelerar();
}

function handlerFrenar(e) {
  e.preventDefault();
  textarea.value = vehiculo.frenar();
}

function handlerArrancar(e) {
  e.preventDefault();
  textarea.value = vehiculo.arrancar();
}

btnEnviar.addEventListener("click", handlerAddVehicle);
btnAcelerar.addEventListener("click", handlerAcelerar);
btnFrenar.addEventListener("click", handlerFrenar);
btnArrancar.addEventListener("click", handlerArrancar);
