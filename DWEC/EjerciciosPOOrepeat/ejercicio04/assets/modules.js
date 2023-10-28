export const Calculadora = {
  _resultado: 0,

  suma: function (a, b) {
    return (this._resultado = a + b);
  },
  resta: function (a, b) {
    return (this._resultado = a - b);
  },
  multiplicacion: function (a, b) {
    return (this._resultado = a * b);
  },
  division: function (a, b) {
    return b != 0 ? (this._resultado = a / b) : "Error: División por cero";
  },
  raizCuadrada: function (a) {
   return  a >= 0
      ? (this._resultado = Math.sqrt(a))
      : "Error: Raiz Cuadrada de número negativo";
  },
  potencia: function (a, b) {
    return (this._resultado = Math.pow(a, b));
  },
};
