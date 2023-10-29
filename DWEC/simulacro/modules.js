

export const Cita = {
    _dni: "",
    _nombre: "",
    _fecha: "",
    _hora: 0,

    get dni(){
        return this._dni;
    },
    set dni(nuevoDni){
        this._dni = nuevoDni;
    },
    get nombre(){
        return this._nombre;
    },
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    },
    get fecha(){
        return this._fecha;
    },
    set fecha(nuevaFecha){
        this._fecha = nuevaFecha;
    },
    get hora(){
        return this._hora;
    },
    set hora(nuevaHora){
        this._hora = nuevaHora;
    },
    obtenerInformacion(){
        return  `{ dni: ${this.dni},
                 nombre: ${this.nombre}, fecha: ${this.fecha}, hora: ${this.hora} }`
    },
    setInformacion(arr,objeto){
        const dniB = objeto.dni
        const encontrado = arr.some(el => el.dni === dniB);
        if(!encontrado){
            arr.push(objeto)
            backup("Citas",arr);
        }else{
            console.log("Ya existe")
        }
    }

 }

 export const CitaMedica = {
    _espcialidad: "",

    get especialidad(){
        return this._espcialidad;
    },
    set especialidad(nuevaEspecialidad){
        this._espcialidad = nuevaEspecialidad;
    },
   
 }



 export function backup(nombre,arr){
    return localStorage.setItem(nombre,JSON.stringify(arr));
 }


export class Paquete{
    constructor(destino) {
        this._id = Math.floor((Math.random() * 10000) + new Date().getFullYear());
        this._destino = destino;
        
    }

    get id (){
        return this._id;
    }
    set id(nuevoID){
        this._id = nuevoID;
    }

    get destino(){
       return this._destino;
    }
    set destino(nuevoDestino){
        this._destino = nuevoDestino;
    }

    calcularTarifa(){
        const precio = 1.50 * this.peso;
        return `EL precio del paquete es de ${precio}`;
    }

}

export class Tipo extends Paquete{
    constructor(destino,peso){
        super(destino)
        this._peso = peso
    }
    get peso(){
        return this._peso;
    }

    obtenerInformacion(){
        return `{ id: ${this.id}, destino: ${this.destino}, peso: ${this.peso} }`
    }

    setPaquetes(arr,objeto) {
        const encontrado = arr.some(el => el.id === objeto.id)
        if(!encontrado){
            arr.push(objeto)
            backup("Paquetes",objeto);
        }else{
            console.log("Ya existe dicha ID");
        }
    }
}
