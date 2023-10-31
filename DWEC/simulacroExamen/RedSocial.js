import { Usuario } from "./Usuario.js";
import { examenRedSocial } from "./assets/datos.js";

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
        return new Map().set(el.username, el.publicaciones);
      }
    });
  };

  this.encontrarPublicacionMasLikes = function () {
    let maxLikes = 0;
    let res = {};

    examenRedSocial.usuarios.forEach((user) => {
      user.publicaciones.forEach((el) => {
        if (el.likes > maxLikes) {
          maxLikes = el.likes;
          res = el;
        }
      });
    });

    return res;
  };

  this.encontrarUsuarioMasLikes = function () {
    let res = "";
    let maxLikes = 0;

    examenRedSocial.usuarios.forEach((user) => {
      let userLikes = 0;

      user.publicaciones.forEach((pub) => {
        userLikes += pub.likes;
      });
      if (userLikes > maxLikes) {
        maxLikes = userLikes;
        res = user.nombreCompleto;
      } else {
        userLikes = 0;
      }
    });

    return res;
  };

  this.guardarEnLocalStorage = function () {
    const data = {
      usuarios: this._usuarios,
    };
    localStorage.setItem("ExamenRedSocial", JSON.stringify(data));
  };
}