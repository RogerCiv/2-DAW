import { renderCardPokemon } from './src/components/renderCardPokemon/renderCardPokemon'
import './style.css'

const URL = "http://localhost:4000/pokeData";
const app = document.getElementById("app")

fetch(URL)
.then(resp => {
  if(!resp.ok){
    throw new Error ("Could not found Pokemon");
  }
  return resp.json()
})
.then(data => {
  //console.log(data);
  data.map(pokemon => renderCardPokemon(app,pokemon))
})
.catch(err => console.log("Error",err.message))

