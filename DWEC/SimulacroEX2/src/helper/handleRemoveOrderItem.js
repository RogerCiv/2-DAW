import { updateTotal } from "./updateToal";

export function handleRemoveOrderItem(removeButton, f, foodCardDiv) {
    removeButton.addEventListener("click", () => {
      const orderContainer = document.querySelector(".order");
      orderContainer.removeChild(removeButton.parentElement.parentElement.parentElement);
      updateTotal(f.price, false);
      if (foodCardDiv) {
        foodCardDiv.style.opacity = 1;
        const addButton = foodCardDiv.querySelector(".btn.btn-link.card-link");
        if (addButton) {
          addButton.style.display = "block";
        }
        foodCardDiv.classList.remove("added-to-order");
      }
    });
  }