import { renderCardFoods } from "../components/renderCardFoods/renderCardFoods";


/**
 * funcion fetch para recibir los datos de. db.json
 * @param {URL} url url de la base de datos creada en json-server
 * @param {HTMLElement} container Contenedor que se le pasa al renderCardFoods para renderizar los cards
 */
export function getFoodApi(url,container){
  //const URL = "http://localhost:4000/categories";
  //const cardsContainer = document.querySelector(".cards");
  fetch(url)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Could not found Food");
      }
      return resp.json();
    })
    .then((data) => {
      //console.log(data);
      data.map((food) => {
        renderCardFoods(container,food)
       
      });
      
    })
    .catch((err) => console.log("Error", err.message));

}