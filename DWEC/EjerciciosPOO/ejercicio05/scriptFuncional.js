import { UsuarioFuncional } from './assets/modules.js';



// Crear un nuevo usuario con ID 1
let usuario = new UsuarioFuncional(1);

// Obtener y mostrar los comentarios de la publicación con ID 1
console.log(usuario.obtenerComentarios(2));


document.addEventListener