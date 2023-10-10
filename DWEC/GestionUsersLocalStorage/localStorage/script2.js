import users from './assets/modules.js';

// ------- Declaración de variables GLOBALES ----------

let myStructUsers = [];
const form = document.getElementById('form');
// Creamos una funcion que guarde en el localStorage la estructura usuarios .

/**
 * 
 * @param {Array} structData 
 * @returns 
 */
function insertUsers (key,structData) {
    return localStorage.setItem(key, JSON.stringify(structData));
}

insertUsers("Users",users);

// Creamos una funcion que cargue del localStorage la estructura cuyo nombre le pase como parametro.

function loadStructData(key){
    return JSON.parse(localStorage.getItem(key));
}



//Guardar en una estructura de datos el username y password(codificado) de todos los usuarios de mi estructura Y de los nuevos usuarios que vaya a introducir. SIN REPETIR el username. y  despues se vuelca al LOcal storage.



function saveUserAndPassword(key,structUsers){
    const tmpArray = [];
    /*
    for(const key of Object.keys(structUsers)){
       array.push(localStorage.setItem([structData.login.username], structData.login.password)
    }
    */
   structUsers.map(user => {
       tmpArray.push({[user.login.username] : btoa(user.login.password)});// cuidado con los [] de la clave
    })
    return localStorage.setItem(key,JSON.stringify(tmpArray));
}


// funcion que guarde del formulario los datos en mi estructura de datos con username, password(codificado) no se puede repetir el username.

function saveNewUserLocalStorage(key,username,password){
    const tmpArray = JSON.parse(localStorage.getItem(key)) //array objetos [{username1,password1}]
    let encontrado = false;
    tmpArray.map(objeto =>
        /* objeto.hasOwnProperty(username) 
        ? (encontrado = true)
        : false);
        */
       objeto.hasOwnProperty(username) && (encontrado = true) );
       
       //!encontrado ? aqui guardo : no hago nada
       !encontrado ? tmpArray.push({[username]:btoa(password)}) : alert(`Èl usuario con username ${username} ya existe`);
       
       localStorage.setItem(key,JSON.stringify(tmpArray));
       
    }



function save(){
    //capturar lo que he escrito en el formulario y guardarlo en variables
    
    // llamara a mi funcion que guardaba en la key y el username y el password.
    //si lo guarda, alert indicando que ha sido guardado y borro el formulario.
}


myStructUsers = loadStructData("Users");
saveUserAndPassword("newUsers",myStructUsers);
saveNewUserLocalStorage();



form.addEventListener("submit", save);