import {  comments } from "./constantes";

export function Usuario(email) {
  this._email = email;

  this.getEmail = function () {
    return this._email;
  };
}

Usuario.prototype.obenerComentarios = function () {
  let comentario = comments.filter((c) => c.email === this.getEmail());

  return comentario
    .map(
      (com) =>
        `ID del post : ${com.postId}, ID: ${com.id} Email del usuario : ${com.email}, Titulo Publicacion: ${com.name} Comentario: ${com.body}`
    )
    .join("\n");
};


