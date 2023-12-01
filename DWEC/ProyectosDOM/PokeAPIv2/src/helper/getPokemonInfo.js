import fetch from "node-fetch";
import fs from "fs/promises";

const apiURL = "https://pokeapi.co/api/v2/pokemon/";
//const apiURL = "https://pokeapi.co/api/v2/pokemon/?limit=1292";
const filePath = "./server/db.json";

async function getPokemonInfo() {
  //Accederá a PokeAPI, me traeré los pokemons (20)   y guardaré la información en server/db.json
  try {
    // Voy a realizar una petición a pokeapi
    const response = await fetch(apiURL);
    const data = await response.json();

    const { results } = data;

    //const pokeData = [];

    const pokeData = await Promise.all(
      results.map(async (poke) => {
        const pokeInfo = await (await fetch(poke.url)).json();
        return {
          id: pokeInfo.id,
          name: poke.name,
          url: poke.url,
          img: {
            back_default: pokeInfo.sprites.back_default,
            front_default: pokeInfo.sprites.front_default,
          },
          types: pokeInfo.types.map(type => type.type.name),
          abilities: pokeInfo.abilities.map((ability) => ability.ability.name),
        };
      })
    );

    await fs.writeFile(filePath, JSON.stringify({ pokeData }, null, 2));
  } catch (err) {
    console.log("Error en acceso a api", err.message);
  }
}
getPokemonInfo();
