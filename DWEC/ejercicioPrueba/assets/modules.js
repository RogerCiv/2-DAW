

export class Usuario {
    constructor(nombre,cita){
        this._nombre = nombre;
        this._cita = cita;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}


export class Cita {
    constructor(usuario,fecha){
        this._usuario = usuario
        this._fecha = fecha;
    }

    get usuario(){
        return this._usuario;
    }
    set usuario(nuevoUsuario){
        this._usuario = nuevoUsuario
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(nuevaFecha){
        this._fecha = nuevaFecha;
    }

}