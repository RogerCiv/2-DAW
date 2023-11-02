export function Usuario(username,nombreCompleto,amigos = [],publicaciones = []){
    this._username = username
    this._nombreCompleto = nombreCompleto
    this._amigos = amigos
    this._publicaciones = publicaciones

    this.agregarAmigos = function (amigo) {
        this._amigos.push(amigo)
    }
    this.agregarPublicacion = function (mensaje,fecha){
        this._publicaciones.push(new publicaciones(mensaje,fecha))
    }
}

