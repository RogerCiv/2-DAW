import { comments } from "./constantes";

export function Usuario(id, nombre, apellido, email) {
  this._id = id;
  this._nombre = nombre;
  this._apellido = apellido;
  this._email = email;

  this.getId = function () {
    return this._id;
  };
  this.getNombre = function () {
    return this._nombre;
  };

  this.getApellido = function () {
    return this._apellido;
  };
  this.getEmail = function () {
    return this._email;
  };
}

Usuario.prototype.obenerComentarios = function () {
  let comentario = comments.filter((c) => c.userId === this._id);

  return comentario
    .map(
      (com) =>
        `ID del post : ${com.postId},\nID: ${com.id} \nComentario: ${com.comment}`
    )
    .join("\n");
};


