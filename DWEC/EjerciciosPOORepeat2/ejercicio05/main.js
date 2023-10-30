import { Usuario } from "./assets/modules";
import { users, comments } from "./assets/constantes";

const user1 = new Usuario(1, "Jane", "Smith", "janesmith@example.com");

const comment = user1.obenerComentarios(comments);


document.getElementById('textarea').value = comment;

console.log(comment);


