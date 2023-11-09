
export function messageTimeOut(messageType, time) {
    
    messageType.style.display = "block";
  
    setTimeout(() => {
      messageType.style.display = "none";
    }, time);
  }