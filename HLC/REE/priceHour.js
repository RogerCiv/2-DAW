var initialDate = new Date();
var initialDateISOS = initialDate.toISOString();
initialDate.setHours(initialDate.getHours() + 24);
var finalDateISOS = initialDate.toISOString();

var URL = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${initialDateISOS}&end_date=${finalDateISOS}&time_trunc=hour`;

const gridContainer = document.querySelector('.container-grid');

function fetchApi() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const values = data.included.find(
        (item) => item.type === "Precio mercado spot (€/MWh)"
      ).attributes.values;
      setPrices(values);
    })
    .catch((error) => console.error('Error:', error));
}

function setPrices(values) {
  // Encontrar el precio más bajo y el más alto.
  const minPrice = Math.min(...values.map(value => value.value));
  const maxPrice = Math.max(...values.map(value => value.value));

  values.forEach(function (value) {
    // Crear div grid-item
    let div = document.createElement('div');
    div.className = 'grid-item';

    // Convertir la cadena de fecha y hora a un objeto Date
    let dateObject = new Date(value.datetime);

    // Aplicar la función formatDate a la fecha
    let date = formatDate(dateObject);

    // Crear  párrafo para la fecha.
    let p1 = document.createElement('p');
    p1.className = 'date';
    p1.innerHTML = `<span>Dia:</span> ${date}`;
    div.appendChild(p1);

    // Separar la hora del resto de la cadena de fecha y hora
    let time = value.datetime.split('T')[1].split('.')[0].slice(0,5);

    // Crear un párrafo para la hora.
    let p2 = document.createElement('p');
    p2.className = 'time';
    p2.innerHTML = `<span>HORA:</span> ${time}`;
    div.appendChild(p2);

    // Crear un párrafo para el precio
    let p3 = document.createElement('p');
    p3.className = 'price';
    p3.innerHTML = `<span>Precio:</span> ${value.value} (€/MWh)`;

    // Añadir una clase CSS al párrafo del precio si es el más bajo o el más alto
    if (value.value === minPrice) {
      p3.classList.add('lowest');
    } else if (value.value === maxPrice) {
      p3.classList.add('highest');
    }

    div.appendChild(p3);

    // Añadir el div al cuerpo del documento
    gridContainer.append(div);
  });
}


function formatDate(date) {
  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0'); 
  let year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

fetchApi();
