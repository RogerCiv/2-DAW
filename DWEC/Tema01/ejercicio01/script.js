/**
 * @author: Rogelio Sánchez Civantos
 * @description: Calculo del factorial de un número entero mayor o igual que 1.
 */

function factorial(n) {

    if (typeof n === "number") {
        if (n < 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    } else {
        return "Introduce un numero y que sea igual o mayor que 1";
    }


}

console.log(factorial(1));

/**
* @author: Rogelio Sánchez Civantos
* @description: Dada la ecuacion ax2 + bx + c = 0. Calcular las ecuaciones reales, sino hay indicarlo. Si hay una solución doble indicarlo. a b y c tienen que ser numeros.
*/

function segundoGrado(a, b, c) {
    let raiz = b * b - 4 * a * c;


    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        return "a, b y c tienen que ser números";
    }

    if (raiz < 0) {
        return "No solución, raiz = 0";
    } else if (raiz === 0) {
        let solucion = -b / (2(a));
        return `Solución doble: x = ${solucion}`;
    } else {
        let solucionSuma = (-b + Math.sqrt(raiz)) / (2 * a);
        let solucionResta = (-b - Math.sqrt(raiz)) / (2 * a);

        return `Las soluciones reales son: \n  x1 = ${solucionSuma} \n x2 = ${solucionResta}`;
    }

}

console.log(segundoGrado(2, 2, 3));


/**
* @author: Rogelio Sánchez Civantos
* @description: Calcular letra de dni.
*/

const submit = document.getElementById('submit');
const inputDni = document.getElementById('dni');
const resultado = document.querySelector('.resultado');

submit.addEventListener('click', event => {
    event.preventDefault();
    mostrarDNI();

})

const mostrarDNI = () => {
    const inputValue = inputDni.value.trim();
    if (inputValue === '') {
        resultado.style.backgroundColor = 'rgb(230, 184, 184)';
        resultado.style.color = 'red';
        resultado.innerHTML = 'Error, un número de de 1 u 8 dígitos.';
    } else {
        //let value = parseInt(inputDni.value);
        let value = parseInt(inputValue);
        let letra = letraDNI(value);

        if (isNaN(value) || value < 0 || value > 99999999) {
            resultado.style.backgroundColor = 'rgb(230, 184, 184)';
            resultado.style.color = 'red';
            resultado.innerHTML = 'Error, introduce un número valido.';
        } else {
            resultado.style.backgroundColor = 'green';
            resultado.style.color = 'white';
            resultado.innerHTML = `Tu letra de DNI es la ${letra}`;
        }
    }
}

function letraDNI(num) {
    const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
        "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    if (typeof num !== "number") {
        // return '"Introduce un número"';
        return null; // Para controlar los errores en el html

    }
    if (num < 0 || num > 99999999) {
        return "El numero no puede ser menor que 0 o no puede tener más de 8 dígitos.";
    } else {
        let letraDNI = num % 23;
        return letras[letraDNI]
    }
}
console.log(letraDNI(75139462))
