export function Publicacion(mensaje, fecha) {
  this._mensaje = mensaje;
  this._fecha = fecha;
  this._likes = 0;

  this.getMensaje = function () {
    return this._mensaje;
  };
  this.getFecha = function () {
    return this._fecha;
  };
  this.getLikes = function () {
    return this._likes;
  };
  this.darLike = function () {
    this._likes++;
  };
}
