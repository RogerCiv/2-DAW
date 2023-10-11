
const ApiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2dlcmNpdmRldkBnbWFpbC5jb20iLCJqdGkiOiI1OGFmMDI0Ny00NDMyLTQ4NjAtYjhmYy01ZDFkOWQ0NzE5NDgiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY5NzAxMzU5MiwidXNlcklkIjoiNThhZjAyNDctNDQzMi00ODYwLWI4ZmMtNWQxZDlkNDcxOTQ4Iiwicm9sZSI6IiJ9.YztQQ77TsQVJjdOSCKYTHUHwBTWgBN6P84Kq4rrPwxM';
const URL = `https://opendata.aemet.es/opendata/api/prediccion/provincia/manana/18?api_key=${ApiKey}`;

let datos ;
// Realiza la primera solicitud para obtener la URL de los datos
fetch(URL)
  .then(response => response.json())
  .then(responseData => {
    // Verifica si la respuesta tiene éxito
    if (responseData.descripcion === 'exito' && responseData.estado === 200) {
      // Obten la URL de los datos
      const dataURL = responseData.datos;

      // Realiza una segunda solicitud para obtener los datos reales
      fetch(dataURL)
        .then(dataResponse => dataResponse.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.error('Error al obtener los datos:', error));
    } else {
      console.error('La primera solicitud no tuvo éxito:', responseData);
    }
  })
  .catch(error => console.error('Error en la primera solicitud:', error));