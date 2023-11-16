const apiKey = "9e18e3ebb69592a6be807f1b3ac17bd1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

import { getRandomImage } from "../utils/getRandomImage";
import { weatherIcons, weatherImages } from "../utils/weatherImages";
import { fetchApiJSON } from "./api";
import { messageErrorTimeOut } from "./error";
export function drawAppWeather(element, cityName) {
  fetchApiJSON(`${apiUrl}${cityName}&appid=${apiKey}`)
    .then((data) => {
      const resultContent = createResultContent(data);
      // Borra el contenido existente del contenedor antes de agregar el nuevo resultado
      element.innerHTML = "";
      element.appendChild(resultContent);
      setWeatherBackground(data.weather[0].main);
    })
    .catch((error) => {
      console.error("Error al obtener datos:", error);
      messageErrorTimeOut("La ciudad no se ha encontrado", element, 3000);
    });
}

function createResultContent(data) {
  const resultContent = document.createElement("div");
  resultContent.appendChild(createWeatherIcon(data));
  resultContent.appendChild(createTemperature(data));
  resultContent.appendChild(createCityName(data));
  resultContent.appendChild(createDetails(data));
  return resultContent;
}

function setWeatherBackground(weatherMain) {
  const body = document.body;

  if (weatherImages.hasOwnProperty(weatherMain)) {
    const selectedImages = weatherImages[weatherMain];
    body.style.backgroundImage = `url('../assets/img/${getRandomImage(
      selectedImages
    )}')`;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.height = "100vh";
  } else {
    body.style.backgroundImage = "none";
  }
}

function createWeatherIcon(data) {
  const imgHeader = document.createElement("img");
  imgHeader.className = "weather-icon";
  const weatherMain = data.weather[0].main;
  imgHeader.src = `../assets/img/${weatherIcons[weatherMain]}`;
  return imgHeader;
}

function createTemperature(data) {
  const temp = document.createElement("h1");
  temp.className = "temp";
  temp.innerHTML = `${Math.round(data.main.temp)} °C`;
  return temp;
}

function createCityName(data) {
  const city = document.createElement("h2");
  city.className = "city";
  city.innerHTML = data.name;
  return city;
}

function createDetails(data) {
  const divDetails = document.createElement("div");
  divDetails.className = "details";

  const detailsData = [
    { icon: "max.png", value: Math.round(data.main.temp_max), label: "Máxima" },
    { icon: "min.png", value: Math.round(data.main.temp_min), label: "Mínima" },
    { icon: "humidity.png", value: `${data.main.humidity}%`, label: "Humedad" },
    { icon: "wind.png", value: `${data.wind.speed} Km/h`, label: "Viento" },
  ];

  detailsData.forEach((item) => {
    const col = createDetailsColumn(item);
    divDetails.appendChild(col);
  });

  return divDetails;
}

function createDetailsColumn(item) {
  const col = document.createElement("div");
  col.className = "col";

  const img = document.createElement("img");
  img.src = `../assets/img/${item.icon}`;
  img.alt = "";

  const dataDiv = document.createElement("div");

  const valueParagraph = document.createElement("p");
  valueParagraph.className = `temp${item.label}`;
  valueParagraph.innerHTML = item.value;

  const labelParagraph = document.createElement("p");
  labelParagraph.innerHTML = item.label;

  dataDiv.appendChild(valueParagraph);
  dataDiv.appendChild(labelParagraph);

  col.appendChild(img);
  col.appendChild(dataDiv);

  return col;
}
