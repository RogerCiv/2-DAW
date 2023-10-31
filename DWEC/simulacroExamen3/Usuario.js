export function Usuario(username, nombreCompleto) {
  this._username = username;
  this._nombreCompleto = nombreCompleto;
  this._amigos = [];
  this._publicaciones = [];

  this.agregarAmigo = function (amigo) {
    this._amigos.push(amigo);
  };
  this.agregarPublicacion = function (mensaje, fecha) {
    this._publicaciones.push(new Publiacion(mensaje, fecha));
  };
}
