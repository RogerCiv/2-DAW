const URLcompleta = 'https://api.preciodelaluz.org/v1/prices/all?zone=PCB'
const URLmedio = 'https://api.preciodelaluz.org/v1/prices/avg?zone=PCB'
const URLalto = 'https://api.preciodelaluz.org/v1/prices/max?zone=PCB'
const URLbajo = 'https://api.preciodelaluz.org/v1/prices/min?zone=PCB'
const URLahora = 'https://api.preciodelaluz.org/v1/prices/now?zone=PCB'
const URL = 'https://api.preciodelaluz.org/v1/prices/cheapests?zone=PCB&n=2'
fetch(URLcompleta)
  .then(response => response.json())
  .then(data =>  {
    const jsonData = JSON.stringify(data);
    const fs = require('fs');
    fs.writeFile('datos.json', jsonData, (err) => {
      if (err) throw err;
      console.log('Los datos se han guardado en el archivo datos.json');
    });
  })
  .catch(error => {
    console.error('Hubo un error al obtener los datos de la API: ', error);
  });