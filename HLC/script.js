async function obtenerPrecios() {
    try {
        const response = await fetch('https://apidatos.ree.es/es/datos/mercados/componentes-precio?start_date=2023-08-01T00:00&end_date=2023-09-29T23:59&time_trunc=month');
        const data = await response.json();

        // Obtener los valores mínimo y máximo
        const valores = data.included[0].attributes.values;
        const precios = valores.map(item => item.value);
        const precioMinimo = Math.min(...precios);
        const precioMaximo = Math.max(...precios);

        // Mostrar los valores en la página
        document.getElementById('valorMinimo').textContent = precioMinimo.toFixed(2) + ' €/MWh';
        document.getElementById('valorMaximo').textContent = precioMaximo.toFixed(2) + ' €/MWh';
    } catch (error) {
        console.error('Error al obtener los precios:', error);
    }
}

obtenerPrecios();


//const URLbalanceElectrico = 'https://apidatos.ree.es/es/datos/balance/balance-electrico?start_date=2023-08-01T00:00&end_date=2023-09-29T23:59&time_trunc=day'

// Obtén la fecha actual en el formato YYYY-MM-DD
function obtenerFechaActual() {
    const fecha = new Date();
    const año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
  
    // Agrega ceros a la izquierda si es necesario
    mes = mes < 10 ? '0' + mes : mes;
    dia = dia < 10 ? '0' + dia : dia;
  
    return `${año}-${mes}-${dia}`;
  }
  
  // Función para obtener los datos del día actual
  async function obtenerDatosDiaActual() {
    const fechaActual = obtenerFechaActual();
  
    // Construye la URL con los parámetros necesarios
    const url = `https://apidatos.ree.es/es/datos/balance/balance-electrico?start_date=${fechaActual}&end_date=${fechaActual}&time_trunc=day`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Aquí puedes procesar los datos según tus necesidades
      console.log('Datos del día actual:', data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
  // Llama a la función para obtener los datos del día actual
  obtenerDatosDiaActual();
  