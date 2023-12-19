export function addAirbnb(element,data){
    const {
        id,
        nombre,
        imagen,
        acepta_mascotas,
        precio_noche,
      } = data;

      console.log(data.imagen);

      console.log(nombre);
      
      //const imgMasterCard = document.querySelector(".pay-card")
      

      const cart = document.querySelector(".carrito-productos")

      const card = document.createElement('div')
      card.classList.add('producto-cart')

      const img = document.createElement('img')
      img.src = imagen
      img.alt = nombre
      card.appendChild(img)

      const name = document.createElement('h2')
      name.textContent = nombre
      card.appendChild(name)


      if(acepta_mascotas){
        const labelAnimal = document.createElement("label")
        labelAnimal.textContent = "Acepta mascotas, contratar?"
        card.appendChild(labelAnimal)
        const checkbox = document.createElement('input')
        
        checkbox.type = 'checkbox'
        checkbox.id = `mascotas-${id}`;
        checkbox.addEventListener('change',() => {
            if(checkbox.checked){
                price.textContent = `${precio_noche * 1.2}$`
            }else{
                price.textContent = `${precio_noche}$`
            }
        })
        card.appendChild(checkbox)
      }

      const price = document.createElement('p')
      price.textContent = `${precio_noche}$`
      card.appendChild(price)

      const trashIcon = document.createElement('span')
      trashIcon.textContent = '🗑️'
      trashIcon.addEventListener('click', () => {
        card.remove()
      })
      card.appendChild(trashIcon)

      cart.appendChild(card)
}