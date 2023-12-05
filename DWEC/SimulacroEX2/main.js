import './style.css'

import { getFoodApi } from "./src/helper/getFoodApi";
import { renderOrderFood } from './src/components/renderOrderFood/renderOrderFood';

const URL = "http://localhost:4000/categories";


const cardsContainer = document.querySelector(".cards");

const orderContainer = document.querySelector(".order");
/*
fetch(URL)
  .then((resp) => {
    if (!resp.ok) {
      throw new Error("Could not found Food");
    }
    return resp.json();
  })
  .then((data) => {
    //console.log(data);
    data.map((food) => getFoodApi(cardsContainer,food));
  })
  .catch((err) => console.log("Error", err.message));
*/
getFoodApi(URL,cardsContainer);

/*
cardsContainer.addEventListener("click", (e) => {
  console.log(e.target);
  //console.log(e.target.textContent);
  if(e.target.textContent === "Añadir"){

    console.log("Añadir");
  
    renderOrderFood(orderContainer)

  }
})
*/



