import './renderBackCardPokemon.css'
export function renderBackCardPokemon(container, pokemon) {
  let abilities = pokemon.abilities.map(
    (ability) => `<p class="${ability} ability">${ability}</p>`
  );
  abilities = abilities.join("");
  container.innerHTML = `
    <div class="card back" style="width: 18rem;">
    <img src="${pokemon.img.back_default}" class="card-img-top" alt=" Imagen de ${pokemon.name}">
    <div class="card-body">
      <h5 class="card-title">${pokemon.name}</h5>
      <p class="card-abilities">${abilities} </p>
    </div>
  </div>`;
}
