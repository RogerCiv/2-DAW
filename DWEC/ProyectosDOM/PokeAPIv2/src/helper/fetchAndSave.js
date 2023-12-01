import fetch from "node-fetch";
import fs from "fs/promises";

const apiURL = "https://pokeapi.co/api/v2/pokemon/";
const filePath = "./server/db.json";

async function fetchAndSave() {
  //Accederá a PokeAPI, me traeré los pokemons (20)   y guardaré la información en server/db.json
  try {
    // Voy a realizar una petición a pokeapi
    const response = await fetch(apiURL);
    const data = await response.json();

    const { results } = data;
    //
    await fs.writeFile(filePath, JSON.stringify({ results }, null, 2));
  } catch (err) {
    console.log("Error en acceso a api", err.message);
  }
}
fetchAndSave();
