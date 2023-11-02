import { RedSocial } from "./RedSocial";
import { Usuario } from "./Usuario";
import { examenRedSocial } from "./assets/datos";

const tuenti = new RedSocial();

const usuario = new Usuario("ShuMoreniko", "Abelinho Da Souza");
const usuario2 = new Usuario("RuBiaKo", "Patricio DecoUU");

tuenti.agregarUsuario(usuario);
tuenti.agregarUsuario(usuario2);

examenRedSocial.usuarios.map((user) => tuenti.agregarUsuario(user));

console.log(tuenti.encontrarUsuarioMasLikes());
console.log(tuenti.encontrarPublicacionMasLikes());
tuenti.guardarEnLocalStorage();
