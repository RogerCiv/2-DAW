import { Publicacion } from "./Publicacion";

export function Usuario(username, nombreCompleto, amigos, publicaciones) {
  this._username = username;
  this._nombreCompleto = nombreCompleto;
  this._amigos = amigos || [];
  this._publicaciones = publicaciones || [];

  this.getUsername = function () {
    return this._username;
  };
  this.getNombreCompleto = function () {
    return this._nombreCompleto;
  };
  this.agregarAmigo = function (amigo) {
    this._amigos.push(amigo);
<<<<<<< HEAD
  };
=======
  }

  this.agregarPublicacion = function (mensaje,fecha) {
    this._publiaciones.push(new Publicacion(mensaje, fecha));
  }
}



>>>>>>> 08aad0cf4296c680b22d35fcd7effa1b540c32a9

  this.agregarPublicacion = function (mensaje, fecha) {
    this._publicaciones.push(new Publicacion(mensaje, fecha));
  };
}