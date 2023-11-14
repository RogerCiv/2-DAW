import pintarCallback from "./component/pintarCallback";
import "./style.css";

const divApp = document.getElementById("app");

function cargarImagen(url) {
  return new Promise((resolve, reject) => {
    const img = new Image(url);
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("No se pudo cargar"));
    img.src = url;
  });
}

const esPar = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num !== "number") {
        reject("No es un número.");
      } else {
        resolve(num % 2 === 0);
      }
    }, 1500);
  });

esPar("3")
  .then((resultado) => {
    console.log("Resultado: ", resultado);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
