// objetos LITERALES.
export const ComidaLiteral = {
  _nombre : "",
  _calorias : 0,

  get nombre() {
      return this._nombre;
  },
  set nombre(newNombre) {
      this._nombre = newNombre;
  },
  get calorias() {
      return this._calorias;
  },
  set calorias(newCalorias) {
      if(newCalorias >= 0) {
          this._calorias = newCalorias;
      }
      else {
          console.log("La cantidad de calorías debe ser mayor que 0");
      }        
  },

  // Método que devuelve la cantidad de calorías
  calcularCalorias() {
      return this._calorias;
  }
}


export const DietaLiteral = {
  _alimentosConsumidos : [],

  agregarAlimento(newComida) {
      this._alimentosConsumidos.push(newComida);
  },

  calcularTotalCalorias() {
      const totalCalorias = this._alimentosConsumidos.reduce((acc,comida) => acc + comida._calorias,0);
      return totalCalorias;
  },

  listarAlimentosConsumidos() {
      console.log( this._alimentosConsumidos.map(comida => `Comida: ${comida._nombre}, Calorías: ${comida._calorias}`)); 
      return this._alimentosConsumidos.map(comida => `Comida: ${comida._nombre}, Calorías: ${comida._calorias}`);
  }
}


// FUNCIONES CONSTRUCTORAS.
export function ComidaFuncional(nombre,calorias) {
  this._nombre = nombre;
  this._calorias = calorias;

  Object.defineProperty(this,"nombre", {
      get : function() {
          return this._nombre;
      },
      set : function (nuevoNombre) {
          this._nombre = nuevoNombre;
      },
  });
  Object.defineProperty(this,"calorias", {
      get : function() {
          return this._calorias;
      },
      set : function (newCalorias) {
          if(newCalorias >= 0) {
              this._calorias = newCalorias;
          }
          else {
              console.log("La cantidad de calorías debe ser mayor que 0");
          } 
      },
  });

  ComidaFuncional.prototype.calcularCalorias = function () {
      return this.calorias;
  };

}

export function DietaFuncional() {
  this._alimentosConsumidos = [];

  DietaFuncional.prototype.agregarAlimento = function (comida) {
      this._alimentosConsumidos.push(comida);
  };

  DietaFuncional.prototype.calcularTotalCalorias = function () {
      return this._alimentosConsumidos.reduce(function (acc, comida) {
          return acc + comida.calcularCalorias();
      }, 0);
  };

  DietaFuncional.prototype.listarAlimentosConsumidos = function () {
      return this._alimentosConsumidos.map(comida => `Comida: ${comida._nombre}, Calorías: ${comida._calorias}`);
  };
}


//  CLASS.
export class ComidaClass {
  constructor(nombre, calorias) {
      this._nombre = nombre;
      this._calorias = calorias;
  }
  get nombre() {
      return this._nombre;
  }
  set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
  }
  get calorias() {
      return this._calorias;
  }
  set calorias(newCalorias) {
      if(newCalorias >= 0) {
          this._calorias = newCalorias;
      }
      else {
          console.log("La cantidad de calorías debe ser mayor que 0");
      } 
  }
  calcularCalorias() {
      return this._calorias;
  }
}

export class DietaClass {
  constructor() {
      this.alimentosConsumidos = [];
  }

  agregarAlimento(comida) {
      this.alimentosConsumidos.push(comida);
  }

  calcularTotalCalorias() {
      return this.alimentosConsumidos.reduce((acc, comida) => acc + comida.calcularCalorias(), 0);
  }

  listarAlimentosConsumidos() {
    return this.alimentosConsumidos.map(comida => `Comida: ${comida.nombre}, Calorías: ${comida.calcularCalorias()}`);
  }
}

