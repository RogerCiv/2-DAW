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
const arraySuma = (array1,array2) => array1.map((elemento,indice) => elemento + array2[indice])

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
const filtrarPares = array => {
  return array.filter(num => num % 2 === 0)
} 
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

const texto = "Clase de DWEC el dia 26 septiembre, clase de javascript."
console.log("Ejercicio 5: ",contarPalabras(texto))
/*
const texto = "Clase de DWEC el dia 26 septiembre, clase de javascript. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
const  contarPalabras = cadena => cadena.split(' ').reduce((conteo, palabra) => (conteo[palabra] = (conteo[palabra] || 0) + 1, conteo), {}); 
console.log(contarPalabras(texto));
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
const ordenarNumeros = arr => {
  return arr.sort((a,b) => a-b);
}
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

console.log(eliminarElemento(palabras,"teclado"));


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
 * @description: 9) Crea una función llamada buscarElemento que tome un array arr y un elemento elemento . La función debe devolver el índice de la primera aparición de elemento en el array, o -1 si no se encuentra.

 */

/**
 * 
 * @param {*} arr 
 * @param {*} elemento 
 * @returns 
 */
const buscarElemento = (arr, elemento) => arr.indexOf(elemento);

console.log(buscarElemento("Ejercicio 09: ",numeros, 3));


/**
 * @author: Rogelio Sánchez
 * @description: 10) Escribe una función llamada dividirFragmento que tome un array arr y un número entero tamano. La función debe dividir el array en fragmentos de tamaño tamano y devolver un nuevo array con los Fragmentos.
 */

/**
 * 
 * @param {*} arr 
 * @param {*} tamano 
 * @returns 
 */
function dividirFragmento(arr,tamano){
  const resultado = []
  
  for(let i = 0; i<arr.length; i+=tamano){
    resultado.push(arr.slice(i,i + tamano))
  }
  return resultado
}
/*
const dividirFragmento = (arr, tamano) => arr.reduce((resultado, elemento, indice) => (indice % tamano === 0 ? resultado.push([elemento]) : resultado[resultado.length - 1].push(elemento), resultado), []);
*/
const array = [1, 2, 3, 4, 5, 6];
console.log("Ejercicio 10:",dividirFragmento(array, 3));

/**
 * @author: Rogelio Sánchez
 * @description: 11) Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una función funcion. La función debe aplicar la función proporcionada a cada elemento del array y devolver un nuevo array con los resultados de la función aplicada a cada elemento.
 */


const numeros = [1, 2, 3, 4, 5, 6];

const pares = (num) => (num % 2 === 0 ? num : null);

const mapearNumeros = (arr, funcion) =>  arr.map(num => funcion(num)).filter(num => num !== null);

const numerosPares = mapearNumeros(numeros, pares);


console.log("Ejercicio 11: ",mapearNumeros(numeros, pares));


/**
 * @author:Rogelio Sánchez
 * @description:14) Escribe una función llamada rangoNumeros que tome dos números inicio y fin. La función debe devolver un array que contenga todos los números en el rango desde inicio hasta fin, incluyendo ambos números.
 */


const rangoNumeros = (inicio,fin) => {
  const resultado = []
 
  for(let i = inicio; i<=fin ; i++){
    resultado.push(i)
  }
  return resultado
 
}
//const rangoNumeros = (inicio, fin) => [...Array(fin - inicio + 1)].map((_, index) => inicio + index);

console.log("Ejercicio 14:",rangoNumeros(2,5))


/**
 * @author: Rogelio Sánchez
 * @description: 15) Define una función llamada invertirCadena que tome una cadena cadena y devuelva una nueva cadena con los caracteres en orden inverso.
 */

/**
 * 
 * @param {*} cadena 
 * @returns 
 */
const invertirCadena = cadena => cadena.split('').reverse().join('')


const texto = 'Hola que tal'
invertirCadena(texto)


/**
 * @author: Rogelio Sánchez
 * @description: Crea una función llamada capitalizarPalabras que tome una cadena cadena y devuelva una nueva cadena en la que la primera letra de cada palabra esté en mayúscula y las demás en minúscula.
 */


const capitalizarPalabras = (cadena) => cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ')


const texto = 'hola que tal'
capitalizarPalabras(texto)


/**
 * @author: Rogelio Sánchez
 * @description: 17) Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y un número escalar. La función debe multiplicar cada elemento de la matriz por el escalar y devolver una nueva matriz con los resultados.
 */
/*
const multiplicarMatrizPorEscalar = (matriz,escalar) =>{
  const matrix2 = []
  for(let i = 0 ; i<matriz.length; i++){
    const fila = []
   for(let j = 0; j<matriz[i].length; j++){
     fila.push(matriz[i][j] * escalar)
   }
     matrix2.push(fila)
  }
  return matrix2
}
const matrix = [
  [1,2,3,4],
  [5,6,7,8]
]
*/
const multiplicarMatrizPorEscalar = (matriz,escalar) => matriz.map(fila => fila.map(el => el * escalar))

console.log("Ejercicio 17: ",multiplicarMatrizPorEscalar(matrix,2));

/**
 * @author: Rogelio Sánchez
 * @description: 19) Escribe una función llamada esPalindromo que verifique si una palabra es un palíndromo, es decir, se lee igual de izquierda a derecha y de derecha a izquierda. La función debe devolver true si la palabra es un palíndromo y false en caso contrario.
 */

const esPalindromo = palabra =>  palabra.split('').reverse().join('') === palabra

const texto = 'hola'
console.log("Ejercicio 18: ",esPalindromo(texto))


/**
 * @author: Rogelio Sánchez
 * @description: 20) Escribe una función llamada diferenciaArrays que encuentre la diferencia entre dos arrays, es decir, los elementos que están en uno pero no en el otro. La función debe devolver un nuevo array con los elementos diferentes.
 */

const diferenciaArrays = (arr1,arr2) => arr1.filter(el => !arr2.includes(el))


const num1 = [1,2,3]
const num2 = [3,5,6]

console.log("Ejercicio 20: ",diferenciaArrays(num1,num2))



//Escribe una función llamada sumarMatrices que sume dos matrices (arrays bidimensionales) y devuelva el resultado. Las matrices de entrada estarán representadas como arrays de arrays con la misma cantidad de filas y columnas.

const sumaMatrices = (arr1,arr2) => {
  const resultado = []
  
  for(let i = 0; i< arr1.length ; i++){
    const fila = []
    for(let j = 0; j< arr1[i].length; j++){
      fila.push(arr1[i][j] + arr2[i][j])
    }
    resultado.push(fila)
      
  }
  return resultado
}


const sumaMatrices = (arr1,arr2) => arr1.map((fila,i) => fila.map((elemento, j) => elemento + arr2[i][j]))

const array1 = [
  [1,2,3],
  [4,5,6],
]
const array2 = [
  [7,8,9],
  [10,11,12],
]

sumaMatrices(array1,array2)