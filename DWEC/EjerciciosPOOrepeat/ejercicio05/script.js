import { comments, Usuario } from "./assets/modules";


const inputEmail = document.getElementById("email");

const btnEnviar = document.getElementById("btnEnviar");

const textarea = document.getElementById("textarea");

function handlerEnviar(e) {
  e.preventDefault();
  const usuario = new Usuario(inputEmail.value);

  console.log(usuario._email)
  textarea.value = usuario.obtenerComentarios();
}

btnEnviar.addEventListener("click", handlerEnviar);
