import './style.css'

import { getFoodApi } from "./src/helper/getFoodApi";
import { renderOrderFood } from './src/components/renderOrderFood/renderOrderFood';
import { findFoodsApi } from './src/helper/findFoodApi';

const URL = "http://localhost:4000/categories";


const cardsContainer = document.querySelector(".cards");

const orderContainer = document.querySelector(".order");

getFoodApi(URL,cardsContainer);

findFoodsApi(query)



