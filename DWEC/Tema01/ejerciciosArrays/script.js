/**
 * @author: Rogelio Sánchez
 * @description: Escribe una función llamada sumaArrays que tome dos arrays arr1 y arr2 del mismo tamaño. La función debe devolver un nuevo array que contenga la suma de los elementos correspondientes de arr1 y arr2 .
 */

/**
 * 
 * @param {array1} array1 
 * @param {array2} array2 
 * @returns 
 */
const arraySuma = (array1,array2) => array1.map((elemento,indice) => elemento + array2[indice])

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]

console.log(arraySuma(array1,array2))

/**
 * @author: Rogelio Sánchez
 * @description: Define una función llamada eliminarDuplicados que tome un array arr . La función debe eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo el orden original.
 */

const filtrar = array => palabras.filter(palabra => palabra === palabra)
// Mal.
const palabras = ["teclado","raton","teclado","monitor","portatil","raton"];
console.log(filtrar(palabras))


/**
 * @author: Rogelio Sánchez
 * @description: Crea una función llamada filtrarPares que tome un array de números arr y devuelva un nuevo array que contenga solo los números pares
 */

/**
 * 
 * @param {array} array 
 * @returns 
 */
const filtrarPares = array => {
  return array.filter(num => num % 2 === 0)
} 
const numeros = [1,2,3,4,5,6]
filtrarPares(numeros)


/**
 * @author: Rogelio Sánchez
 * @description: Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
 */

/**
 * 
 * @param  {...any} args 
 * @returns 
 */
function unirArrays(...args) {
  return args.reduce((resultado,array) => resultado.concat(array),[])
}

unirArrays(numeros,palabras)

// Define una función llamada contarPalabras que tome una cadena de texto texto y devuelva un objeto que cuente cuántas veces aparece cada palabra en el texto.
//Falta por 
const texto = "Clase de DWEC el dia 26 septiembre, clase de javascript."
function contarPalabras(cadena){
  return 
}

/**
 * @author: Rogelio Sánchez
 * @description: Crea una función llamada ordenarNumeros que tome un array de números arr y lo ordene de menor a mayor
 */

/**
 * 
 * @param {*} arr 
 * @returns 
 */
const ordenarNumeros = arr => {
  return arr.sort((a,b) => a-b);
}
const num = [5,2,10,4,25];
console.log(ordenarNumeros(num));


/**
 * @author: Rogelio Sánchez
 * @description: Escribe una función llamada eliminarElemento que tome un array arr y un elemento elemento , y elimine la primera aparición de ese elemento en el array
 */

/**
 * 
 * @param {*} array 
 * @param {*} elemento 
 * @returns 
 */
const eliminarElemento = (array,elemento) => {
  return array.filter(el => el !== elemento)
}

console.log(eliminarElemento(palabras,"teclado"));

