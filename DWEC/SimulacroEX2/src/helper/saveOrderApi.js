export function saveOrderApi(orderData) {
    return fetch('http://localhost:4000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al guardar la orden');
      }
      return response.json();
    });
  }
  