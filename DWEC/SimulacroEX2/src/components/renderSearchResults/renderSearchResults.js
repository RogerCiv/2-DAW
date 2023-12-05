import { findFoodsApi } from "../../helper/findFoodApi";

export function renderSearchResults(foodData) {
    const resultsContainer = document.querySelector(".order");
    // Limpia los resultados anteriores
    resultsContainer.innerHTML = '';
    foodData.map((f) => {
      const divCard = document.createElement("div");
      divCard.classList.add("col-md-8");
      divCard.innerHTML = `
        <div class="card" >
          <img src="${f.strCategoryThumb}" class="${f.strCategory}" alt="${f.strCategory}" />
          <div class="card-body">
            <h5 class="card-title">${f.strCategory}</h5>
            <p class="card-text">Precio: ${f.price}$</p>
          </div>
        </div>
      `;
      resultsContainer.appendChild(divCard);
    });
  }
  
  // En tu controlador de eventos de búsqueda
  const searchButton = document.querySelector('.search-button');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      const query = document.querySelector('.search-input').value;
      findFoodsApi(query).then(foodData => {
        renderSearchResults(foodData);
      });
    });
  }
  