//importar el archivo modules.js de assets/modules.js
import { users } from "./assets/modules.js";

/**
 * @author: Rogelio Sánchez
 * @description: Crear una funcion que le pase como parametro un array de objetos y me devuelva un Map cuya clave sea : "lastname_firstname" y cuyo valor sea "email" de aquellos usuarios que tengan email .es
 */

function mapEmail(arr){
    const resultado = new Map()
    
      for(const user of arr){
       // const email = user.email
       const lastname_firstname = `${user.lastname}_${user.firstname}`
        if(user.email.endsWith(".es")){
          resultado.set(lastname_firstname,user.email
          )
        }
      }
   return resultado
}

console.log(mapEmail(users));

// Lo mismo que el anterior pero con un reduce
const mapEmail2 = (arr) =>  arr.filter((obj) => obj.email.endsWith(".es")).reduce((mapa,obj) => mapa.set(`${obj.lastname}_${obj.firstname}`,obj.email), new Map());

console.log(mapEmail2(users));

// el "acc" es del valorInicial
const mapEmail3 = (arr) => arr.reduce((mapa,user) => user.email.endsWith(".es") ? mapa.set(`${user.lastname}_${user.firstname}`,user.email) : mapa, new Map());

console.log(mapEmail3(users));


const mapEmail4 = (arr) => (arr) => arr.reduce((mapa,{ email, lastname, firstname}) => email.endsWith(".es") ? mapa.set(`${lastname}_${firstname}`,email) : mapa, new Map());

console.log(mapEmail4);


