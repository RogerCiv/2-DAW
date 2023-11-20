import './style.css'

const elemento = document.querySelector(".element")


function fadeOutAnimation(element, duration) {
  return new Promise((resolve) => {
    // Agregar clase para la animación de desvanecimiento
    element.classList.add('fade-out');

    // Establecer la duración de la animación
    element.style.transitionDuration = `${duration}ms`;


    element.style.opacity = '0';
  });
}


fadeOutAnimation(elemento,3000);