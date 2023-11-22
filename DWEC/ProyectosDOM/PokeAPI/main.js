//import "./style.css";
const pokeAPI = "https://pokeapi.co/api/v2/pokemon/?limit=1292&offset=9";

const listaPokemon = document.getElementById("pokemonList");

async function fetchPokemon(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
}

async function obtenerTodosLosPokemon() {
  const response = await fetch(pokeAPI);
  const data = await response.json();
  return data.results;
}

async function obtenerPokemonAleatorio(cantidad) {
  const todosLosPokemon = await obtenerTodosLosPokemon();
  const pokemonArray = [];
  for (let i = 0; i < cantidad; i++) {
    const indiceAleatorio = Math.floor(Math.random() * todosLosPokemon.length);
    const pokemon = await fetchPokemon(todosLosPokemon[indiceAleatorio].url);
    if (!pokemonArray.some(p => p.species.name === pokemon.species.name)) {
      pokemonArray.push(pokemon);
    }
  }
  return pokemonArray;
}
// Componente para mostrar un solo Pokémon
function createTypes(types) {
  return types.map(
    (type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`
  ).join("");
}

function createAbilities(abilities) {
  return abilities.map(
    (ability) => `<p class="${ability.ability.name} ability">${ability.ability.name}</p>`
  ).join("");
}

function createPokemonId(id) {
  let pokeId = id.toString();
  if (pokeId.length === 1) {
    pokeId = `00${pokeId}`;
  } else if (pokeId.length === 2) {
    pokeId = `0${pokeId}`;
  }
  return pokeId;
}

function PokemonCard(poke) {
  const tipos = createTypes(poke.types);
  const abilities = createAbilities(poke.abilities);
  const pokeId = createPokemonId(poke.id);

  const div = document.createElement("div");
  div.classList.add("pokemon");

  div.innerHTML = `
    <p class="pokemon-id-back">#${pokeId}</p>
    <div class="pokemon-img">
      <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
    </div>
    <div class="pokemon-info">
      <div class="name-container">
        <p class="pokemon-id">#${pokeId}</p>
        <p class="pokemon-name">${poke.name}</p>
      </div>
      <div class="pokemon-tipos">
        ${tipos}
      </div>
      <div class="pokemon-stats">
        <p class="stat">${poke.height}M</p>
        <p class="stat">${poke.weight}Kg</p>
      </div>
      <div class"pokemon-abilities">
        ${abilities}
      </div>
    </div>
  `;

  return div;
}

// ...

const campoBusqueda = document.getElementById('pokemonSearch');
let timeoutId;

campoBusqueda.addEventListener('input', async () => {
  // Limpiar el timeout anterior si existe
  clearTimeout(timeoutId);

  // Establecer un nuevo timeout
  timeoutId = setTimeout(async () => {
    const nombrePokemon = campoBusqueda.value.trim().toLowerCase();
    if (nombrePokemon !== '') {
      const pokemonEncontrado = await buscarPokemon(nombrePokemon);
      if (pokemonEncontrado) {
        PokemonList([pokemonEncontrado]);
        campoBusqueda.textContent = '';
      } else {
        listaPokemon.innerHTML = '<p>No se encontraron resultados</p>';
      }
    } else {
      // Si el campo de búsqueda está vacío, mostrar Pokémon aleatorios nuevamente
      obtenerPokemonAleatorio(9).then(PokemonList);
    }
  }, 500); // Esperar 500 milisegundos (0.5 segundos) antes de realizar la búsqueda
});

// Función para buscar un Pokémon por nombre
async function buscarPokemon(nombre) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
  try {
    const pokemon = await fetchPokemon(url);
    return pokemon;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return null;
  }
}

// ...


// Componente para mostrar una lista de Pokémon
function PokemonList(pokemonArray) {
  const listaPokemon = document.getElementById("pokemonList");

  // Limpiar la lista actual antes de agregar nuevos Pokémon
  listaPokemon.innerHTML = '';

  if (pokemonArray.length > 0) {
    pokemonArray.forEach(pokemon => {
      const pokemonCard = PokemonCard(pokemon);
      listaPokemon.append(pokemonCard);
    });
  } else {
    listaPokemon.innerHTML = '<p>No se encontraron resultados</p>';
  }
}

// Ahora puedes obtener 9 Pokémon aleatorios sin conocer el máximo de antemano
setTimeout(() => {
  document.querySelector('.loader').style.display = 'none'; // oculta el loader
  document.getElementById('app').style.display = 'block'; // muestra el navbar
  // muestra los Pokémon
  obtenerPokemonAleatorio(9).then(PokemonList);
}, 3000);


