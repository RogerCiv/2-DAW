
<h1 align="center">
  <p align="center"> Tienda de Libros - Ejercicio 01 Relación IV Prototipos.</p>
 <img src="assets/titulo.png" alt="titulo">
</h1>

Este es un proyecto de ejemplo que modela una tienda de libros. Permite agregar libros, eliminar libros y calcular el precio total de los libros en el inventario.
Realizar/implementar  ejercicio usando Clases(class), Funciones
constructoras y Objetos Literales.

## Autor: 
Rogelio Sánchez. 2°DAW 

## Requisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)  o [pnpm](https://pnpm.io/es/installation)


## Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
2. Entra en la carpeta creada.
3. Instala las dependencias ejecutando `npm install` o `pnpm install`.
4. Instalar Bootstrap ejecutando `npm i bootstrap@5.3.2`.
5. Abre el archivo `index.html` en tu navegador para utilizar la aplicación.

## Estructura de Carpetas y Archivos

- `index.html`: Página principal de la tienda de libros.
- `scriptFuncional.js`: Código JavaScript que controla la funcionalidad de la tienda.
- `assets/modules.js`: Módulo que define las clases y objetos relacionados con los libros.
- `scriptLiteral.js` o `scriptClass.js`: También puedes usar uno de estos 2 scripts js para probar con Objetos literales o usando Clases.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- HTML
- JavaScript
- Bootstrap


## Ejemplos de Código.

- Función constructora:

```js

export function libroFuncional(title,author,price){
  this._title = title;
  this._author = author;
  this._price = price;

  Object.defineProperty(this,"title",{
    get: function(){
      return this._title;
  },
    set: function(newTitle){
      this._title = newTitle;
    }
  });

  Object.defineProperty(this,"author",{
    get: () =>{
      return this._author;
    },
    set: function(newAuthor){
      this._author = newAuthor;
    }
  })

  Object.defineProperty(this,"price",{
    get: function() {
      return this._price;
    },
    set: function(newPrice){
      if(NaN(newPrice) && newPrice > 0){
        this._price = newPrice;
      }
    }
  })
}
```

- Imports para poder usar la función constructora y bootstrap.
  
```js
  // --------------------- IMPORTS ----------------------------------
import { libroFuncional } from './assets/modules';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

 ```

## Captura Pantalla

![web](assets/libros.png)


# Contacto

Si tienes alguna pregunta o comentario, puedes contactarme a través de mi correo electrónico [rogerciv@gmail.com](rogerciv@gmail.com) o visitar mi perfil en [GitHub](https://github.com/RogerCiv).

