/**
 * @description: Crear una app web que a traves de un formulario me permita recoger los datos nombre,edad dni. Cunado pulsemos el boton de "insertar,ENvuar" usuario automaticamente creara utilizando la herencia por prototipos un usuario de tipo UsuarioLiteral y guardara en un array dichos objetos almacenandolos en el LocalStorage a traves de la clave "datosUsuarios"
 */
// --------- imports -------------
import { usuarioLiteral as Usuario } from "./assets/modules";


//---------- Variables globales ---------
const botonInsertar = document.getElementById("insertarUsuario");



// --------- Funciones ----------------


function handlerInsertarUsuario(e){
    e.preventDefault();
    //const form = document.getElementById("formularioUsuarios");
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const dni = document.getElementById("dni").value;

    //para Instanciar o crear un objeto cuyo prototipo sea UsuarioLiteral
    //objetoHijo =  Object.create(nombre_del_objeto_padre)
    let newUser = Object.create(Usuario);
    newUser.nombre = username;
    newUser.edad = age;
    if(newUser.dni = dni){
        alert('Insertado correctamente');
    }
    console.log(newUser.mostrarInformacion());

  

}

function init(){
    botonInsertar.addEventListener("click", handlerInsertarUsuario);
}
// -------- Inicio de la aplicación ---------------

document.addEventListener("DOMContentLoaded", init);