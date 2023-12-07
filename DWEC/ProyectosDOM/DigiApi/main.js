import { findDigimon } from "./src/helper/findDigimon";
import { getDigimons } from "./src/helper/getDigimons";

import "./style.css";

const digiCards = document.querySelector(".cards");

const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");

const apiURL = "https://digimon-api.vercel.app/api/digimon";

getDigimons(apiURL, digiCards);


btnSearch.addEventListener("click", (e) => {
    e.preventDefault()
    findDigimon(inputSearch.value,digiCards)
})
