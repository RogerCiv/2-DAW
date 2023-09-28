/**
 * @author: Rogelio Sánchez
 * @description: 1) Escribe una función llamada sumaArrays que tome dos arrays arr1 y arr2 del mismo tamaño. La función debe devolver un nuevo array que contenga la suma de los elementos correspondientes de arr1 y arr2 .
 */
/**
 * 
 * @param {array1} array1 
 * @param {array2} array2 
 * @returns 
 */
const arraySuma = (array1,array2) => array1.length !== array2.length ? "No tienen el mismo tamaño" : array1.map((elemento,indice) => elemento + array2[indice])


const resultado = []

if(array1.length !== array2.length){
  throw new Error('No tienen el mismo tamaño');
}else{
  for (const [num,indice] of array1.entries()){

  }
}

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]

console.log("Ejercicio 01:",arraySuma(array1,array2))

/**
 * @author: Rogelio Sánchez
 * @description: 2) Define una función llamada eliminarDuplicados que tome un array arr . La función debe eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo el orden original.
 */

/**
 * 
 * @param {*} arr 
 * @returns 
 */
// filter() para iterar por cada elemento del array.
// indexOf() para obtener la posición del elemento actual del array
// elemento === indice para comparar la primera vez que aparece el elemento con el indice actual.
const eliminarDuplicados = (arr) => arr.filter((elemento,indice) => arr.indexOf(elemento) === indice)

const palabras = ["teclado", "ratón", "teclado", "monitor", "portátil", "ratón"];
console.log("Ejercicios 02:",eliminarDuplicados(palabras));
//Resultado esperado: [ 'teclado', 'ratón', 'monitor', 'portátil' ]


/**
 * @author: Rogelio Sánchez
 * @description: 3) Crea una función llamada filtrarPares que tome un array de números arr y devuelva un nuevo array que contenga solo los números pares
 */

/**
 * 
 * @param {array} array 
 * @returns 
 */
//filter() para iterar por cada elemento y comprobando si es par con num % 2 === 0
const filtrarPares = array =>  array.filter(num => num % 2 === 0)
const numeros = [1,2,3,4,5,6]
console.log("Ejercicio 03:",filtrarPares(numeros))
//Resultado esperado: [ 2, 4, 6 ]

/**
 * @author: Rogelio Sánchez
 * @description: 4) Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
 */
/**
 * 
 * @param  {...any} args 
 * @returns 
 */
// Le pasamos ...args el cual permite pasar "x" argumentos.
// reduce() iniciamos el acumulador vacío "[]" en cada iteración del reduce() el array actual se concat() con el acumulador
const unirArrays = (...args) => args.reduce((acc,array) => acc.concat(array),[])

const numeros2 = [1,2,3,4,5,6]
const palabras2 = ["teclado", "ratón", "teclado", "monitor", "portátil", "ratón"];
console.log("Ejercicio 04: ",unirArrays(numeros2,palabras2))
//Resultado esperado:[ 1, 2, 3, 4, 5, 6, 'teclado', 'ratón', 'teclado', 'monitor', 'portátil', 'ratón' ] 


/**
 * @author: Rogelio Sánchez
 * @description: 5) Define una función llamada contarPalabras que tome una cadena de texto texto y devuelva un objeto que cuente cuántas veces aparece cada palabra en el texto.
 */


const contarPalabras = (cadena) => {
  const palabras = cadena.split(' ');
  
  const numPalabras = {};

  palabras.forEach((palabra => {
    if(numPalabras[palabra]){
      numPalabras[palabra] += 1;
    }else {
      numPalabras[palabra] = 1;
    }
  }));
  return numPalabras;
}
const texto = "Clase de DWEC el dia 26 septiembre clase de javascript."
console.log("Ejercicio 05: ",contarPalabras(texto))
/*
const texto = "Clase de DWEC el dia 26 septiembre, clase de javascript."
const  contarPalabras = cadena => cadena.split(' ').reduce((conteo, palabra) => (conteo[palabra] = (conteo[palabra] || 0) + 1, conteo), {});
*/
/**
 * @author: Rogelio Sánchez
 * @description: 6) Crea una función llamada ordenarNumeros que tome un array de números arr y lo ordene de menor a mayor
 */

/**
 * 
 * @param {*} arr 
 * @returns 
 */
const ordenarNumeros = arr => arr.sort((a,b) => a-b);

const num = [5,2,10,4,25];
console.log("Ejercicio 06: ",ordenarNumeros(num));


/**
 * @author: Rogelio Sánchez
 * @description: 7) Escribe una función llamada eliminarElemento que tome un array arr y un elemento elemento , y elimine la primera aparición de ese elemento en el array
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

console.log("Ejercicio 07: ",eliminarElemento(palabras,"teclado"));


/**
 * @author: Rogelio Sánchez
 * @description: 8) Define una función llamada encontrarMaxMin que tome un array de números arr y devuelva un objeto con las propiedades max y min , que contengan el valor máximo y mínimo del array, respectivamente.
 */

/**
 * 
 * @param {*} arr 
 * @returns 
 */
const encontrarMaxMin = (arr) => ({máximo: Math.max(...arr), mínimo: Math.min(...arr)})
//const numeros = [1,2,3,4,5]
console.log("Ejercicio 08: ",encontrarMaxMin(numeros))


/**
 * @author: Rogelio Sánchez
 * @description: Crea una función llamada buscarElemento que tome un array arr y un elemento elemento . La función debe devolver el índice de la primera aparición de elemento en el array, o -1 si no se encuentra.

 */

/**
 * 
 * @param {*} arr 
 * @param {*} elemento 
 * @returns 
 */
const buscarElemento = (arr, elemento) => arr.indexOf(elemento);

console.log("Ejercicio 09: ",buscarElemento(numeros, 3));


/**
 * @author: Rogelio Sánchez
 * @description: 10) Escribe una función llamada dividirFragmento que tome un array arr y un número entero
tamano . La función debe dividir el array en fragmentos de tamaño tamano y devolver un nuevo
array con los Fragmentos.
 */


/**
 * 
 * @param {*} arr 
 * @param {*} split 
 * @returns 
 */
const dividirFragmento = (arr,split) => {
  const resultado = []
  
  for (let i = 1; i< arr.length; i += split){
    resultado.push(arr.slice(i, i + split))
  }
  return resultado;
}


const array = [1,2,3,4,5,6];
console.log("Ejercicio 10: ",dividirFragmento(array,2))



