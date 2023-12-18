import { addAirbnb } from "../helper/addAirbnb";
import { addOrder } from "../helper/addOrder";
import { infoChange } from "../helper/infoChange";
import { showInfo } from "../helper/showInfo";

/**
 *
 * @param {HTMLElement} element
 * @param {Object} data
 */
export function renderCardAirbnb(element, data) {
  const {
    id,
    nombre,
    descripcion,
    servicios,
    acepta_mascotas,
    metros_cuadrados,
    max_personas,
    precio_noche,
    imagen,
    direccion,
    detalles,
  } = data;

  element.innerHTML += `
    <div class="producto">
    <img src="img/producto1.jpg" alt="Imagen Producto" class="img"
     data-id="${id}" data-nombre="${nombre}" data-descripcion="${descripcion}" 
     data-precio="${precio_noche}" data-imagen="${imagen}" data-direccion="${direccion}"
      data-detalles="${detalles}" data-servicios="${servicios}" data-mascotas="${acepta_mascotas}"
      data-metros="${metros_cuadrados}" data-personas="${max_personas}" />


    <div class="texto-producto">
      <h3>${nombre}</h3>
      <p>
        ${descripcion}
      </p>
      <p class="precio">${precio_noche}$</p>

      <a class="btn" href="#" >Agregar Airbnb</a>
    </div>
    <!-- Info Producto -->
  </div>
    `;

  const imgs = element.querySelectorAll(".img");
  imgs.forEach((img) => {
      img.addEventListener("click", (e) => {
          // console.log(e.target.dataset.id);
        infoChange(e,img)  
    });
  });

    const btns = element.querySelectorAll('.btn')
    

    btns.forEach(btn => {
      btn.addEventListener("click", (e) => {
      //  console.log(e.target);
        addOrder(e,btn)
      })

    })



}


