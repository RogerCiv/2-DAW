let total = 0
export function updateTotal(price, add) {
    total = add ? total + price : total - price;
    const totalElement = document.querySelector('.total');
    if (totalElement) {
      totalElement.textContent = `Total a pagar: ${total}$`;
    }
    const payButton = document.querySelector('.pay-button');
    const payButtonContainer = document.querySelector('.pay-button-container');
    const orderContainer = document.querySelector(".order");
    if (payButton && payButtonContainer && orderContainer) {
      if (total > 0) {
        payButton.classList.remove('d-none');
      } else {
        payButton.classList.add('d-none');
      }
      setTimeout(() => {
        orderContainer.appendChild(payButtonContainer);
      }, 0);
    }
  }