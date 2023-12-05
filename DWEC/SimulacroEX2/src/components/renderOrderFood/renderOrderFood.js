import { handleRemoveOrderItem } from "../../helper/handleRemoveOrderItem";
import { saveOrderApi } from "../../helper/saveOrderApi";
import { updateTotal } from "../../helper/updateToal";

//let total = 0
export function renderOrderFood(foodItem, foodCardDiv) {

  fetch("http://localhost:4000/categories?id=" + foodItem)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Could not found Food");
      }
      return resp.json();
    })
    .then((data) => {
      //  console.log(data);
      data.map((f) => {
        const orderContainer = document.querySelector(".order");

        const divOrder = document.createElement("div");
        divOrder.classList.add("col-md-8");
        divOrder.innerHTML = `
    
        <div class="card" >
        <img
        src="${f.strCategoryThumb}"
        class="${f.strCategory}"
        alt="${f.strCategory}"
        />
        <div class="card-body">
        <h5 class="card-title">${f.strCategory}</h5>
        <p class="card-text">Precio: ${f.price}$</p>
        <a href="#" class="btn btn-link card-link" data-id=${f.id}>Quitar</a>
        </div>
        </div>
    `;
        updateTotal(f.price, true);
      
        orderContainer.appendChild(divOrder);

        const removeButton = divOrder.querySelector(".card-link");
        handleRemoveOrderItem(removeButton, f, foodCardDiv);
      });
    })
    .catch((err) => console.log("Error", err.message));
}

const payButton = document.querySelector('.pay-button');
if (payButton) {
  payButton.addEventListener('click', () => {
    const orderItems = Array.from(document.querySelectorAll('.order .card'));
   
    const products = orderItems.map(item => {
      return {
        id: item.querySelector('.card-link').getAttribute('data-id'),
        title: item.querySelector('.card-title').textContent,
        price: parseFloat(item.querySelector('.card-text').textContent.replace('Precio: ', '').replace('$', '')),
      };
    });
    const total = products.reduce((total, item) => total + item.price, 0);
    // Añade el total a pagar a orderData
   const orderData = { products , total}
    localStorage.setItem('OrderFoods', JSON.stringify(orderData));
    saveOrderApi(orderData).then(() => {
      location.reload()
    })
  });
}