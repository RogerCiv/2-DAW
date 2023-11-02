/**
 * @author: Rogelio
 */
// ----- imports
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const inputTask = document.getElementById("new-task-input");
const btnAddTask = document.querySelector(".add-task-btn");
const list = document.querySelector(".tasks-list-ul");
const tasks = [];



function addTask(e) {
  e.preventDefault();
  const task = inputTask.value;
  const id = uuidv4();



  if (task !== "") {
    const li = document.createElement("li");
    li.innerText = task

    list.appendChild(li);
  }
  tasks.push({
    [id]: task,
  })
  localStorage.setItem("Tareas",JSON.stringify(tasks))
  inputTask.value = ''
  
console.log(tasks)
}




btnAddTask.addEventListener("click", addTask);
