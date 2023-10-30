import { Usuario } from "./Usuario";
import { users, comments } from "./constantes";

const user1 = new Usuario(1, "John", "Doe", "johndoe@example.com");

const com = user1.getComments(comments);

console.log(com);