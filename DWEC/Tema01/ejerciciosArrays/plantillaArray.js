/**
 * 1
 * Escribe una función llamada sumaArrays que tome dos arrays arr1 y arr2 del mismo tamaño. La función debe devolver un nuevo array que contenga la suma de los elementos correspondientes de arr1 y arr2.
 */

const sumaArrys = (arr1, arr2) => arr1.map((el,indice) => el + arr2[indice])

console.log("Ejercicio 01",sumaArrys([1, 2, 3], [3, 2, 1])); // 4,4,4


/**
 * 2
 * Define una función llamada eliminarDuplicados que tome un array arr. La función debe eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo el orden original.
 */

const eliminarDuplicados = (arr) => arr.filter((elemento,indice) => arr.indexOf(elemento) === indice)

console.log("Ejercicio 02",eliminarDuplicados([1, 1, 2, 2, 2, 3, 3, 4, 23, 3, 1, 4]));

/**
 * 3
 * Crea una función llamada filtrarPares que tome un array de números arr y devuelva un nuevo array que contenga solo los números pares.
 */

const filtrarPares = arr => arr.filter(num => num % 2 === 0)

console.log("Ejercicio 03",filtrarPares([1, 2, 3, 4, 5, 6]));

/**
 * 4
 * Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
 */


const unirArrays = (...arr) => arr.reduce((acc, arr) => acc.concat(arr),[])

console.log("Ejercicio 04",unirArrays([1, 2, 3], [1, 2, 3]));

/**
 * 5
 * Define una función llamada contarPalabras que tome una cadena de texto texto y devuelva un objeto que cuente cuántas veces aparece cada palabra en el texto.
 */

function contarPalabras(str) {
  const palabras = str.split('');

  const numPalabras = {}

  palabras.forEach((palabra) => {
    if(numPalabras[palabra]){
      numPalabras[palabra] += 1
    }else{
      numPalabras[palabra] =1
    }
  })
  return numPalabras;
}

console.log("Ejercicio 05",contarPalabras("a a a b b c c c c d"));

/**
 * 6
 * Crea una función llamada ordenarNumeros que tome un array de números arr y lo ordene de menor a mayor .
 */

const ordenarNumeros = arr => arr.sort((a,b) => a-b)

console.log("Ejercicio 06",ordenarNumeros([3, 2, 1, 11]));

/**
 * 7.
 * Escribe una función llamada eliminarElemento que tome un array arr y un elemento elemento, y elimine la primera aparición de ese elemento en el array.
 */
const eliminarElemento = (arr,el) => arr.filter(elemento => elemento !== el)

console.log("Ejercicio 07",eliminarElemento([1, 2, 3, 4], 2));

/**
 * 8.
 * Define una función llamada encontrarMaxMin que tome un array de números arr y devuelva un objeto con las propiedades max y min, que contengan el valor máximo y mínimo del array, respectivamente.
 */

const encontrarMaxMin = arr => ({maximo: Math.max(...arr), minimo: Math.min(...arr)})

console.log("Ejercicio 08",encontrarMaxMin([1, 2, 3]));

/**
 * 9.
 * Crea una función llamada buscarElemento que tome un array arr y un elemento elemento. La función debe devolver el índice de la primera aparición de elemento en el array, o -1 si no se encuentra.
 */

const buscarElemento = (arr,el) => arr.indexOf(el);

console.log("Ejercicio 09",buscarElemento([1, 2, 3, 4, 4], 5));

/**
 * 10.
 * Escribe una función llamada dividirFragmento que tome un array arr y un número entero tamano. La función debe dividir el array en fragmentos de tamaño tamano y devolver un nuevo array con los Fragmentos.
 */

function dividirFragmento(arr, num) {
  const resultado = [];

  for(let i=0; i< arr.length; i+=num){
    resultado.push(arr.slice(i,i+num))
  }
  return resultado;
}

console.log("Ejercicio 10:",dividirFragmento([1, 2, 3, 4, 5, 6], 2));

/**
 * 11
 * Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una función funcion. La función debe aplicar la función proporcionada a cada elemento del array y devolver un nuevo array con los resultados de la función aplicada a cada elemento.
 */

const mapearNumeros = (arr, funcion) =>  arr.map(num => funcion(num)).filter(num => num !== null);

console.log(mapearNumeros([1, 2, 3], (el) => el * 2));

/**
 * 12
 * Escribe una función llamada combinarObjetos que tome dos objetos (tanto arrays como objetos) obj1 y obj2. La función debe combinar ambos objetos en uno solo y devolverlo.
 */

function combinarObjetos(obj1, obj2) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    return [...obj1, ...obj2];
  } else if (typeof obj1 === "object" && typeof obj2 === "object") {
    return { ...obj1, ...obj2 };
  }
}

console.log("Ejercicio 12a:",combinarObjetos([1, 2, 3], [1, 2, 3]));
console.log("Ejercicio 12b:",combinarObjetos({ a: 1, b: 2 }, { c: 2 }));
console.log("Ejercicio 12c:",combinarObjetos([1, 2, 3], { a: 1, b: 2 }));
console.log("Ejercicio 12d:",combinarObjetos({ a: 1, b: 2 }, [1, 2, 3]));

/**
 * 13
 * Define una función llamada extraerPropiedades que tome un objeto obj y un array de propiedades. La función debe devolver un nuevo objeto que contenga solo las propiedades especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en el nuevo objeto.
 */

function extraerPropiedades(obj, arr) {
  const newObj = {}
  for(const propiedad of arr){
    if(obj.hasOwnProperty(propiedad)){
      newObj[propiedad] = obj[propiedad]
    }
  }
  return newObj;
}

console.log("Ejercicio 13:",extraerPropiedades({ a: 1, b: 2, c: 3 }, ["a", "c"]));

/** 14
 * Escribe una función llamada rangoNumeros que tome dos números inicio y fin. La función debe devolver un array que contenga todos los números en el rango desde inicio hasta fin, incluyendo ambos números.
 */

function rangoNumeros(numInicio, numFin) {
  const resultado = [];

  // Si numInicio es mayor que numFin, intercambiamos los valores
  if (numInicio > numFin) {
    [numInicio, numFin] = [numFin, numInicio];
  }

  for(let i = numInicio; i <= numFin; i++){
    resultado.push(i);
  }

  return resultado;
}

console.log("Ejercicio 14:", rangoNumeros(10, 5)); // Ahora devuelve [5, 6, 7, 8, 9, 10]



/**
 * 15
 * Define una función llamada invertirCadena que tome una cadena cadena y devuelva una nueva cadena con los caracteres en orden inverso.
 */

function invertirCadena(str) {}

console.log(invertirCadena("acbd"));

/**
 * 16
 * Crea una función llamada capitalizarPalabras que tome una cadena cadena y devuelva una nueva cadena en la que la primera letra de cada palabra esté en mayúscula y las demás en minúscula.
 */

function capitalizarPalabras(str) {}

console.log(capitalizarPalabras("ante bajo cabe con contra"));

/**
 * 17
 * Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y un número escalar. La función debe multiplicar cada elemento de la matriz por el escalar y devolver una nueva matriz con los resultados.
 */

function multiplicarMatrizPorEscalar(matriz, escalar) {}

console.log(
  multiplicarMatrizPorEscalar(
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    2
  )
);

/**
 * 18
 * Escribe una función llamada combinarArrays que pase como parámetro "creciente" o "decreciente", junto con un número indeterminado de arrays con valores numéricos. Seguidamente me devolverá un array con todos los elementos que conformen los arrays ordenado creciente u ordenado decreciente según indique en el parámetro. Si no indico nada se hará de forma creciente.
 */

function combinarArrays(dir, ...arr) {}

console.log(combinarArrays("", [1, 8, 3], [4, 5, 6]));

/**
 * 19
 * Escribe una función llamada esPalindromo que verifique si una palabra es un palíndromo, es decir, se lee igual de izquierda a derecha y de derecha a izquierda. La función debe devolver true si la palabra es un palíndromo y false en caso contrario.
 */

function esPalindromo(str) {}

console.log(esPalindromo("lol"));

/**
 * 20
 * Escribe una función llamada diferenciaArrays que encuentre la diferencia entre dos arrays, es decir, los elementos que están en uno pero no en el otro. La función debe devolver un nuevo array con los elementos diferentes.
 */

function diferenciaArrays(arr1, arr2) {}

console.log(diferenciaArrays([1, 2, 3, 4, 5], [1, 2, 3, 7, 8]));

/**
 * 21
 * Escribe una función llamada rotarArray que rote los elementos de un array hacia la derecha o izquierda. La función debe tomar un array arr y un número entero pasos que indique cuántos pasos se deben realizar hacia la derecha (si es positivo) o hacia la izquierda (si es negativo).
 */

function rotarArray(arr, steps) {}

console.log(rotarArray2([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));

/**
 * 22
 * Escribe una función llamada sumarMatrices que sume dos matrices (arrays bidimensionales) y devuelva el resultado. Las matrices de entrada estarán representadas como arrays de arrays con la misma cantidad de filas y columnas.
 */

function sumarMatrices(mat1, mat2) {}

console.log(
  sumarMatrices(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [1, 2],
      [3, 4],
    ]
  )
);

/**
 * 23
 * Escribe una función llamada promedioFilas que calcule el promedio de cada fila en una matriz (array bidimensional) y devuelva un array con los resultados.
 */

function promedioFilas(matriz) {}

console.log(
  promedioFilas([
    [1, 3],
    [2, 4],
    [3, 5],
  ])
);

/**
 * 24
 * Escribe una función llamada ordenarPorPropiedad que ordene un array de objetos por una propiedad específica. La función debe tomar un array arr y una cadena propiedad que indique la propiedad por la cual se debe ordenar.
 */

function ordenarPorPropiedad(arr, str) {}

console.log(
  ordenarPorPropiedad(
    [
      { a: 1, b: 2 },
      { a: 1, b: 1 },
      { a: 1, b: 3 },
    ],
    "b"
  )
);

/**
 * 25
 * Escribe una función llamada numerosFaltantes que encuentre los números faltantes en un rango dado dentro de un array. La función debe tomar un array de números arr y dos números enteros inicio y fin que representan el rango. La función debe devolver un array con los números que faltan en ese rango.
 */

function numerosFaltantes(arr, inicio, fin) {}

console.log(numerosFaltantes([1, 3], 1, 15));

/**
 * 
 * 





 */

/**
 * 1
 * Escribe una función que tome un objeto. Debería devolver el valor de la propiedad cuya clave sea pais. Si no existiese dicha clave devolvería : "No se encuentra"
 */

function ej1(obj) {}

console.log(ej1({ continente: "Europa", pais: "España" }));

/**
 * 2
 * Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.
 */

function ej2(obj, str) {}

console.log(ej2({ a: 1, c: 2 }, "b"));

/**
 * 3
 * Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras, no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.
 */

function ej3(obj, str) {}

console.log(ej3({ a: 1, b: 2 }, "b"));

/**
 * 4
 * Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad con la clave 'key' y un valor igual a la cadena. Devuelve el objeto.
 */

function ej4(str) {}

console.log(ej4("a"));

/**
 * 5
 * Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto
 */

function ej5(str1, str2) {}

console.log(ej5("cadena", "cadenon"));

/**
 * 6
 * Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga propiedades con claves los elementos del array 'a' y con los valores correspondientes 'b'. Devuelve el objeto.
 */

function ej6(arr1, arr2) {}

console.log(ej6([1, 2, 3], [4, 5, 6]));

/**
 * 7
 * Escribe una función que tome un objeto (a) como argumento. Devuelve una matriz con todas las claves de los objetos.
 */

function ej7(obj) {}

console.log(ej7({ a: 1, b: 2 }));

/**
 * 8
 * Escribe una función que tome un objeto como argumento. Dicho objeto tienen como argumento o valor dentro de la clave 'a' el valor 'b' que puede o no tener otras subclaves. Se pide obtener la propiedad 'b' del objeto 'a' en caso de que exista. Si no existe devolverá undefined
 */

function ej8(obj) {}

const myObjWithValue = {
  a: {
    b: {
      c: 7,
    },
  },
};

const myObjUndefined = {
  a: {
    b: {},
  },
};

console.log(ej8(myObjUndefined));

/**
 * 9
 * Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores (temperaturas) del objeto. Vamos a imaginar que el objecto tiene por claves meses del año y los valores de esas claves son temperaturas. Es necesario validar que los valores de las claves son números para realizar la suma.
 */

function ej9(obj) {}

console.log(ej9({ enero: 9, febrero: 11 }));

/**
 * 10
 * Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las propiedades del objeto original. excepto la propiedad con clave 'b'
 */

function ej10(obj) {}

console.log(ej10({ a: 1, b: 2, c: 3 }));

/**
 * 11
 * Escribe una función que tome dos objetos como argumentos. Lamentablemente, la propiedad 'b' del segundo objeto tiene la clave incorrecta. En su lugar, debería llamarse 'd'. Fusione ambos objetos y corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'.
 */

function ej11(obj1, obj2) {}

console.log(ej11({ a: 1, b: 2, c: 3 }, { b: 4, e: 5, f: 6 }));

/**
 * 12
 * Escribe una función que tome un objeto (a) y un número (b) como argumentos. Multiplica todos los valores de 'a' por 'b'. Devuelve el objeto resultante. Comprobar que los valores de las claves de (a) son números para realizar la multiplicación.
 */

function ej12(obj1, obj2) {}

console.log(ej12({ a: 2, b: 2, c: 2 }, { d: 2, e: 2, f: 2 }));

/**
 * 13
 * Intercambiar claves y valores de objetos. Escribe una función que tome un objeto como argumento. De alguna manera, las propiedades y claves del objeto se mezclaron. Intercambia la clave del objeto Javascript con sus valores y devuelve el objeto resultante.
 */

function ej13(obj) {}

console.log(ej13({ 1: "b", a: 2 }));

/**
 * 14
 * Reemplazar cadenas vacías en el objeto con valores nulos. Escriba una función que tome un objeto como argumento.Algunos de los valores de propiedad contienen cadenas vacías. Reemplace cadenas vacías y cadenas que contienen solo espacios en blanco con valores nulos. Devuelva el objeto resultante.
 */

function ej14(obj) {}

console.log(ej14({ a: "aaa", b: "", c: "   " }));

/**
 * 15
 * Extraer información de objetos. Escriba una función que tome un objeto como argumento que contenga propiedades con información personal. Extraiga el nombre, el apellido, el tamaño y el peso, si están disponibles. Si se proporciona el tamaño o el peso, transforme el valor en una cadena. Adjunte la unidad cm al tamaño. Adjunte la unidad kg al peso Devuelve un nuevo objeto con todas las propiedades disponibles que nos interesan y sus modificaciones correspondientes.
 */

function ej15(obj) {}

console.log(ej15({ nombre: "aa", apellido: "bb", tamaño: 1, peso: 2 }));

/**
 * 16
 * Agregar propiedad a cada objeto en la matriz. Escribe una función que tome un Array de objetos y una cadena como argumentos. Agrega una propiedad con clave 'continente' y valor igual a la cadena a cada uno de los objetos. Devuelve el nuevo arreglo de objetos.
 */

function ej16(arr, str) {}

console.log(
  ej16(
    [
      { a: 1, b: 2 },
      { c: 3, d: 4 },
    ],
    "europa"
  )
);

/**
 * 17
 * Convertir matriz en objeto con contador. Escriba una función que tome una matriz de números como argumento. Convierta la matriz en un objeto. Debe tener una clave para cada valor único de la matriz. El valor del objeto correspondiente debe ser el número de veces que aparece la clave dentro de la matriz.
 */

function ej17(arr) {}

console.log(ej17([1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 2, 2, 2]));

/**
 * 
 * 








 */

/**
 * 1
 * Dado el siguiente objeto, utilice la desestructuración para extraer las propiedades nombrey edaden variables separadas. Después de crear un objeto con dichas propiedades y los valores obtenido
 */

const persona = {
  nombre: "Juan",
  edad: 30,
};

/**
 * 2
 * Dado el siguiente objeto, utilice la desestructuración para extraer la propiedad ciudad en una llamada variable lugar.
 */

const direccion = {
  calle: "Calle Principal",
  ciudad: "Ciudad Ejemplo",
  codigoPostal: "12345",
};

/**
 * 3
 * Dado el siguiente objeto, utilice la desestructuración para extraer las propiedades primerNumeroy segundoNumeroen variables separadas. Además a la vez, la variable segundoNumero se debe llamarsecondNumber
 */

const numeros = {
  data: {
    primerNumero: 10,
    segundoNumero: 20,
  },
};

/**
 * 4
 * Dado el siguiente objeto, utilice la desestructuración para extraer la propiedad nombrey apellidosen una llamada variable nombrey apellidoPersonarespectivamente. Si la propiedad apellidos no existe en el objeto, asigne un valor predeterminado de 'Desconocido'.
 */

const persona2 = {
  id: 23,
  info: {
    nombre: "María",
    apellidos: "Jiménez Téllez",
    edad: 25,
  },
};

/**
 * 5
 * Dado el siguiente objeto, utilice la desestructuración para extraer las propiedades nombrey edad. Luego, crea un nuevo objeto llamado datosPersonay asigna las propiedades extraídas a este nuevo objeto.
 */

const persona3 = {
  nombre: "Luis",
  edad: 40,
  ciudad: "Ciudad Ejemplo",
};

/**
 * 6
 * Dado el siguiente objeto que representa un punto en coordenadas, utiliza la desestructuración para extraer las propiedades xy yen variables separadas y calcular la distancia euclidiana desde el origen (0,0).
 */

const punto = {
  x: 3,
  y: 4,
};

/**
 * 7
 * Dado el siguiente objeto que representa una persona con un nombre y una lista de amigos, utilice la desestructuración para extraer el nombre de la persona y el primer amigo de la lista.
 */

const persona4 = {
  nombre: "Carlos",
  amigos: ["Ana", "David", "Elena"],
};