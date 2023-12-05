/**
 * @author: Rogelio Sánchez Civantos
 * @description: Examen simulacro para carta productos
 */

import './style.css'

import { getFoodApi } from "./src/helper/getFoodApi";
import { renderOrderFood } from './src/components/renderOrderFood/renderOrderFood';
import { findFoodApi } from './src/helper/findFoodApi';


const URL = "http://localhost:4000/categories";


const cardsContainer = document.querySelector(".cards");

//const orderContainer = document.querySelector(".order");

const inputSearch = document.getElementById('search');

getFoodApi(URL,cardsContainer);




const searchButton = document.querySelector('.btn-primary');


  searchButton.addEventListener('click', () => {
    console.log(inputSearch.value);
    if(inputSearch.value === ""){
      getFoodApi(URL,cardsContainer);
    }else{
      findFoodApi(cardsContainer,inputSearch.value);
      inputSearch.value = "" 
    }
  });

  inputSearch.addEventListener("keydown", (e) => {
    if(e.key === 'Escape'){
      getFoodApi(URL,cardsContainer)
    }
  })



