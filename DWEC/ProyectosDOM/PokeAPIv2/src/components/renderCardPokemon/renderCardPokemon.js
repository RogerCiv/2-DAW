import './renderCardPokemon.css'
export function renderCardPokemon(container, pokemon) {
    
  let tipos = pokemon.types.map((type) => `<p class="${type} tipo">${type}</p>`);
  tipos = tipos.join('');
  container.innerHTML += `
   <div class="card front" style="width: 18rem;" data-pokemon-name="${pokemon.name}" >
   <img src="${pokemon.img.front_default}" class="card-img-top" alt=" Imagen de ${pokemon.name}">
   <div class="card-body">
     <h5 class="card-title">${pokemon.name}</h5>
     <p class="card-text">${tipos} </p>
   </div>
 </div>`;
 
}
