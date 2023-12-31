import { users } from './assets/modules.js'

//Insertar elementos en el localStorage

//localStorage.setItem("nombre","Roger")

//const usuario = {"name":"Roger","cp":18000}
//localStorage.setItem("user",JSON.stringify(usuario))

//alert(localStorage.getItem("user",usuario))

//localStorage.removeItem("nombre")
//localStorage.clear()
//localStorage.setItem("misUsers",JSON.stringify(users))

/**
 * @description: Crear una pagina web que tenga la siguiente estructura: Un header que ocupe todo el ancho de la pagina que tenga el nombre de nuestro proyecto , seguidamente tendremos dos secciones que parten la pagina en 2 partes, justamente por la mitad. La parte de la izquierda dispondremos de un formulario login que contendra los campos username password y boton de guardar La parte de la derecha tendremos un titulo que diga USUARIOS ALMACENADOS y un TEXT AREA junto con el boton de CARGAR.
 * 
 * LA funcionalidad sera la siguiente: 
 * 1. Cargaremos todos los usuarios de JSON PLACEHOLDERS en una variable llamada USERS y atraves de una funcion a la que pasemos esa variable guardara los usernames y el password de dichos usuarios dentro del local storage. La password será encriptada antes de ser almacenada.
 * 2. A traves del formulario introducire un nombre y una password, si el nombre no esta guardado en el local storage, almacenaremos el usuario y passwrod encriptada dentro del localstorage. Si ya estuviera almacenada, mostrara OK LOGUEADO.
 * 3. A traves del boton cargar sacaremos el nombre de usuario y password desencriptada de todos los usuarios almacenados en el local storage.
 * Para encriptar la contraseña utilizaremos btoa("cadena a encriptar") y atbo("cadena a desencriptar")
 */

const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const textaarea = document.getElementById("infouserpassword");
const btnCargar = document.getElementById("cargar");

function  handleSubmit(event) {
    event.preventDefault();
    checkInLocalStorage();
}
function handleTextArea(event){
    event.preventDefault();
     loadTextAreaUsers();
}
function saveUsersLocalStorage(arr) {
    arr.forEach(user => {
        //usersLocalStorage[user.login.username] = btoa(user.login.password);
        localStorage.setItem(user.login.username, btoa(user.login.password))
    });
}

saveUsersLocalStorage(users);

function checkInLocalStorage(){
    localStorage.getItem(username.value) ? alert(" EXISTE") : localStorage.setItem(username.value, btoa(password.value))
}
function loadTextAreaUsers() {
   /* let userData = "";
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const decryptedPassword = atob(localStorage.getItem(key));
            userData += `Usuario: ${key}, Contraseña: ${decryptedPassword}\n`;
        }
    }

    textaarea.value = userData;
   let userData = "";
    for (const key of Object.keys(localStorage)) {
        const decryptedPassword = atob(localStorage.getItem(key));
        userData += `Usuario: ${key} Contraseña: ${decryptedPassword}\n`;
    }

    textaarea.value = userData;
 */
    textaarea.value = Object.keys(localStorage).map((el,i) => "Usuario: "+ el + " -- Password: "+atob(Object.values(localStorage)[i] + "\n"));
    textaarea.value = textaarea.value.replaceAll(","," ");
}

form.addEventListener("submit", handleSubmit);
btnCargar.addEventListener('click',handleTextArea)















