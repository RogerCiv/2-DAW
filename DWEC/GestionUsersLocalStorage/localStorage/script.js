import users from './assets/modules.js';

// ------- Declaración de variables GLOBALES ----------

let myStructUsers = [];
const form = document.getElementById('form');
const btnCargar = document.getElementById('cargar');
const textaarea = document.getElementById("infouserpassword");
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
   // return localStorage.setItem(key,JSON.stringify(tmpArray));
   return sessionStorage.setItem(key, JSON.stringify(tmpArray));

}


// funcion que guarde del formulario los datos en mi estructura de datos con username, password(codificado) no se puede repetir el username.
/*
function saveNewUserLocalStorage(key,username,password){
    //const tmpArray = JSON.parse(localStorage.getItem(key)) //array objetos [{username1,password1}]
    let tmpArray = JSON.parse(localStorage.getItem(key)) || []; 
    let encontrado = false;
    tmpArray.map(objeto =>
         objeto.hasOwnProperty(username) 
        ? (encontrado = true)
        : false);
        
      // objeto.hasOwnProperty(username) && (encontrado = true) );
       
       //!encontrado ? aqui guardo : no hago nada
       !encontrado
        ? tmpArray.push({ [username]: btoa(password) }) 
        : alert(`Èl usuario con username ${username} ya existe`);
       
       localStorage.setItem(key,JSON.stringify(tmpArray));
       
    }
*/
function saveNewUserLocalStorage(key, username, password) {
  let tmpArray = JSON.parse(localStorage.getItem(key)) || []; // Si no hay datos en el localStorage, inicializa tmpArray como un array vacío

  let encontrado = false;

  tmpArray.map((objeto) =>
      objeto.hasOwnProperty(username)
          ? (encontrado = true)
          : false
  );

  // !encontrado ? aquí guardo : no hago nada
  !encontrado
      ? tmpArray.push({ [username]: btoa(password) })
      : alert(`El usuario con username ${username} ya existe`);

  localStorage.setItem(key, JSON.stringify(tmpArray));
}



function save(event){
    event.preventDefault();
    //capturar lo que he escrito en el formulario y guardarlo en variables
    const username = document.getElementById('username');
    
    const password = document.getElementById('password');
    // llamara a mi funcion que guardaba en la key y el username y el password.
    //si lo guarda, alert indicando que ha sido guardado y borro el formulario.
    saveNewUserLocalStorage("newUsers",username.value,password.value);
    alert("Usuario guardado");
    form.reset();
}
function load(event){
    event.preventDefault();
    const data =  loadStructData("newUsers");
    let userData = "";
    for (const key of Object.entries(data)) {
        const decryptedPassword = atob(localStorage.getItem(key));
        userData += `Usuario: ${key} Contraseña: ${decryptedPassword}\n`;
    }
    textaarea.value = userData;
}

myStructUsers = loadStructData("Users");
saveUserAndPassword("newUsers",myStructUsers);


form.addEventListener("submit", save);

btnCargar.addEventListener("click", load);

