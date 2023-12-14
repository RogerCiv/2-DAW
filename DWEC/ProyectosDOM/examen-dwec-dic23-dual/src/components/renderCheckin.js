/**
 *
 * @param {HTMLElement} element
 * @param {<data>Array} data
 */
export function renderCheckin(element, data) {
  data.map((obj) => {
    const {
      id,
      nombre,
      correo,
      numero_habitacion,
      numero_personas,
      fecha_entrada,
      fecha_salida,
      precio_facturado,
    } = obj;

    element.innerHTML += `
    <tr>
    <td>${numero_habitacion}</td>
    <td>${nombre}</td>
    <td>${numero_personas}</td>
    <td>${fecha_entrada}</td>
    <td>${fecha_salida}</td>
    <td>${precio_facturado}</td>
    <td><button class="editar" data-id="${id}">Editar</button></td>
    <td><button class="check-out" data-id="${id}">Check-Out</button></td>
  </tr>
    `
    
  });
}
