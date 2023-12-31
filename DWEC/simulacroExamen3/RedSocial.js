import { examenRedSocial } from "./assets/datos";
export function RedSocial() {
  this._usuarios = [];

  this.agregarUsuario = function (usuario) {
    this._usuarios.push(usuario);
  };
  this.obtenerUsuarios = function () {
    return this._usuarios;
  };

  this.obtenerPublicacionesUsuario = function (username) {
    return examenRedSocial.usuarios.map((el) => {
      if (el.username === username) {
        return new Map(el.username, el.publicaciones);
      }
    });
  };

  this.encontrarPublicacionMasLikes = function () {
    let result = {};
    let maxLikes = 0;

    examenRedSocial.usuarios.forEach((user) => {
      user.publicaciones.forEach((el) => {
        if (el.likes > maxLikes) {
          maxLikes = el.likes;
          result = el;
        }
      });
    });
    return result;
  };

  this.encontrarUsuarioMasLikes = function () {
    let result = {};
    let maxLikes = 0;

    examenRedSocial.usuarios.forEach((user) => {
      let userLikes = 0;
      user.publicaciones.forEach((pub) => {
        userLikes += pub.likes;
      });
      if (userLikes > maxLikes) {
        maxLikes = userLikes;
        result = user.nombreCompleto;
      } else {
        userLikes = 0;
      }
    });
    return result;
  };

  this.guardarEnLocalStorage = function () {
    const data = {
      usuarios: this._usuarios,
    };
    localStorage.setItem("ExamenRedSocial",JSON.stringify(data))
  };
}





