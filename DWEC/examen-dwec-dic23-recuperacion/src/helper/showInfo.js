
import { addOrder } from "./addOrder";

export function showInfo(data, element) {
    const { nombre, detalles, direccion, servicios, acepta_mascotas } = data;
  
    //console.log(servicios.map((servicio) => `<li>${servicio}</li>`).join(""));
  
    // Convertir acepta_mascotas a una cadena legible
    const mascotas = acepta_mascotas ? "Sí" : "No";
  
    element.innerHTML = `
          <img src="img/producto1.jpg" alt="Imagen Producto" class="img" />
  
          <div class="texto-producto">
            <h3>${nombre}</h3>
            <p>${detalles}</p>
            <p>Dirección: ${direccion}</p>
            <p>Acepta mascotas: ${mascotas}</p>
            <ul style="list-style-disc="none">Servicios: ${servicios
              .map((servicio) => `<li>${servicio}</li>`)
              .join("")}</ul>
  
            <a class="btn" href="#">Agregar Airbnb</a>
          </div>
          `;
      const imgClick = element.querySelectorAll('.img')
      imgClick.forEach(img => {
          img.addEventListener("click", (e) => {
            
          })
      })
      const btns = element.querySelectorAll('.btn')
    

      btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
        //  console.log(e.target);
          addOrder(e,btn)
        })
  
      })
  }