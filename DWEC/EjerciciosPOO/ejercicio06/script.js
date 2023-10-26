/**
 * @author: Rogelio Sánchez
 * @description: Enunciado: Crea un sistema de gestión de empleados en JavaScript que incluye las siguientes clases:
Empleado, Gerente, Desarrollador. Cada clase debe heredar de la clase Empleado y debe tener
propiedades específicas de acuerdo a su rol. El sistema debe permitir agregar empleados, calcular los
salarios totales y mostrar la información de cada empleado.
 */
import { Empleado, Gerente, Desarrollador, SistemaEmpleados } from './assets/modules.js';


const nombre = document.getElementById('nombre');
const salario = document.getElementById('salario');
const tipo = document.getElementById('tipo');
const departamento = document.getElementById('departamento');
const lenguaje = document.getElementById('lenguaje');
const mostrarTotalSalarios = document.getElementById('mostrarTotalSalarios');
const mostrarEmpleados = document.getElementById('mostrarEmpleados');

const btnAgregar = document.getElementById('agregar');
const btnTotalSalarios = document.getElementById('btnTotalSalarios');
const btnMostrarEmpleados = document.getElementById('btnMostrarEmpleados');

const sistema = new SistemaEmpleados();
/*
const manolico = new Empleado("Manolico", 2000);
const pepito = new Gerente("Pepito", 4000, "ventas");
const fulanico = new Empleado("Fulanico", 10000);

console.log(pepito)
console.log(manolico.getInformacion());
sistema.agregarEmpleados(manolico);
sistema.agregarEmpleados(pepito);
sistema.agregarEmpleados(fulanico);
console.log(sistema.calcularSalarioTotal());
*/

function creacionEmpleado(){
  let empleado;
 
  if(tipo.value === 'gerente'){
    empleado = new Gerente(nombre.value,parseFloat(salario.value),departamento.value);
  }else if(tipo.value === 'desarrollador'){
    empleado = new Desarrollador(nombre.value,parseFloat(salario.value),lenguaje.value);
  }else{
    empleado = new Empleado(nombre.value,parseFloat(salario.value))
  }
  return empleado;
  
}


function handlerAgregarEmpleado(e){
  e.preventDefault();
  let empleado =  creacionEmpleado();
  console.log(empleado)
  sistema.agregarEmpleados(empleado);
}

function handlerTotalSalarios(e){
  e.preventDefault();
  mostrarTotalSalarios.value = sistema.calcularSalarioTotal();
}

function handlerMostrarEmpleados(e){
  e.preventDefault();
  mostrarEmpleados.value = sistema.mostrarInformacionEmpleados(); 
}

function init(){
  btnAgregar.addEventListener('click', handlerAgregarEmpleado)
  btnTotalSalarios.addEventListener('click', handlerTotalSalarios);
  btnMostrarEmpleados.addEventListener('click', handlerMostrarEmpleados);
}

document.addEventListener('DOMContentLoaded',init)