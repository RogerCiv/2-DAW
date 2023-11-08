import { createNewTask } from '../main.js'

export function saveTaskToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadTasksFromLocalSTorgae(key) {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem(key));
  if (tasksFromLocalStorage) {
    tasksFromLocalStorage.forEach((task) => {
      const newTask = createNewTask(task.title, task.isCompleted);
      app.tasks.push(newTask);
      addTaskToList(newTask, app.taskslistUl);
    });
  }

  //saveTaskToLocalStorage("tasks",app.tasks);
}