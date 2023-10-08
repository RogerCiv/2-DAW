/*
const URLcompleta = 'https://api.preciodelaluz.org/v1/prices/all?zone=PCB'
const URLmedio = 'https://api.preciodelaluz.org/v1/prices/avg?zone=PCB'
const URLalto = 'https://api.preciodelaluz.org/v1/prices/max?zone=PCB'
const URLbajo = 'https://api.preciodelaluz.org/v1/prices/min?zone=PCB'
const URLahora = 'https://api.preciodelaluz.org/v1/prices/now?zone=PCB'
const URL = 'https://api.preciodelaluz.org/v1/prices/cheapests?zone=PCB&n=2'
*/
const URLbalanceElectrico = 'https://apidatos.ree.es/es/datos/balance/balance-electrico?start_date=2023-08-01T00:00&end_date=2023-09-29T23:59&time_trunc=day'
const URLmercados = 'https://apidatos.ree.es/es/datos/mercados/componentes-precio-energia-cierre-desglose?start_date=2023-08-01T00:00&end_date=2023-09-29T23:59&time_trunc=month'
const URLdemanda = 'https://apidatos.ree.es/es/datos/demanda/evolucion?start_date=2023-08-01T00:00&end_date=2023-09-29T23:59&time_trunc=day'
const URLgeneracion = 'https://apidatos.ree.es/es/datos/generacion/evolucion-renovable-no-renovable?start_date=2023-08-01T00:00&end_date=2023-09-29T23:59&time_trunc=day'
const URLintercambios = 'https://apidatos.ree.es/es/datos/intercambios/francia-frontera?start_date=2023-08-01T00:00&end_date=2023-09-29T23:59&time_trunc=day'
const URLtransporte = 'https://apidatos.ree.es/es/datos/transporte/indice-indisponibilidad?start_date=2023-08-01T00:00&end_date=2023-09-29T23:59&time_trunc=month'
/*
fetch(URLtransporte)
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
  
 */


  fetch(URLmercados)
    .then(response => response.json())
    .then(data => {
      // Acceder a los datos incluidos
      const includedData = data.included;
  
      // Buscar el tipo "Renovable" dentro de los datos incluidos
      let renovableData = null;
      for (const item of includedData) {
        if (item.type === "Renovable") {
          renovableData = item;
          break;
        }
      }
  
      // Verificar si se encontraron datos de "Renovable"
      if (renovableData) {
        // Ahora puedes acceder a los datos de "Renovable" y sus propiedades
        console.log(renovableData);
      } else {
        console.log("No se encontraron datos de tipo 'Renovable' en la respuesta.");
      }
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
  
   // Recorrer solo Hidraulicas
fetch(URLbalanceElectrico)
  .then(response => response.json())
  .then(data => {
    const includedData = data.included;

    for (const item of includedData) {
      if (item.type === 'Renovable' && item.attributes.content) {
        const content = item.attributes.content;
        
        // Ahora puedes recorrer directamente el array content
        for (const contentItem of content) {
          if (contentItem.type === 'Hidráulica') {
            console.log(contentItem);
          }
        }
      }
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });


  /*

  const initialDate = new Date();
const initialDateISOS = initialDate.toISOString();
initialDate.setHours(initialDate.getHours() + 24);
const finalDateISOS = initialDate.toISOString();

const URL = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${initialDateISOS}&end_date=${finalDateISOS}&time_trunc=hour`;

async function fetchApi() {
      const res = await fetch(URL);
      const data = await res.json();

      const values = data.included.find(
        (item) => item.type === "Precio mercado spot (€/MWh)"
      ).attributes.values;
      setPrices(values);
    }
    fetchApi();
  }, []);

*/