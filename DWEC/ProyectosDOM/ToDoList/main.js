/**
 * @author: Rogelio
 */
// ----- imports
import "/styles.css";
import { v4 as uuidv4 } from "uuid";
import autoAnimate from "@formkit/auto-animate";
import crearGrafico from "./components/chart";
import { messageTimeOut } from "./components/errores";

// Captura Componentes html

const newTaskInput = document.getElementById("new-task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskslistUl = document.querySelector(".tasks-list-ul");
const showChartBtn = document.querySelector(".mostrar-grafico-link");
const messageError = document.querySelector(".message-error");
// Animaciones auto-animate

autoAnimate(taskslistUl);

// ----- Estado de la aplicacion -----
const tasks = [];

// app es el objeto que almacena el estado de mi aplicacion.
/*
const app = {
  tasks: tasks,
  newTaskInput: newTaskInput,
  tasksListUl: tasksListUl,
}
*/
const app = {
  tasks,
  newTaskInput,
  taskslistUl,
};

// funcion para crear una tarea
function createNewTask(title, isCompleted = false) {
  return {
    id: uuidv4().toString(),
    title,
    isCompleted,
  };
}

//funcion que añade un element <li> al <ul> generando un hijo nuevo.
function addTaskToList(task, tasksListUl) {
  // aqui mando a llamar a la funcioon que cree la tarea en html.
  /*
  const data = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(data.map(task => task.title).includes(task.title));
  //console.log(task);

  let encontrado = data.map(task => task.title).includes(task.title)
  if(!encontrado){
    const taskElement = createTaskElement(task);
    tasksListUl.appendChild(taskElement);
  }else{
    messageTimeOut(messageError,3000);
  }*/
  const taskElement = createTaskElement(task);
    tasksListUl.appendChild(taskElement);

  

  //insertar en el  localstorage
  saveTaskToLocalStorage("tasks", app.tasks);
}

// creacion de los elementos en HTML de la tarea

// funcion que genera el codigo <li> para insertarlo en el UL
function createTaskElement(task) {
  const taskElementLi = document.createElement("li");

  const taskCheckBox = document.createElement("input");
  taskCheckBox.type = "checkbox";
  taskCheckBox.checked = task.isCompleted;

  const taskTitleElement = document.createElement("span");
  taskTitleElement.textContent = task.title;
  // aquí pondria cambiar el color del texto si pulso el check
  taskTitleElement.classList.toggle("completed", task.isCompleted);

  const taskEditBtn = document.createElement("button");
  taskEditBtn.textContent = "Editar Tarea";
  taskEditBtn.className = "edit-buton";

  taskEditBtn.addEventListener("click", () => {
    const inputEditTitle = document.createElement("input");
    console.log("Hola");
  });

  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.textContent = "Eliminar Tarea";
  taskDeleteBtn.className = "delete-buton";
  // aqui programar el eliminar y el check del checkBox
  taskDeleteBtn.addEventListener("click", () => {
    const taskIndex = app.tasks.indexOf(task);
    if (taskIndex !== -1) {
      app.tasks.splice(taskIndex, 1);
      taskElementLi.remove();
      saveTaskToLocalStorage("tasks", app.tasks);
    }
  });
  taskCheckBox.addEventListener("change", () => {
    task.isCompleted ? (task.isCompleted = false) : (task.isCompleted = true);
    taskTitleElement.classList.toggle("completed", task.isCompleted);
    saveTaskToLocalStorage("tasks", app.tasks);
  });
  // Append child elements to taskElement
  taskElementLi.appendChild(taskCheckBox);
  taskElementLi.appendChild(taskTitleElement);
  taskElementLi.appendChild(taskEditBtn);
  taskElementLi.appendChild(taskDeleteBtn);

  return taskElementLi;
}

function addTask() {
  const newTaskTitle = app.newTaskInput.value;
  if (newTaskTitle) {
    const newTask = createNewTask(newTaskTitle);
    app.tasks.push(newTask);
    addTaskToList(newTask, app.taskslistUl);
    app.newTaskInput.value = "";
  }
}
function saveTaskToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadTasksFromLocalSTorgae(key) {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem(key));
  if (tasksFromLocalStorage) {
    tasksFromLocalStorage.forEach((task) => {
      const newTask = createNewTask(task.title, task.isCompleted);
      app.tasks.push(newTask);
      addTaskToList(newTask, app.taskslistUl);
    });
  }
}

// Grafico

// EVENTOS

addTaskBtn.addEventListener("click", addTask);

newTaskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

showChartBtn.addEventListener("click", (e) => {
  e.preventDefault();

  crearGrafico(".grafico-container", app);
});

function init() {
  // Load del LocalSTorage
  loadTasksFromLocalSTorgae("tasks");
}

// Inicio de la aplicacion

document.addEventListener("DOMContentLoaded", init);

/**
 * Doble click automaticamente me generara un pdf con la tarea.
 * Dos botones a la derecha, editar y eliminar.
 *Añadir un boton de exportar tareas que genere un pdf con todas las tareas.
 * Boton de buscar una tarea en concreto.
 *
 * (X) CREAR UN MODULO errores.js que le pase como parametro el texto que quiero mostrar y como segundo parametro el elemento del DOM donde lo quiero mostrar, de tal forma que cuando inserte una tarea cuyo nombre(title) ya exista mostrara un error debajo del input cuya duracion sea de 3 segundos
 *
 *  
 *
 * DOble click sobre el title de una tarea me lanzara un prompt con el contenido de esa tarea, pudiendo modificar solo el texto
 *
 * Añadir un boton al lado de eliminar tarea, imprimir tarea, que impria en un PDF los siguientes datos:
 * 1- Texto tarea
 * 2- Id Tarea
 * 3- SI esta completada o no
 * 4- Fecha actual en la que se imprimie
 *
 * Utilizando Bob descargar el pdf a nuestro PC con el nombre que sea las Cuatro primeras letras de tu texto de la tarea_dia_mes_año.pdf
 *
 * Pulsando el boton de la lupa, e introduciendo cualquier texto, al lanzar el evento del enter me filtrará todas aquellas tareas que contengan en su title el texto introducido.
 *
 * Crear un boton al lado de mostrar grafico llamado, Generar Evento Calendario, de tipo ICS  que genere  un evento del calendario cuya fecha de inicio sea la actual  y cuya fecha de finalizacion sea justamente 30 dias despues y cuyo contenido sea el numero de tareas que tengo sin realizar.
 *
 */
