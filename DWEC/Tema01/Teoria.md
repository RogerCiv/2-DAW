# Resumen

## JavaScript

- Lenguaje de programación interpretado (ya que es un script). El propio navegador va ejecutando sentencia a sentencia sin necesidad de compilar.
- Se utiliza en el lado del cliente, es decir, se ejecuta en el navegador web (salvo excepciones), lo que permite mejoras en la interfaz de usuario.
- Es orientado a objetos y basado en prototipos, aunque algo diferente de la orientación a objetos tradicional. Podemos clonar objetos sin necesidad de instanciar.
- Es Imperativo y estructurado. Podemos ordenarle lo que queremos que haga, y es estructurado porque utiliza las tres estructuras básicas del lenguaje estructurado: Secuencia, Selección e interacción.
- Es de tipado débil y dinámico. Una misma variable puede tener valores de diferentes tipos a lo largo de su vida.
- Permite programar comportamiento de las páginas web.
- Podemos escribir código JavaScript en nuestro documento HTML o en documentos aparte y llamarlos desde la cabecera HTML.


### Motor ó intérprete Javascript

- JavaScript puede ejecutarse no solo en los navegadores, sino también en servidores o incluso en cualquier dispositivo que cuente con un programa especial llamado El motor o intérprete de JavaScript.
- El navegador tiene un motor embebido a veces llamado una “Máquina virtual de JavaScript”.
- Diferentes motores tienen diferentes “nombres en clave”. Por ejemplo:
  - V8 – en Chrome, Opera y Edge.
  - SpiderMonkey – en Firefox.


### Framework web

Conjunto de herramientas, estilos y librerías dispuestas a través de una estructura o esqueleto base, para el desarrollo de aplicaciones web más escalables y sencillas de mantener.

Ventajas:
- Documentación y comunidad.
- Reutilización del código. Su modularidad permite hacer múltiples proyectos con el mismo código.
- Disminución de errores.
- Arquitectura y metodología.
- La mayoría de frameworks web del mercado usan arquitecturas y metodologías actuales.
- Plantillas web. Las plantillas facilitan mucho el trabajo. Ejemplo: Bootstrap.
- Seguridad web. Suelen contar con medidas de seguridad para proteger nuestros datos y los de nuestros clientes.
- Posicionamiento en motores de búsqueda. El posicionamiento web SEO ya implementado en su estructura y código para poder lograrlo más fácilmente.


### Programación reactiva. Idea general: 
- Programación clásica: yo pido los datos al servidor, a un sensor, a la base de datos, etc
- Programación reactiva: el software se actualiza solo cuando las fuentes de datos de las que dependen se modifican. “cada vez que haya un cambio infórmame”…


## Conversión de tipos.
# 2. Conversiones de Tipos en JavaScript (ES6)

En JavaScript ES6, existen varias formas de convertir entre diferentes tipos de datos. Estas conversiones son útiles para realizar operaciones específicas o garantizar que los tipos sean los adecuados para una función o cálculo. A continuación, se presentan las conversiones más comunes:

## 2.1 Conversión a String

### i. Usando `String()`

```javascript
const numero = 42;
const texto = String(numero);
```

### ii. Usando Template Literals (Template Strings)

```javascript
const numero = 42;
const texto = `${numero}`;
```

## 2.2 Conversión a Number

### i. Usando `Number()`

```javascript
const texto = "42";
const numero = Number(texto);
```

### 2. Usando `parseInt()` o `parseFloat()` para conversiones más específicas

```javascript
const texto = "42.5";
const entero = parseInt(texto);
const decimal = parseFloat(texto);
```

## Conversión a Boolean

### 1. Usando `Boolean()`

```javascript
const valor = 42;
const esVerdadero = Boolean(valor); // true
```

### 2. Conversión implícita en condiciones

```javascript
const valor = 0;
if (valor) {
  // Esto no se ejecutará, ya que 0 se evalúa como falso
} else {
  // Esto se ejecutará
}
```

## Conversión a Array

### 1. Usando el operador de propagación (Spread Operator)

```javascript
const cadena = "Hola";
const arreglo = [...cadena]; // ["H", "o", "l", "a"]
```

### 2. Usando `Array.from()`

```javascript
const cadena = "Hola";
const arreglo = Array.from(cadena); // ["H", "o", "l", "a"]
```

## Conversión a Objeto

### 1. Usando `Object()`

```javascript
const numero = 42;
const objeto = Object(numero); // Object { [[PrimitiveValue]]: 42 }
```

### Ejemplo de llamada en el `<head> `:

La llamada de un fichero con código JavaScript en la cabecera es algo más delicada.

La etiqueta `<script>` en HTML tiene varios atributos que pueden afectar cómo se carga y ejecuta el código JavaScript en la página. Muestro algunos ejemplos, junto con los atributos que se pueden utilizar:

1. **`src` (Source)**: Este atributo se utiliza para especificar la fuente (URL) de un archivo JavaScript externo que se va a cargar y ejecutar en la página.
   
   ```html
   <script src="mi_script.js"></script>
   ```

2. **`async`**: Cuando se agrega el atributo `async` a la etiqueta `<script>`, se indica que el archivo JavaScript se debe _**cargar de forma asíncrona**_ mientras se sigue analizando la página HTML. Esto significa que la ejecución de la página no se bloqueará por la carga del script y se ejecutará tan pronto como esté disponible. Sigue existiendo un bloqueo en el renderizado pero menor que con el comportamiento normal. No se garantiza la ejecución de los scripts asíncronos en el mismo orden en el aparecen en el documento.
   
   ```html
   <script src="mi_script.js" async></script>
   ```

3. **`defer`**: Al agregar el atributo `defer` a la etiqueta `<script>`, se le dice al navegador que el archivo JavaScript se debe cargar de forma asíncrona, pero la ejecución del script se pospone hasta que se complete el análisis del documento HTML. Esto es útil cuando el orden de ejecución del script es importante y debe ser relativo al orden en que aparece en el documento.
   Además la ejecución de todos los scripts diferidos se realiza en el mismo orden en el que aparecen en el documento.
   
   ```html
   <script src="mi_script.js" defer></script>
   ```

4. **`type`**: El atributo `type` se utiliza para especificar el tipo de contenido del script. El valor común es `"text/javascript"`.
   
   ```html
   <script src="mi_script.js" type="text/javascript"></script>
   ```

5. **`charset`**: Este atributo se utiliza para especificar la codificación de caracteres del archivo JavaScript, aunque en la mayoría de los casos no es necesario ya que se asume UTF-8 por defecto.
   
   ```html
   <script src="mi_script.js" charset="UTF-8"></script>
   ```

Es importante elegir la combinación adecuada de estos atributos según las necesidades de tu página y cómo deseas que se cargue y ejecute el código JavaScript. Por ejemplo, si necesitas que el script se ejecute tan pronto como esté disponible, puedes usar `async`. Si necesitas controlar el orden de ejecución, puedes usar `defer`.


# 4. Operadores Lógicos y de Comparación en JavaScript.

Los operadores lógicos y de comparación son fundamentales en JavaScript para realizar evaluaciones y tomar decisiones lógicas en tus programas. En ECMAScript 6, se introducen varios operadores nuevos que amplían las capacidades de comparación. A continuación, se presentan los operadores más comunes junto con ejemplos de uso.

## 4.1. Operadores de Comparación

Los operadores de comparación se utilizan para comparar valores y devuelven un valor booleano (verdadero o falso) según el resultado de la comparación.

### i. Igualdad (`==`) y Desigualdad (`!=`)

- `==` compara si dos valores son iguales.
- `!=` compara si dos valores no son iguales.

```javascript
const numero1 = 5;
const numero2 = 10;

console.log(numero1 == numero2); // false
console.log(numero1 != numero2); // true
```

### ii. Igualdad Estricta (`===`) y Desigualdad Estricta (`!==`)

- `===` compara si dos valores son iguales y tienen el mismo tipo de datos.
- `!==` compara si dos valores no son iguales o tienen tipos de datos diferentes.

```javascript
const texto1 = "5";
const numero3 = 5;

console.log(texto1 === numero3); // false (tipos diferentes)
console.log(texto1 !== numero3); // true
```

### iii. Mayor que (`>`) y Menor que (`<`)

- `>` compara si un valor es mayor que otro.
- `<` compara si un valor es menor que otro.

```javascript
const edad1 = 25;
const edad2 = 30;

console.log(edad1 > edad2); // false
console.log(edad1 < edad2); // true
```

### iv. Mayor o Igual que (`>=`) y Menor o Igual que (`<=`)

- `>=` compara si un valor es mayor o igual que otro.
- `<=` compara si un valor es menor o igual que otro.

```javascript
const cantidad1 = 50;
const cantidad2 = 50;

console.log(cantidad1 >= cantidad2); // true
console.log(cantidad1 <= cantidad2); // true
```

## 4.2. Operadores Lógicos

Los operadores lógicos se utilizan para realizar operaciones lógicas en valores booleanos.

### i. AND Lógico (`&&`)

El operador `&&` devuelve `true` si ambos operandos son `true`.

```javascript
const esMayorDeEdad = true;
const tieneLicencia = true;

console.log(esMayorDeEdad && tieneLicencia); // true
```

### ii. OR Lógico (`||`)

El operador `||` devuelve `true` si al menos uno de los operandos es `true`.

```javascript
const esEstudiante = false;
const trabaja = true;

console.log(esEstudiante || trabaja); // true
```

### iii. NOT Lógico (`!`)

El operador `!` invierte el valor booleano de su operando.

```javascript
const esDiaLaboral = true;

console.log(!esDiaLaboral); // false
```

### iv. Ejemplo Completo

A continuación, un ejemplo completo que combina operadores de comparación y operadores lógicos:

```javascript
// Datos de entrada
const edad = 20; // La edad de la persona
const esEstudiante = false; // Si la persona es estudiante o no

// Condiciones
if (edad >= 18 && !esEstudiante) {
  console.log("¡Eres elegible para solicitar la tarjeta de descuento!");
} else if (edad < 18) {
  console.log(
    "Lo siento, debes ser mayor de 18 años para solicitar la tarjeta."
  );
} else {
  console.log(
    "Lo siento, los estudiantes no son elegibles para la tarjeta de descuento."
  );
}
```

## 4.3. Operador Ternario (`?`)

El operador ternario, representado por `condición ? expresión1 : expresión2`, es una forma concisa de realizar una evaluación condicional en JavaScript. Si la condición es verdadera, se ejecuta `expresión1`; de lo contrario, se ejecuta `expresión2`. Es útil para asignar valores basados en una condición.

### Ejemplo:

```javascript
const edad = 18;
const esMayor = edad >= 18 ? "Sí" : "No";
console.log(`¿Es mayor de edad? ${esMayor}`); // Imprime "¿Es mayor de edad? Sí"
```

## 4.4. Operador Nullish Coalescing (`??`)

El operador nullish coalescing (`??`) se utiliza para proporcionar un valor predeterminado en caso de que una expresión sea `null` o `undefined`. Es útil para manejar valores nulos o indefinidos de manera segura.

### Ejemplo:

```javascript
const valor = null;
const valorPredeterminado = valor ?? "Valor predeterminado";
console.log(valorPredeterminado); // Imprime "Valor predeterminado"
```

## 4.5. Combinación de Operadores (`?`) y (`??`)

Puedes combinar el operador ternario y el operador de nullish coalescing para crear lógica condicional más compleja.

### Ejemplo:

```javascript
const nombre = null;
const mensaje = nombre ? `Hola, ${nombre}` : "Hola, usuario";
console.log(mensaje); // Imprime "Hola, usuario"

const edad = undefined;
const mensajeEdad = edad ?? "Edad no especificada";
console.log(mensajeEdad); // Imprime "Edad no especificada"
```

> En este ejemplo, `nombre` se evalúa como falso debido a que es `null`, por lo que se utiliza el valor predeterminado "Hola, usuario". En el segundo caso, `edad` se evalúa como `undefined`, por lo que se utiliza "Edad no especificada" como valor predeterminado.

> Estos operadores son herramientas poderosas para realizar evaluaciones condicionales y manejar valores nulos o indefinidos