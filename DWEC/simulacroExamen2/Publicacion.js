export function Publicacion(mensaje, fecha) {
  this._mensaje = mensaje;
  this._fecha = fecha;
  this._likes = 0;

  this.darLike = function () {
    this._likes++;
  };
  
}
