# Apuntes tema 01

## JavaScript

- Interpretado, no compilado.
- Imperativo y estructurado.
- Objetual, con tipificación débil y dinámica.
- Orientado a objetos y basado en prototipos.


**Symbol:** Crea una variable unica que no se puede ver ni modificar.
Utilidad -> Le podemos dar una descripción a la variable
```js
let d = Symbol("letra d");
let e = Symbol("letra d");

d === e // false3
```