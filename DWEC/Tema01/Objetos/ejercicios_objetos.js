/**
 * @author: Rogelio Sánchez Civantos
 * @description: Ejercicios de Objetos
 */


// Ejercicio 01:

//Escribe una función que tome un objeto. Debería devolver el valor de la propiedad cuya clave sea pais. Si no existiese dicha clave devolvería : "No se encuentra"


function pais(object) {
    if(object.hasOwnProperty("pais")){
        return object.pais;
    }
    return "No se encuentra";
}


const objeto = { pais: "España", ciudad: "Granada"}

console.log("Ejercicio 01: ",objeto.pais);


// Ejercicio 02

//Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.

function hasProperty(a,b){
    if(a.hasOwnProperty(b)){
        return true;
    }
    return false;
}

const objeto2 = {a: 1, b: 2};

console.log("Ejercicio 02: ",hasProperty(objeto2,"b"));



// Ejercicio 03

//Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras,no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.


function hasProperty2(a,b){
    if(a.hasOwnProperty(b)){
        if(a[b] !== null && a[b] !== undefined && a[b] !== false){
            return true
        }
    }
    return false;
}

const objeto1 = { id: 12, nombre: "Calimero" }
const cadena = "nombre"

console.log("Ejercicio 03: ",hasProperty2(objeto1,cadena));


// Ejercicio 04

//Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad con la clave 'key' y un valor igual a la cadena. Devuelve el objeto.

function createObject(cadena){
    return { key: cadena }
}

const cadena1 = "perico";

console.log("Ejercicio 04: ",createObject(cadena1));


// Ejercicio 05
//Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.


function createObject2(a,b){
    return {[a]:b}
}

const cadena2 = "priscila";
const cadena3 = "radeon";

console.log("Ejercicio 05: ",createObject2(cadena2,cadena3));

// Ejercicio 06

//Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga propiedades con claves los elementos del array 'a' y con los valores correspondientes 'b'. Devuelve el objeto.


function createObject3(matriz1,matriz2){
   
    if(matriz1.length !== matriz2.length){
        return 'Las matrices deben tener la misma longitud';
    }
   const newObject = {};
    for(let i=0; i< matriz1.length; i++){
    
        for(let j=0; j< matriz2[i].length; j++){
            if(matriz1[i][j]!== matriz2[i][j]){
                return 'Las matrices deben tener la misma longitud';
            }
            newObject[matriz1[i]] = matriz2
        }
    }
    
}


const matriz = [[1,2,3,4],[1,3,4,8],[4,5,7,8]];
const matriz2 = [[1,2,3,4],[4,5,6,8],[2,3,4,5]];

console.log("Ejercicio 06: ",createObject3(matriz,matriz2));



// Ejercicio 07

//Escribe una función que tome un objeto (a) como argumento. Devuelve una matriz con todas las claves de los objetos.

function returnKeys(a){
    const keys = []
    for( const key of Object.keys(a)){
         keys.push(key)
    }
    return keys
}

const objeto4 = {id: 2, nombre: 'Peppa', apellido: "pig"}

console.log("Ejercicio 07:",returnKeys(objeto4));


// Ejercicio 08

//Escribe una función que tome un objeto como argumento. Dicho objeto tienen como argumento o valor dentro de la clave 'a' el valor 'b' que puede o no tener otras subclaves. Se pide obtener la propiedad 'b' del objeto 'a' en caso de que exista. Si no existe devolverá undefined.



function existValue(object){
    if(object.hasOwnProperty("a")){
        if(object.a.hasOwnProperty("b")){
            return object.a.b;
    }
    }
    return undefined;

}

const objeto5 = {
    a: {
        b: 'Hola soy B',
    }
}

console.log("Ejercicio 08: ",existValue(objeto5))



// Ejercicio 09

//Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores (temperaturas) del objeto. Vamos a imaginar que el objecto tiene por claves meses del año y los valores de esas claves son temperaturas. Es necesario validar que los valores de las claves son números para realizar la suma



function temperatures(a){
    let suma = 0;
    for( const value of Object.values(a)){
        if(typeof value === 'number'){
            suma += value
        }  
    }
    return suma
}

const tempMeses = {
    enero: 5,
    febrero: 6,
    marzo: 4,
    abril: 15,
    mayo: 20,
    junio: 29,
    julio: 35,
    agosto: 38,
    septiembre: 32,
    octubre: 25,
    noviembre: 16,
    diciembre: 10
}

console.log("Ejercicio 09: ",temperatures(tempMeses))


// Ejercicio 10

//Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las propiedades del objeto original. excepto la propiedad con clave 'b


function returnProperty(object) {
    const copyObject = { ...object };
    delete copyObject.b;
    return copyObject;
}



const objeto6 = { a: 1,b:2,c:3}

console.log("Ejercicio 10: ",returnProperty(objeto6));


// Ejercicio 11
//Escribe una función que tome dos objetos como argumentos. Lamentablemente, la propiedad 'b' del segundo objeto tiene la clave incorrecta. En su lugar, debería llamarse 'd'. Fusione ambos objetos y corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'.


function fixProperty(obj1,obj2){
    if('b' in obj2){
        obj2['d'] = obj2['b'];
        delete obj2['b'];
    }

    const newObject = { ...obj1, ... obj2 };
    return newObject;
}


const objeto7 = {a: 1, b: 2};
const objeto8 = {c: 3, b: 4, e: 5};

console.log("Ejercicio 11: ",fixProperty(objeto7,objeto8));



//Ejercicio 12

//Escribe una función que tome un objeto (a) y un número (b) como argumentos. Multiplica todos los valores de 'a' por 'b'. Devuelve el objeto resultante. Comprobar que los valores de las claves de (a) son números para realizar la multiplicación.


function multiplicar(a,b){
    const copyObject = { ...a } ;

    for(const key of Object.keys(copyObject)){
        if(typeof copyObject[key] === 'number'){
            copyObject[key] *= b;
        }
    }
    return copyObject;
}

const objeto9 = {key1: 2, key2: 3, key3: 'no es un número'}
console.log("Ejercicio 12: ",multiplicar(objeto9,2));



// Ejercicio 13

//Intercambiar claves y valores de objetos. Escribe una función que tome un objeto como argumento. De alguna manera, las propiedades y claves del objeto se mezclaron. Intercambia la clave del objeto Javascript con sus valores y devuelve el objeto resultante.


function fixObject(object) {
    const newObject = {}
    for(const key of Object.keys(object)){
        newObject[object[key]] = key;
    }
    return newObject;
}

const objeto10 = {pepe: "name", perez: "apellido"}

console.log("Ejercicio 13: ",fixObject(objeto10));



// Ejercicio 14

//Reemplazar cadenas vacías en el objeto con valores nulos. Escriba una función que tome un objeto como argumento.Algunos de los valores de propiedad contienen cadenas vacías. Reemplace cadenas vacías y cadenas que contienen solo espacios en blanco con valores nulos. Devuelva el objeto resultante.
/*

function replaceChains(object) {
    const newObject = { ...object };
    for(const key of Object.keys(newObject)){
        if(newObject[key] === "" || newObject[key] === " "){
            newObject[key] = null;
        }
     
    }
    return newObject;
}
*/


const replaceChains = object => Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: (object[key].trim() === "") ? null : object[key]}),{});

/*
const replaceChains = object => Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: object[key].trim() || null }), {});
*/

const objeto11 = { nombre: "pepe", apellido: "", email: " "};

console.log("Ejercicio 14: ",replaceChains(objeto11));



// Ejercicio 15

//Extraer información de objetos. Escriba una función que tome un objeto como argumento que contenga propiedades con información personal. Extraiga el nombre, el apellido, el tamaño y el peso,si están disponibles. Si se proporciona el tamaño o el peso, transforme el valor en una cadena.Adjunte la unidad cm al tamaño. Adjunte la unidad kg al peso Devuelve un nuevo objeto con todas las propiedades disponibles que nos interesan y sus modificaciones correspondientes.



function extractObject(obj){
    const { nombre, apellido, altura, peso } = obj
    const copyObject = { nombre, apellido, altura, peso }

    if(obj.altura){
        copyObject.altura = obj.altura + " cm"
    }
    if(obj.peso){
        copyObject.peso = obj.peso + " kg"
    }
    return copyObject
}

/*
const extractObject = obj => Object.keys(obj).map(p => p === "altura" ? obj[p] = obj[p]+" cm" : p === "peso" ? obj[p]+" kg" : p);
*/
const objeto12 = { nombre: "pepe", apellido: "perez", altura: 180, peso: 80};

console.log(extractObject(objeto12));


//Ejercicio 16

//Agregar propiedad a cada objeto en la matriz. Escribe una función que tome un Array de objetos y una cadena como argumentos. Agrega una propiedad con clave 'continente' y valor igual a la cadena a cada uno de los objetos. Devuelve el nuevo arreglo de objetos


function addProperty(arr,cadena) {
    const copyArr = [ ...arr ]

    copyArr.forEach(object => object.continente = cadena)
    return copyArr
}



const arrayDeObjetos = [
    {
      nombre: "Juan",
      apellido: "Pérez",
      altura: 175,
      peso: 70,
    },
    {
      nombre: "María",
      apellido: "López",
      altura: 160,
      peso: 55,
    },
    {
      nombre: "Carlos",
      apellido: "Gómez",
      altura: 185,
      peso: 80,
    },
    {
      nombre: "Laura",
      apellido: "Martínez",
      altura: 162,
      peso: 58,
    },
  ];
  
  console.log("Ejercicio 16: ",addProperty(arrayDeObjetos,"europa"));


  // Ejercicio 17

  //Convertir matriz en objeto con contador. Escriba una función que tome una matriz de números como argumento. Convierta la matriz en un objeto. Debe tener una clave para cada valor único de la matriz. El valor del objeto correspondiente debe ser el número de veces que aparece la clave dentro de la matriz

  function matrizToObject(matriz) {
    const newObject = [].concat(...matriz);
    const contador = {};

    for(const key of newObject) {
        if(contador[key]){
            contador[key]++;
        }else{
            contador[key] = 1;
        }
    }
    return contador;

  }

  
  const matriz3 = [[1,2,3,4],[1,3,4,8],[4,5,7,8]];
  console.log("Ejercicio 17: ",matrizToObject(matriz));




