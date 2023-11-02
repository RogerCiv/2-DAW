import "./style.css";

// SELECTORES del DOM

const titulo = document.getElementById("titulo");
const titulo2 = document.querySelector(".titulo-2");
let lista = document.querySelectorAll(".lista-tareas li");
const miLogo = document.querySelector("img");
const borrarDiv = document.querySelector(".eliminar-div");

console.log(lista);
titulo.innerText = "Hola Mundo";
titulo.innerHTML = "Hola <em> MUNDO </em>";

miLogo.setAttribute(
  "src",
  "https://imgs.search.brave.com/3pp0i2YaaTiCTbsv7EKSwjex27lJfcXQJ76TW-ld9fA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/dW5vY2Vyby5jb20v/MjAyMi8wNS9OZXRm/bGl4X1NvbmljLndl/YnA"
);

miLogo.classList.add("new-class");

/*
imagen.src =
  "https://imgs.search.brave.com/3pp0i2YaaTiCTbsv7EKSwjex27lJfcXQJ76TW-ld9fA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/dW5vY2Vyby5jb20v/MjAyMi8wNS9OZXRm/bGl4X1NvbmljLndl/YnA";
imagen.alt = "Imagen de sonic";
*/

//Estilos en linea
titulo.style.backgroundColor = "#63BAE2";

borrarDiv.remove()


lista.forEach(li => li.style.color = "red")