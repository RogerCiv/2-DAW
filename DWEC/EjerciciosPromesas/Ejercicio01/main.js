import "./style.css";

const container = document.querySelector(".container");

function loadAsync(src) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        container.innerHTML = "";
        container.appendChild(img);
        resolve(img);
      };

      img.onerror = () => {
        reject(new Error("Error al cargar la imagen"));
      };
    }, 2000);
  });
}

const imgURL = "./assets/img/granada.jpg";

loadAsync(imgURL)
  .then((data) => {
    console.log(" BIEN", data.src);
  })
  .catch((error) => console.error(" Error al cargar la imagen", error));
