/**
 * @author: Rogelio Sánchez
 * @description: 1) Escribe una función llamada sumaArrays que tome dos arrays arr1 y arr2 del mismo tamaño. La función debe devolver un nuevo array que contenga la suma de los elementos correspondientes de arr1 y arr2 .
 */

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const resultado = [];

const arraySuma = (arr1, arr2) =>
  arr1.reduce((acc, valor, index) => {
    acc.push(valor + arr2[index]);
    return acc;
  }, []);

console.log("Ejercicio 01:", arraySuma(array1, array2));

/**
 * @author: Rogelio Sánchez
 * @description: 2) Define una función llamada eliminarDuplicados que tome un array arr . La función debe eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo el orden original.
 */

const palabras = [
  "teclado",
  "ratón",
  "teclado",
  "monitor",
  "portátil",
  "ratón",
];

const eliminarDuplicados = (arr) =>
  arr.filter((el, index) => arr.indexOf(el) === index);

console.log("Ejercicios 02:", eliminarDuplicados(palabras));
//Resultado esperado: [ 'teclado', 'ratón', 'monitor', 'portátil' ]

/**
 * @author: Rogelio Sánchez
 * @description: 3) Crea una función llamada filtrarPares que tome un array de números arr y devuelva un nuevo array que contenga solo los números pares
 */

const numeros3 = [1, 2, 3, 4, 5, 6];

const filtrarPares = arr => arr.filter(el => el % 2 === 0)
console.log("Ejercicio 03:", filtrarPares(numeros3));
//Resultado esperado: [ 2, 4, 6 ]

/**
 * @author: Rogelio Sánchez
 * @description: 4) Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
 */

const numeros2 = [1, 2, 3, 4, 5, 6];
const palabras2 = [
  "teclado",
  "ratón",
  "teclado",
  "monitor",
  "portátil",
  "ratón",
];

const unirArrays = ( ...args ) => args.reduce((acc,arr) => acc.concat(arr),[] )
console.log("Ejercicio 04: ", unirArrays(numeros2, palabras2));
//Resultado esperado:[ 1, 2, 3, 4, 5, 6, 'teclado', 'ratón', 'teclado', 'monitor', 'portátil', 'ratón' ]

/**
 * @author: Rogelio Sánchez
 * @description: 5) Define una función llamada contarPalabras que tome una cadena de texto texto y devuelva un objeto que cuente cuántas veces aparece cada palabra en el texto.
 */

const texto2 = "Clase de DWEC el dia 26 septiembre, clase de javascript.";
//console.log("Ejercicio 5: ", contarPalabras(texto2));

/**
 * @author: Rogelio Sánchez
 * @description: 6) Crea una función llamada ordenarNumeros que tome un array de números arr y lo ordene de menor a mayor
 */
const ordenarNumeros = arr => arr.sort((a,b) => a - b)
const num = [5, 2, 10, 4, 25];
console.log("Ejercicio 06: ", ordenarNumeros(num));

/**
 * @author: Rogelio Sánchez
 * @description: 7) Escribe una función llamada eliminarElemento que tome un array arr y un elemento elemento , y elimine la primera aparición de ese elemento en el array
 */

const eliminarElemento = (arr,elemento) => arr.filter(el => el !== elemento)
console.log("Ejercicio 07: ", eliminarElemento(palabras, "teclado"));

/**
 * @author: Rogelio Sánchez
 * @description: 8) Define una función llamada encontrarMaxMin que tome un array de números arr y devuelva un objeto con las propiedades max y min , que contengan el valor máximo y mínimo del array, respectivamente.
 */
const encontrarMaxMin = arr => ({maxim:Math.max(...arr), Minimo: Math.min(...arr)} )
const numeros4 = [1, 2, 3, 4, 5];
console.log("Ejercicio 08: ", encontrarMaxMin(numeros4));

/**
 * @author: Rogelio Sánchez
 * @description: 9) Crea una función llamada buscarElemento que tome un array arr y un elemento elemento . La función debe devolver el índice de la primera aparición de elemento en el array, o -1 si no se encuentra.
*/

const buscarElemento = (arr,elemento) =>  arr.indexOf(elemento);

const numeros5 = [1, 2, 3, 4, 5, 6];


console.log("Ejercicio 09: ",buscarElemento(numeros5, 3));


/**
 * @author: Rogelio Sánchez
 * @description: 10) Escribe una función llamada dividirFragmento que tome un array arr y un número entero tamano. La función debe dividir el array en fragmentos de tamaño tamano y devolver un nuevo array con los Fragmentos.
 */

const array8 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log("Ejercicio 10:", dividirFragmento(array8, 3));

/**
 * @author: Rogelio Sánchez
 * @description: 11) Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una función funcion. La función debe aplicar la función proporcionada a cada elemento del array y devolver un nuevo array con los resultados de la función aplicada a cada elemento.
 */

const numeros = [1, 2, 3, 4, 5, 6];

console.log("Ejercicio 11: ", mapearNumeros(numeros, pares));

/**
 * @author: Rogelio Sánchez
 * @description: 12)Escribe una función llamada combinarObjetos que tome dos objetos (tanto arrays como objetos) obj1 y obj2 . La función debe combinar ambos objetos en uno solo y devolverlo.
 */

const objeto1 = [
  { nombre: "Pepe", edad: 22 },
  { nombre: "María", edad: 25 },
];

const objeto2 = [
  { nombre: "Sara", edad: 30 },
  { nombre: "Sabrina", edad: 33 },
];

combinarObjetos(objeto1, objeto2);

/**
 * @author: Rogelio Sánchez
 * @description: 13)Define una función llamada extraerPropiedades que tome un objeto obj y un array de propiedades . La función debe devolver un nuevo objeto que contenga solo las propiedades especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en el nuevo objeto.
 */

const objeto3 = { nombre: "Pepe", edad: 22, id: 2 };

const objeto4 = [
  { nombre: "Pepe", edad: 22, id: 2 },
  { nombre: "María", edad: 25, id: 3 },
  { nombre: "Sara", edad: 30, id: 4 },
  { nombre: "Sabrina", edad: 33, id: 1 },
];

extraerPropiedades(objeto3, ["nombre", "edad"]);
/**
 * @author:Rogelio Sánchez
 * @description:14) Escribe una función llamada rangoNumeros que tome dos números inicio y fin. La función debe devolver un array que contenga todos los números en el rango desde inicio hasta fin, incluyendo ambos números.
 */

console.log("Ejercicio 14:", rangoNumeros(2, 5));

/**
 * @author: Rogelio Sánchez
 * @description: 15) Define una función llamada invertirCadena que tome una cadena cadena y devuelva una nueva cadena con los caracteres en orden inverso.
 */

const texto3 = "Hola que tal";
invertirCadena(texto3);

/**
 * @author: Rogelio Sánchez
 * @description: 16) Crea una función llamada capitalizarPalabras que tome una cadena cadena y devuelva una nueva cadena en la que la primera letra de cada palabra esté en mayúscula y las demás en minúscula.
 */

const texto4 = "hola que tal";
capitalizarPalabras(texto4);

/**
 * @author: Rogelio Sánchez
 * @description: 17) Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y un número escalar. La función debe multiplicar cada elemento de la matriz por el escalar y devolver una nueva matriz con los resultados.
 */

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

console.log("Ejercicio 17: ", multiplicarMatrizPorEscalar(matrix, 2));

/**
 * @author: Rogelio Sánchez
 * @description: 18)Escribe una función llamada combinarArrays que pase como parámetro "creciente" o "decreciente", junto con un número indeterminado de arrays con valores numéricos. Seguidamente me devolverá un array con todos los elementos que conformen los arrays ordenado creciente u ordenado decreciente según indique en el parámetro. Si no indico nada se hará de forma creciente.
 */

const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const array5 = [9, 8, 7];

console.log("Ejercicio 18: ", combinarArrays("", array3, array4, array5));

/**
 * @author: Rogelio Sánchez
 * @description: 19) Escribe una función llamada esPalindromo que verifique si una palabra es un palíndromo, es decir, se lee igual de izquierda a derecha y de derecha a izquierda. La función debe devolver true si la palabra es un palíndromo y false en caso contrario.
 */

const texto = "hola";
console.log("Ejercicio 18: ", esPalindromo(texto));

/**
 * @author: Rogelio Sánchez
 * @description: 20) Escribe una función llamada diferenciaArrays que encuentre la diferencia entre dos arrays, es decir, los elementos que están en uno pero no en el otro. La función debe devolver un nuevo array con los elementos diferentes.
 */

const num1 = [1, 2, 3];
const num2 = [3, 5, 6];

console.log("Ejercicio 20: ", diferenciaArrays(num1, num2));

//Escribe una función llamada rotarArray que rote los elementos de un array hacia la derecha o izquierda. La función debe tomar un array arr y un número entero pasos que indique cuántos pasos se deben realizar hacia la derecha (si es positivo) o hacia la izquierda (si es negativo).

const miArray = [1, 2, 3, 4, 5];

console.log("Ejercicio 21: ", rotarArray(miArray, 3));
/**
 * @author: Rogelio Sánchez
 * @description: 22) Escribe una función llamada sumarMatrices que sume dos matrices (arrays bidimensionales) y devuelva el resultado. Las matrices de entrada estarán representadas como arrays de arrays con la misma cantidad de filas y columnas.
 */

const array6 = [
  [1, 2, 3],
  [4, 5, 6],
];
const array7 = [
  [7, 8, 9],
  [10, 11, 12],
];

console.log("Ejercicio 22: ", sumaMatrices(array6, array7));

/**
 * @author: Rogelio Sánchez
 * @description:23) Escribe una función llamada promedioFilas que calcule el promedio de cada fila en una matriz (array bidimensional) y devuelva un array con los resultados.
 */

const array = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log("Ejercicio 23: ", promedioFilas(array));

/**
 * @author: Rogelio Sánchez
 * @description: 24) Escribe una función llamada ordenarPorPropiedad que ordene un array de objetos por una propiedad específica. La función debe tomar un array arr y una cadena propiedad que indique la propiedad por la cual se debe ordenar.
 */

/**
 *
 * @param {*} arr
 * @param {*} propiedad
 * @returns
 */

const personas = [
  { nombre: "Carlos", edad: 25, id: 1 },
  { nombre: "Elena", edad: 35, id: 3 },
  { nombre: "Ana", edad: 30, id: 2 },
];

// Ejercicio 25:
