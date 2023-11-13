/**
 * @author: Rogelio
 */
// ----- imports
import "/styles.css";
import { v4 as uuidv4 } from "uuid";
import autoAnimate from "@formkit/auto-animate";
import crearGrafico from "./components/chart";
import { messageErrorTimeOut } from "./components/errores";


import { createPDF } from "./helpers/createPDF";
import { createCalendar } from "./helpers/createCalendar";
// Captura Componentes html

const newTaskInput = document.getElementById("new-task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskslistUl = document.querySelector(".tasks-list-ul");
const showChartBtn = document.querySelector(".mostrar-grafico-link");
//const messageError = document.querySelector(".message-error");
const form = document.querySelector(".form-container")

const eventCalendar = document.querySelector(".evento-calendario");

const searchInput = document.querySelector(".search-input");

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
  /*
  const data = JSON.parse(localStorage.getItem("tasks")) || [];
  //console.log(data.map(task => task.title).includes(task.title));
  //console.log(task);
  
  let encontrado = data.map(task => task.title).includes(task.title)
  if(!encontrado){
    const taskElement = createTaskElement(task);
    tasksListUl.appendChild(taskElement);
    //app.tasks.push(task);
    //insertar en el  localstorage
    saveTaskToLocalStorage("tasks", app.tasks);
  }else{
    
    console.log("Entra aqui en encontrado")
    messageTimeOut(messageError,"Error",3000);
  }
  */
 // aqui mando a llamar a la funcioon que cree la tarea en html.
  const taskElement = createTaskElement(task);
  tasksListUl.appendChild(taskElement);
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

  taskTitleElement.addEventListener("dblclick", () => {
    const newTittle = prompt("Edita la tarea: ", task.title);
    if (newTittle !== null) {
      task.title = newTittle;
      taskTitleElement.textContent = newTittle;
      saveTaskToLocalStorage("tasks", app.tasks);
    }
  });

  const printTaskBtn = document.createElement("button");
  printTaskBtn.textContent = "Imprimir Tarea";
  printTaskBtn.className = "edit-buton";

  printTaskBtn.addEventListener("click", () => createPDF(task));

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
  taskElementLi.appendChild(printTaskBtn);
  taskElementLi.appendChild(taskDeleteBtn);

  return taskElementLi;
}

function addTask() {
  const newTaskTitle = app.newTaskInput.value;
  let encontrado = app.tasks.map((task) => task.title.toLowerCase()).includes(newTaskTitle.toLowerCase());
  if (!encontrado) {
    const newTask = createNewTask(newTaskTitle);
    app.tasks.push(newTask);
    addTaskToList(newTask, app.taskslistUl);
    app.newTaskInput.value = "";
  } else {
    messageErrorTimeOut("La tarea ya existe ", form, 3000);
   

    console.log("ya existe");
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


function searchTask(search) {
  const filterTasks = app.tasks.filter((task) =>
    task.title.toLowerCase().includes(search)
  );
  taskslistUl.innerHTML = "";
  filterTasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskslistUl.appendChild(taskElement);
  });
  searchInput.value = "";
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

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const search = searchInput.value.toLowerCase();
    searchTask(search);
  }
});

eventCalendar.addEventListener("click", createCalendar);

function init() {
  // Load del LocalSTorage
  loadTasksFromLocalSTorgae("tasks");
}

// Inicio de la aplicacion

document.addEventListener("DOMContentLoaded", init);
