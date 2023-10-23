// Objeto literal


export const CalculadoraLiteral = {
  suma: function (a, b) {
    return a + b;
  },
  resta: function (a, b) {
    return a - b;
  },
  multiplicacion: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
   
    return b != 0 ? a/b : "División por 0 no es posible."
  },
  raizCuadrada: function (a) {
   return  a >= 0 ? Math.sqrt(a) : "No puede ser menor que 0";
  },
  potenciacion: function (a,b) {
    return Math.pow(a,b);
  }

}

// Función Constructora
export function CalculadoraFuncional(){
  this.suma = function (a, b) {return a + b;};
  this.resta = function (a, b) { return a - b;};
  this.multiplicacion = function (a, b) { return a * b;};

  this.division = function (a, b) { return b != 0 ? a / b : 'No divisible por 0'; };

  this.raizCuadrada = function (a) { return a >= 0 ? Math.sqrt(a) : "No Puede ser menor que 0";};

  this.potenciacion = function (a, b) { return Math.pow(a, b);};

}


export class CalculadoraClass {
  suma(a, b) { return a + b;};
  resta(a,b) { return a - b;};
  multiplicacion(a,b) { return a * b;};
  division(a,b) { return b != 0 ? a / b : "No se puede dividir por 0"; };
  raizCuadrada(a) { return a>= 0 ? Math.sqrt(a) : "Menor que 0"};
  potenciacion(a,b) { return Math.pow(a,b); };
}

