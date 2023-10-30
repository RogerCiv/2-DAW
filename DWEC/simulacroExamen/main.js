import { Usuario } from "./Usuario.js";
import { Publicacion } from "./Publicacion.js";
import { RedSocial } from "./RedSocial.js";

// Importa los datos del archivo JSON
import { examenRedSocial } from "./assets/datos.js";

const tuenti = new RedSocial();

const usuario = new Usuario("RR", "Roger");
const usuario2 = new Usuario("Pp", "Pepe");
const usuario3 = new Usuario("Miguel", "Miguelinho Da Souza");
tuenti.agregarUsuario(usuario);
tuenti.agregarUsuario(usuario2);
tuenti.agregarUsuario(usuario3);
examenRedSocial.usuarios.map((usuario) => tuenti.agregarUsuario(usuario));

//console.log(tuenti)
usuario.agregarAmigo(usuario2);
usuario.agregarAmigo(usuario3);
tuenti.guardarEnLocalStorage();

console.log(tuenti.encontrarPublicacionMasLikes());
console.log(tuenti.encontrarUsuarioMasLikes());
console.log(tuenti.obtenerUsuarios());
