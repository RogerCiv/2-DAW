import { Usuario } from "./Usuario";
import { comments, users } from "./constants";
const usuario = new Usuario(2,"John","Doe","johndoe@example.com");



console.log(usuario.getComments());