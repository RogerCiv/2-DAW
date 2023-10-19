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
//Cada vez que generas un nuevo objeto  reserva memoria para los setter y getter
export function UsuarioFuncional(nombre,edad = 0){
  this._nombre = nombre;
  this._edad = edad;
  this._dni = "";

  //Getter y Setter para el nombre
  Object.defineProperty(this,"nombre",{
    get: function () {
      return this._nombre;
    },
    set: function (nuewvoNombre) {
      this._nombre = nuewvoNombre;
    }
  });

  //Getter --> Otra frma del geter. Mejor con defineProperty
/*
  this.getNombre = function () {
    return this._nombre;
  };
  */

  //Geter y setter para la edad.

  Object.defineProperty(this,"edad",{
    get: function () {
      return this._edad;
    },
    set: function (nuevaEdad) {
      this._edad = nuevaEdad;
    }
  });

  //Getter y setter para el DNI con validacion
  Object.defineProperty(this,"dni",{
    get: () => this._dni,
    set: function (newDni){
      const letras="TRWAGMYFPDXBNJZSQVHLCKET";
      const dniN = miDni.slice(0,8);
      const dniL = (miDni.slice(-1)).toUpperCase();
      if(miDni.length === 9 ){
        if(letras.charAt(dniN % 23) === dniL){
          this._dni = newDni;
        }else{
          this._dni = false
        }
    }
}
})
    
}
// puedo añadir las propiedades prototipales a posteriori de la siguiente forma
UsuarioFuncional.prototype.mostrarInfo = function (){
  console.log(`Bienvenido, ${this.nombre}, usted tiene ${this.edad} y su dni es ${this.dni}`);
}
// metodo estatico y estaria solo disponible solo en la funcion constructora.
UsuarioFuncional.saludo = function ()  {
 return "Hola mundo";
}

 // uso de herencia por prototipos con CLASS.

 class UsuarioClass {
    constructor(nombre = "",edad = 0){
      this._nombre = nombre;
      this._edad = edad;
      this._dni = "";
    }
    get nombre(){
      return this._nombre;
    }
    set nombre(nuevoNombre){
      this._nombre = nuevoNombre;
    }
    get edad(){
      return this.edad;
    }
    set edad(nuevaEdad){
      this._nombre = nuevaEdad;
    }

    get dni(){
      this._dni;
    }

    set dni(nuevoDni){
      this._dni = this.validarDni(nuevoDni);
    }
    validarDni(nuevoDni) {
      
    }

    mostrarInfo(){
      console.log("Bienvenido ....");
    }

    //Metodo estatico
    static saludarAtodos(){
      console.log("Hola a todos");
    }

 }