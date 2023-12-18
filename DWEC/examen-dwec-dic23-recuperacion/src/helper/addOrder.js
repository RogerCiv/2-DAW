import { addAirbnb } from "./addAirbnb";

export function addOrder(e,btn){
    const producto = e.target.closest(".producto")
    const img = producto.querySelector('.img');
  
    
    const roomData = {
      id: img.dataset.id,
      nombre: img.dataset.nombre,
      imagen: img.dataset.imagen,
      acepta_mascotas: img.dataset.mascotas,
      precio_noche: img.dataset.precio,
    }
    addAirbnb(producto,roomData)
    producto.style.opacity = 0.3
    btn.style.display = "none"

  
}