import { navTypeList } from "./src/components/navTypeList/navTypeList";
import { renderBackCardPokemon } from "./src/components/renderBackCardPokemon/renderBackCardPokemon";
import { renderCardPokemon } from "./src/components/renderCardPokemon/renderCardPokemon";
import "./style.css";

const URL = "http://localhost:4000/pokeData";
const app = document.getElementById("app");

fetch(URL)
  .then((resp) => {
    if (!resp.ok) {
      throw new Error("Could not found Pokemon");
    }
    return resp.json();
  })
  .then((data) => {
    const navComponent = navTypeList(data,app);
    app.appendChild(navComponent);
    //console.log(data);
    data.map((pokemon) => renderCardPokemon(app, pokemon));
    const cardItems = document.querySelectorAll(".card");
    cardItems.forEach((cardItem) => {
      cardItem.addEventListener("click", (e) => flipCard(e, data));
    });
  })
  .catch((err) => console.log("Error", err.message));


function flipCard(e, pokemonData) {
  const cardItem = e.currentTarget;
  console.log("Carta clicada:", cardItem);

  const pokemonName = cardItem.getAttribute("data-pokemon-name");
  const pokemon = pokemonData.find((p) => p.name === pokemonName);

  // Alternar clases en lugar de manipular directamente el HTML
  cardItem.classList.toggle("front");
  cardItem.classList.toggle("back");

  // Limpia el contenido antes de agregar la nueva carta
  cardItem.innerHTML = "";

  if (cardItem.classList.contains("front")) {
    console.log("Parte delantera");
    renderCardPokemon(cardItem, pokemon);
  } else {
    console.log("Parte trasera");
    renderBackCardPokemon(cardItem, pokemon);
  }
}




