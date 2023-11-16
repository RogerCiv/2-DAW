import { drawAppWeather } from "./components/drawApp";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="card">
    <div class="search">
      <input type="text" placeholder="Enter city" spellcheck="true" />
      <button><img src="../assets/img/search.png" alt="search icon" /></button>
    </div>
    <div class="weather-container"></div>
  </div>
`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherContainer = document.querySelector(".weather-container");

const searchWeather = () => {
  // Obtén el valor del cuadro de búsqueda
  const cityName = searchBox.value;

  // Verifica si se ingresó un nombre de ciudad antes de llamar a la función drawAppWeather
  if (cityName.trim() !== "") {
    // Llama a la función drawAppWeather con el contenedor de resultados y el nombre de la ciudad
    drawAppWeather(weatherContainer, cityName);
    // Borra el contenido del cuadro de búsqueda
    searchBox.value = '';
  }
  // Si no se ingresó un nombre de ciudad, puedes mostrar un mensaje de error o manejarlo según tus necesidades.
};

// Asocia la función searchWeather al evento de clic del botón de búsqueda
searchBtn.addEventListener("click", searchWeather);

// Asocia la función searchWeather al evento de tecla "Enter" en el cuadro de búsqueda
searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchWeather();
  }
});
