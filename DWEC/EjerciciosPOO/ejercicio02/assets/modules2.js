
// -------- Con clases ---------


export class Comida {
  constructor(nombre, calorias) {
    this.nombre = nombre;
    this.calorias = calorias;
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
    if (newCalorias >= 0) {
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


export class Dieta {
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
    this.alimentosConsumidos.forEach(comida => {
      console.log(`Comida: ${comida.nombre}, Calorías: ${comida.calcularCalorias()}`);
    });
  }
}


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
      const totalCalorias = this._alimentosConsumidos.reduce( (acc,comida) => acc + comida._calorias,0);
      return totalCalorias;
  },

  listarAlimentosConsumidos() {
      console.log( this._alimentosConsumidos.map(comida => `Comida: ${comida._nombre}, Calorías: ${comida._calorias}`)); 
      return this._alimentosConsumidos.map(comida => `Comida: ${comida._nombre}, Calorías: ${comida._calorias}`);
  }
}