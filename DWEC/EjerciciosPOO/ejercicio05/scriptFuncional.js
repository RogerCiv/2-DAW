import { UsuarioFuncional } from './assets/modules.js';

const idUser = document.getElementById('idUser');
const btnSend = document.getElementById('sendId');
const textarea = document.getElementById('textarea');

// Crear un nuevo usuario con ID 1
let usuario 

// Obtener y mostrar los comentarios de la publicación con ID 1
//console.log(usuario.obtenerComentarios(2));

function createUser(userId) {
 usuario = new UsuarioFuncional(userId);
}

function handlerSend(e){
  e.preventDefault();
  const userId = parseInt(idUser.value);
  if(!isNaN(userId)){
    createUser(userId);
    const comments = usuario.obtenerComentarios();
    console.log(comments);
    comments.forEach((comment,index) => {
      textarea.value += `Comentario ${index +1}:\n${comment}\n\n`;
    })
  }
}


function init(){
  btnSend.addEventListener('click',handlerSend);
}

document.addEventListener('DOMContentLoaded', init);