/**
 * @author: Rogelio Sánchez Civantos
 * @description: Calculo del factorial de un número entero mayor o igual que 1.
 */

function factorial(n) {

    if(typeof n === "number"){
        if (n < 1) { 
            return 1;  
        } else {
            return n * factorial(n - 1);
        }
    }else {
       return "Introduce un numero y que sea igual o mayor que 1";
    }
    

}

console.log(factorial(1)); 

/*
function factorialWhile(n){
    let respuesta ;
    if(typeof n !== "number"){
        respuesta = "Tienes que introducir un número";
    }else if(n < 1){
        respuesta = "EL número tiene que ser igual o mayor que 1";
    }else{
        while(n>0){
            respuesta = n * (n - 1);
        }
    }
    return respuesta;
}

console.log(factorialWhile(0));
esta mal
*/

  /**
 * @author: Rogelio Sánchez Civantos
 * @description: Dada la ecuacion ax2 + bx + c = 0. Calcular las ecuaciones reales, sino hay indicarlo. Si hay una solución doble indicarlo. a b y c tienen que ser numeros.
 */

function segundoGrado(a,b,c){
    let raiz = b*b -4*a*c;

    
    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
        return "a, b y c tienen que ser números";
    }else if(raiz< 0){
        return "No solución, raiz = 0";
    }else{
        let suma ;
        let resta;
    }

}

console.log(segundoGrado(2,2,3));



function letraDNI(num){
    const letras = ["T","R","W","A","G","M","Y","F","P","D","X","B",
                    "N","J","Z","S","Q","V","H","L","C","K","E"];

    if(typeof num !== "number"){
        return '"Introduce un número"';

        if(num.length === 8)
    }else  {
        let letraDNI = num % 23 ;
        return letras[letraDNI]
    }
}
console.log(letraDNI(75139462))
