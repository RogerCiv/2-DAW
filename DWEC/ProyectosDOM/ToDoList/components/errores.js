
export function messageTimeOut(message, element, duration) {
  // Crea el elemento del mensaje de error
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.className = 'message-error-p';
  errorMessage.style.display = "block"

  // Agrega el mensaje de error al elemento del DOM
    element.appendChild(errorMessage);

  // Elimina el mensaje de error después de la duración especificada
  setTimeout(() => {
    element.removeChild(errorMessage);
  }, duration);
}

