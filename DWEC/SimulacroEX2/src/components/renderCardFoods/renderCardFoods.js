import { renderOrderFood } from "../renderOrderFood/renderOrderFood";


export function renderCardFoods(container,foodData){
    container.innerHTML += `
    
    <div class="col-md-4">
    <div class="card" >
    <img
    src="${foodData.strCategoryThumb}"
    class="${foodData.strCategory}"
    alt="${foodData.strCategory}"
    />
    <div class="card-body">
    <h5 class="card-title">${foodData.strCategory}</h5>
    <p class="card-text">Precio: ${foodData.price}$</p>
    <a href="#" class="btn btn-link card-link" data-id=${foodData.id}>Añadir</a>
    </div>
    </div>
    </div>
    `
    
    const addButton = document.querySelectorAll(".card-link")
    const orderContainer = document.querySelector(".order");
    console.log(foodData);

    addButton.forEach((add) => {
        
        add.addEventListener("click", (e) => {

            e.preventDefault();
            console.log(e.target);
           // console.log(e.currentTarget);
            const foodCard = e.currentTarget
            const foodItem = foodCard.getAttribute("data-id");
            //console.log(foodItem);
            
            renderOrderFood(foodItem)
        })
    })


}