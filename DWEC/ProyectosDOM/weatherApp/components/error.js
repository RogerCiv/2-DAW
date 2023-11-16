export function messageErrorTimeOut(message, element, duration) {
    const newDiv = document.createElement("div");
    newDiv.textContent = message;
    newDiv.classList.add("message-error");
    element.parentNode.insertBefore(newDiv, element.nextSibling);
  
    setTimeout(() => {
      newDiv.remove();
    }, duration);
  }