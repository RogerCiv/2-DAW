import { users } from "../assets/users";

export const pintarUsersJson = (element) => {
  //console.log("Estoy en pintarUsersJson");
  // element.innerHTML = fetchApiJSON();
  fetchApiJSON(userURL)
    .then((data) => {
      //console.log("DATA",data); 
    //  span.innerHTML = JSON.stringify(data.map(user => user.firstname));
      const span = document.createElement("span");
      span.style.color = "red";
      const users = data.map(user => `Nombre: ${user.firstname} Apellido:${user.lastname}`).join("\n")
      
      span.innerHTML = users
  
      
      element.appendChild(span)
    })
    .catch((error) => {
      console.error(error);
    });
};

// Crear una funcion que le pase una URL y a traves de una promesa obtenga todos los usuarios de la url JSONPlaceHolder.

const userURL = "https://jsonplaceholder.org/users";

// Funcion para realizar una peticion HTTP con fetch y promesas.

function fetchApiJSON(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch");
        }
        return resp.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        reject(error);
      });
  });
}
