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
  };

  this.agregarPublicacion = function (mensaje, fecha) {
    this._publicaciones.push(new Publicacion(mensaje, fecha));
  };
}