export function renderOrderFood(foodItem) {
  fetch("http://localhost:4000/categories?id=" + foodItem)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Could not found Food");
      }
      return resp.json();
    })
    .then((data) => {
    //  console.log(data);
      (data.map((f) => {

          const orderContainer = document.querySelector(".order");
    
          const div = document.createElement("div");
          div.classList.add("col-md-8");
          div.innerHTML = `
    
        <div class="card" >
        <img
        src="${f.strCategoryThumb}"
        class="${f.strCategory}"
        alt="${f.strCategory}"
        />
        <div class="card-body">
        <h5 class="card-title">${f.strCategory}</h5>
        <p class="card-text">Precio: ${f.price}$</p>
        <a href="#" class="btn btn-link card-link" data-id=${f.id}>Añadir</a>
        </div>
        </div>
    `;
    
          orderContainer.appendChild(div);
      }))
    })
    .catch((err) => console.log("Error", err.message));

}
