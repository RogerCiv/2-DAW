# Ejercicios prueba Callback

## Ejercicio 1

**Enunciado:**
Crear una funcion llamada realizarOperación que tome 2 numeros y un callback y me devuelva la suma de dichos números pasados 1 segundo.

```js

function realizarOperacion(num, num2, callback) {
  setTimeout(() => {
    const resultado = num + num2;
    callback(resultado);
  }, 1000);
}

function callback(resultado) {
  //console.log(`Realizada la operacion de callback,Resultado: ${resultado}`);
  pintarCallback(app, resultado);
}

realizarOperacion(5, 3, callback);

```

## Ejercicio 2

Crear una funcion llamada filtrarParesAsync, que tome un array y un callback, la funcion debe devolver un nuevo array con numeros pares.

```js
function filtrarParesAsync(arr, callback) {
  setTimeout(() => {
    callback(arr.filter((num) => num % 2 === 0));
  }, 2000);
}
function realizarFiltro(arrPares) {
  console.log(arrPares);
}
const array = [1, 2, 3, 4, 5, 6];
filtrarParesAsync(array, realizarFiltro);
```

## Ejercicio 3

Quiero que me crees una funcion iterarAsync que tome un array y un callback. La funcion debe de ejecutar el callback para cada elemento de larray despues de 1,5 segundos por cada elemento del array.

```js

function iterarAsync(arr, callback) {
  arr.forEach((el, index) => {
    setTimeout(() => {
      callback(`Elemento del array => ${el}`);
    }, 1500 * (index + 1));
  });
}

function callIterar(array){
  console.log(array);
}

const array2 = ["lunes","martes","miercoles","jueves","viernes"]

iterarAsync(array2,callIterar);

```

## Ejercicio 4

Crear funcion llamada validarUsuarioAsync que tome el nombre de un usuario y un callback. La funcion debe de validar que el usuario es correcto despues de 2 segundos y llamar al callback con un mensaje de usuario valido o no valido.


```js
function validarUsuarioAsync(usuario,callback){
  setTimeout(() => {
  let userBD = "pepe";
  callback(usuario === userBD ? "usuario valido" : "usuario no valido");
  },2000)
}


function checkUser(usuario){
  console.log(usuario);
}


validarUsuarioAsync("pepe",checkUser)
```

# Ejercicios Promesas

## Ejercicio 1

**Enunciado:**
Crear una función que cargue una imagen de forma async y la añada a un documento html.
La función debe de volver una promesa que se resuelva con la imagen cargada o que se rechaze si a habido algun error con dicha imagen
