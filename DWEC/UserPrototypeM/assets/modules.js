 //Uso de herencia por prototipos con objetos LITERALES.

 export const usuarioLiteral = {
   _nombre: "",
   _edad: 0,
   _dni: "",
 //init: function(nombre,edad,dni){
  //  this._nombre = nombre;
  //  this._edad = edad;
  //  this._dni = dni;
 //}

  get nombre() {
    return this._nombre;
  },
  set nombre(newNombre){
    this._nombre = newNombre;
  },

  get edad() {
    return this._edad;
  },
  set edad(newEdad){
    return this._edad = newEdad;
  },

  get dni(){
    return this._dni;
  },

  set dni(newDni){
   return this.validarDni(newDni) ? (this._dni = newDni) : false;
  },

  validarDni(miDni){
    const letras="TRWAGMYFPDXBNJZSQVHLCKET";
    const dniN = miDni.slice(0,8);
    const dniL = (miDni.slice(-1)).toUpperCase();
    if(miDni.length === 9 ){
      if(letras.charAt(dniN % 23) === dniL){
        return true
      }
    }
    return false
  },
  mostrarInformacion(){
    return `Nombre: ${this._nombre}, Edad: ${this._edad}, Dni: ${this._dni}`;
  }
    
 }

 //Uso de herencia por prototipos con FUNCIONES CONSTRUCTORAS.




 // uso de herencia por prototipos con CLASS.