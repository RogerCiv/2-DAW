/**
 * @description: Crear una app web que a traves de un formulario me permita recoger los datos nombre,edad dni. Cunado pulsemos el boton de "insertar,ENvuar" usuario automaticamente creara utilizando la herencia por prototipos un usuario de tipo UsuarioLiteral y guardara en un array dichos objetos almacenandolos en el LocalStorage a traves de la clave "datosUsuarios"  
 * Si el DNI no esta en el localStorage se inserta el usuario
 */
// --------- imports -------------
import { usuarioLiteral as Usuario } from "./assets/modules";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';




//---------- Variables globales ---------
const btnSave = document.getElementById("insertarUsuario");
const btnLoad = document.getElementById("cargarLocalStorage");
const messageSucces = document.getElementById("messageSucces");
const messageError = document.getElementById("messageError");
const messageErrorDni = document.getElementById("messageErrorDni");
//let arrayUsersSave = [];
//localStorage.setItem("datosUsuarios",[]);
const textarea = document.getElementById("textarea");
let getUsersFromLocalStorage = [];
//getUsersFromLocalStorage = JSON.parse(localStorage.getItem("datosUsuarios")); 


// --------- Funciones ----------------



function handlerInsertarUsuario(e){
    e.preventDefault();
    const form = document.getElementById("formularioUsuarios");
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const dni = document.getElementById("dni").value;
    let arrayUsersSave = [];
    //para Instanciar o crear un objeto cuyo prototipo sea UsuarioLiteral
    //objetoHijo =  Object.create(nombre_del_objeto_padre)
    let newUser = Object.create(Usuario);
    newUser.nombre = username;
    newUser.edad = age;
    newUser.dni = dni; 
    
    
    
    if (newUser.dni) {  
        if (localStorage.getItem("datosUsuarios")) {
            getUsersFromLocalStorage = JSON.parse(localStorage.getItem("datosUsuarios"));
        }
        console.log(getUsersFromLocalStorage);
        arrayUsersSave.push(newUser)
        if(!JSON.stringify(getUsersFromLocalStorage).includes(newUser.dni)){

         getUsersFromLocalStorage = getUsersFromLocalStorage.concat(arrayUsersSave);   
        localStorage.setItem("datosUsuarios", JSON.stringify(getUsersFromLocalStorage));
            
            messageTimeOut(messageSucces, 5000);
            form.reset();
        }else{
            messageTimeOut(messageErrorDni, 5000)
        }
       
    } else {
       messageTimeOut(messageError, 5000)
    }

}



function handlerLoadUsersLocalStorage(e) {
    e.preventDefault();
    /*
    if (localStorage.getItem("datosUsuarios")) {
        getUsersFromLocalStorage = JSON.parse(localStorage.getItem("datosUsuarios"));
    }
    // Agrega los nuevos usuarios a los datos cargados desde LocalStorage
    getUsersFromLocalStorage = getUsersFromLocalStorage.concat(arrayUsersSave);

    // Guarda la combinación de datos en LocalStorage
    localStorage.setItem("datosUsuarios", JSON.stringify(getUsersFromLocalStorage));
    */

    if(localStorage.getItem("datosUsuarios") === null) {
        textarea.value = "No hay datos";
    }
   
   textarea.value = JSON.stringify(localStorage.getItem("datosUsuarios"));
}


function messageTimeOut(messageType, time) {
    messageType.style.display = "block";

    setTimeout(() => {
        messageType.style.display = "none";
    }, time);
}

function init(){
    btnSave.addEventListener("click", handlerInsertarUsuario);
    btnLoad.addEventListener("click", handlerLoadUsersLocalStorage);
}
// -------- Inicio de la aplicación ---------------

document.addEventListener("DOMContentLoaded", init);