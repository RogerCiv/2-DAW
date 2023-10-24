

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
    constructor(usuario,fecha,hora){
        this._usuario = usuario
        this._fecha = fecha;
        this._hora = hora;
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

    get hora(){
        return this.hora;
    }
    set hora(nuevaHora){
        this.hora = nuevaHora;
    }
}