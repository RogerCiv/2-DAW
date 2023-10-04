/**
 * @author: Rogelio Sánchez Civantos
 * @description: Ejercicios de Objetos
 */


// Ejercicio 01:

//Escribe una función que tome un objeto. Debería devolver el valor de la propiedad cuya clave sea pais. Si no existiese dicha clave devolvería : "No se encuentra"

function pais(objeto) {
    if (objeto.hasOwnProperty('pais')) {
        return objeto.pais
    } else {
        return "No se encuentra"
    }
}

const objeto = { continente: "Europa", pais: "España"}

console.log(pais(objeto))



// Ejercicio 02

//Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.


function hasKey(a,b){
    if(a.hasOwnProperty(b)){
        return true
    }else{
        return false
    }
}


const a = { nombre: "perico", apellido: "palotes"}
const b = 'apellido'

console.log(hasKey(a,b))

// Ejercicio 03

//Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras,no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.

function isPropertyTrue(a,b){
    if(a.hasOwnProperty(b)){
        if(a[b] !== null && a[b] !== undefined && a[b] !== false){
            return true
        }
    }

    return false
}

const objeto1 = { id: 12, nombre: "Calimero" }
const cadena = "nombre"

console.log(isPropertyTrue(objeto1,cadena));

// Ejercicio 04

//Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad con la clave 'key' y un valor igual a la cadena. Devuelve el objeto.

function createObject(cadena){
    const object = { key: cadena}
    return object
}


const cadena2 = "Priscila"

console.log(createObject(cadena2));

// Ejercicio 05
//Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.


function createObject2(a,b){
    return { [a] : b}
}

const cadena3 = 'clave'
const cadena4 = 'valor'
console.log(createObject2(cadena3,cadena4));

// Ejercicio 06

//Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga propiedades con claves los elementos del array 'a' y con los valores correspondientes 'b'. Devuelve el objeto.

function createObject3(a,b){
    const object = {}

    for (const [i, subArrayA] of a.entries()) {
        const subArrayB = b[i];

        for (const [j, key] of subArrayA.entries()) {
            object[key] = subArrayB[j];
        }
    }
    return object
}

const array1 = [['clave1','clave2','clave3'], ['clave4','clave5','clave6']]
const array2 = [['valor1','valor2','valor3'], ['valor4','valor5','valor6']]

console.log(createObject3(array1,array2));


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

function obtainValues(object){
    if(object.hasOwnProperty('a') && object.a.hasOwnProperty('b')){
        return object.a.b
    }
    return undefined
}

const objeto5 = {
    a: {
      b: 'Hola, soy el valor de b'
    }
  };


console.log(obtainValues(objeto5))


// Ejercicio 09

//Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores (temperaturas) del objeto. Vamos a imaginar que el objecto tiene por claves meses del año y los valores de esas claves son temperaturas. Es necesario validar que los valores de las claves son números para realizar la suma

function temperatures(a){
    let suma = 0

    for( const c of Object.values(a)){
        if(typeof c === 'number'){
            suma += c;
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

console.log(temperatures(tempMeses))

// Ejercicio 10

//Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las propiedades del objeto original. excepto la propiedad con clave 'b

function returnProperty(object){
    const copyObject = { ...object }
    delete copyObject['b']
    return copyObject
}


const objeto6 = {a: 1, b: 2, c: 3, d: 4};

console.log(returnProperty(objeto6))


// Ejercicio 11
//Escribe una función que tome dos objetos como argumentos. Lamentablemente, la propiedad 'b' del segundo objeto tiene la clave incorrecta. En su lugar, debería llamarse 'd'. Fusione ambos objetos y corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'.

function fixProperty(obj1,obj2){
    const copyObject = { ...obj1, ...obj2}
    copyObject['d'] = copyObject['b']
    return Object.keys(copyObject).sort()
}

const objeto7 = {a: 1, b: 2};
const objeto8 = {c: 3, b: 4, e: 5};

console.log("Ejercicio 11",fixProperty(objeto7,objeto8));

//Ejercicio 12

//Escribe una función que tome un objeto (a) y un número (b) como argumentos. Multiplica todos los valores de 'a' por 'b'. Devuelve el objeto resultante. Comprobar que los valores de las claves de (a) son números para realizar la multiplicación.

function multiValues(a,b){
    const copyObject = { ...a }
    const keys = Object.keys(copyObject)
    for(const key of keys) {
        if(typeof copyObject[key] === 'number') {
            copyObject[key] *= b
        }else{
            delete copyObject[key]
        }
    }
    return copyObject
}

const objeto9 = {key1: 2, key2: 3, key3: 'no es un número'}
console.log(multiValues(objeto9, 2))

// Ejercicio 13

//Intercambiar claves y valores de objetos. Escribe una función que tome un objeto como argumento. De alguna manera, las propiedades y claves del objeto se mezclaron. Intercambia la clave del objeto Javascript con sus valores y devuelve el objeto resultante.


function changeObject(obj){
    const fixObject = { }

    for(const [key,value] of Object.entries(obj)){
        fixObject[value] = key
    }

    return fixObject
}


const objeto10 = {pepe: "name", perez: "apellido"}

console.log("Ejercicio 13: ",changeObject(objeto10));


// Ejercicio 14

//Reemplazar cadenas vacías en el objeto con valores nulos. Escriba una función que tome un objeto como argumento.Algunos de los valores de propiedad contienen cadenas vacías. Reemplace cadenas vacías y cadenas que contienen solo espacios en blanco con valores nulos. Devuelva el objeto resultante.

function replaceChains(obj){
    const copyObject = { ...obj }

    for(const key of Object.keys(copyObject)){
        if(copyObject[key] === "" || copyObject[key] === " "){
            copyObject[key] = null
        }
    }
    return copyObject
}


const objeto11 = { nombre: "pepe", apellido: "", email: " "}


console.log("Ejercicio 14: ",replaceChains(objeto11));

// Ejercicio 15

//Extraer información de objetos. Escriba una función que tome un objeto como argumento que contenga propiedades con información personal. Extraiga el nombre, el apellido, el tamaño y el peso,si están disponibles. Si se proporciona el tamaño o el peso, transforme el valor en una cadena.Adjunte la unidad cm al tamaño. Adjunte la unidad kg al peso Devuelve un nuevo objeto con todas las propiedades disponibles que nos interesan y sus modificaciones correspondientes

function extractObject(obj){
    const copyObject = {}

}

const objeto12 = { nombre: "pepe", apellido: "perez", altura: 180, peso: 80}
