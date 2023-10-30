import { Empleado, Gerente, Desarrollador, Empresa, backup } from "./assets/modules";

const inputNombre = document.getElementById("nombre");
const inputSalario = document.getElementById("salario");
const tipo = document.getElementById("tipo");
const tipoEmpleado = document.getElementById("tipoEmpleado");
const btnEnviar = document.getElementById("btnEnviar");

const textarea = document.getElementById("textarea");

let empresa = new Empresa();

function handlerEmpleado(e) {
  e.preventDefault();
  let empleado;
  if (tipo.value === "Gerente") {
    empleado = new Gerente(
      inputNombre.value,
      parseFloat(inputSalario.value),
      tipoEmpleado.value
    );
  } else {
    empleado = new Desarrollador(
      inputNombre.value,
      parseFloat(inputSalario.value),
      tipoEmpleado.value
    );
  }

  empresa.agregarEmpleados(empleado);
  console.log(empleado);
  textarea.value = empresa.infoEmpleados()
  backup("EMpleados",empresa)
}

btnEnviar.addEventListener("click", handlerEmpleado);


