import "./style.css";

const container = document.querySelector(".container");

function operacionesAritmeticas(num1, num2, operacion) {
  const opracionesValidas = ["suma", "resta", "multiplicacion", "division"];
  if (!opracionesValidas.includes(operacion)) {
    console.log("Error. No existe dicha operacion");
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = 
        operacion === 'sumar' ? num1 + num2 :
        operacion === 'restar' ? num1 - num2 :
        operacion === "multiplicacion" ? num1 * num2 :
        operacion === "division" ? (num2 === 0 ? reject(new Error('No se puede dividir por 0')) : num1 - num2) :  
         reject(new Error('Operación no reconocida'));
      
      container.innerHTML = "";
      container.innerHTML = `Resultado de la operación ${operacion} es: ${result}`;
      resolve(result);
    }, 3000);
  });
}

operacionesAritmeticas(2, 5, "multiplicacion")
  .then((result) =>
    console.log(`Operación realizada con exito.Resultado: ${result}`)
  )
  .catch((error) => new Error(error));
