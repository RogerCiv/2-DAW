import { Empleado, Gerente, Desarrollador, Sistema } from "./assets/modules";

const inputNombre = document.getElementById("nombre");
const inputSalario = document.getElementById("salario");
const tipo = document.getElementById("tipo");
const especificar = document.getElementById("especificar");
const textarea = document.getElementById("textarea");
const inputTotalSalario = document.getElementById("totalSalario");

const btnEnviar = document.getElementById("btnEnviar");
const btnMostrar = document.getElementById("btnMostrar");
const btnTotalSalario = document.getElementById("btnSalarios");

const sistema = new Sistema();

let empleado;

function handlerInsertarEmpleado(e) {
  e.preventDefault();

  if (tipo.value === "gerente") {
    empleado = new Gerente(
      inputNombre.value,
      parseFloat(inputSalario.value),
      especificar.value
    );
  } else {
    empleado = new Desarrollador(
      inputNombre.value,
      parseFloat(inputSalario.value),
      especificar.value
    );
  }

  sistema.agregarEmpleado(empleado);
  console.log(sistema.mostrarInformacion());
}

function handlerShowInfo(e) {
  e.preventDefault();

  textarea.value = sistema.mostrarInformacion();
}

function handlerShowSalary(e) {
  e.preventDefault();
  inputTotalSalario.value = sistema.calcularSalarioTotal()
}

btnEnviar.addEventListener("click", handlerInsertarEmpleado);
btnMostrar.addEventListener("click", handlerShowInfo);
btnTotalSalario.addEventListener("click", handlerShowSalary);
