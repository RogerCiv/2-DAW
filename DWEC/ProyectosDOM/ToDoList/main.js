/**
 * @author: Rogelio
 */
// ----- imports
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const inputTask = document.getElementById("new-task-input");
const btnAddTask = document.querySelector(".add-task-btn");
const list = document.querySelector(".task-list-ul");

const tasks = []
