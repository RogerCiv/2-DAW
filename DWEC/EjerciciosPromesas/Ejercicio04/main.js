import "./style.css";

const app = document.getElementById("app");

function paso1() {
  return new Promise((resolve) => {
    const span = document.createElement("span");
    // span.textContent = "Span creado";
    app.appendChild(span);

    setTimeout(() => {
      resolve(span);
    }, 1000);
  });
}

function paso2(span) {
  return new Promise((resolve) => {
    span.style.color = "red";

    setTimeout(() => {
      resolve(span);
    }, 1000);
  });
}

function paso3(span) {
  return new Promise((resolve) => {
    span.textContent = "Hola Mundo!";

    setTimeout(() => {
      resolve(span);
    }, 1000);
  });
}

paso1()
  .then((result1) => paso2(result1))
  .then((result2) => paso3(result2))
  .catch((error) => console.error(error));
