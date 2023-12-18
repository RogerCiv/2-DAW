import { showInfo } from "./showInfo";

export function infoChange(e,img){
    const roomData = {
        id: img.dataset.id,
        nombre: img.dataset.nombre,
        descripcion: img.dataset.descripcion,
        servicios: img.dataset.servicios.split(","),
        acepta_mascotas: img.dataset.mascotas,
        metros_cuadrados: img.dataset.metros,
        max_personas: img.dataset.personas,
        precio_noche: img.dataset.precio,
        imagen: img.dataset.imagen,
        direccion: img.dataset.direccion,
        detalles: img.dataset.detalles,
      };
      
      //console.log( servicios);
  const producto = e.target.closest('.producto')
      // console.log(producto);
      showInfo(roomData, producto);
}