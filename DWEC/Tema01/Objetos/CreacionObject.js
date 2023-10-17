//QUe es this. No es una variable. Es una palabra reservada.
//en funcion del contexto de donde me encuentre a un elemento de ese contexto(el propio elemento u objeto) o a un elemento padre del contexto de donde me encuentre. 

//Crear en consola del navegador window.alucinante = "Que guay soy";

function imprimir(){
    console.log(`Hola mundo desde ${this}`);
}
const obj ={}

imprimir();

function saludo(){
    const alucinante = "Soy alucinante en la función saludo";
    function saludar(){
        console.log(this.alucinante);
    }
}

const mensaje = saludo()



const saludo2 = {
    alucinante: "Soy alucinante en el objeto literal",
    saludar: function () {
        console.log(this.alucinante);
    }
}

console.log(saludo2.saludar())

//aqui el this no funciona igual, en arrow function el this busca en el padre, se sale fuera de saludo3. (se sale del SCOPE y puede llamar al objeto padre.)
const saludo3 = {
    alucinante: "Soy alucinante en el objeto literal saludo3",
    saludar:  () => {
        console.log(this.alucinante);
    }
}

console.log(saludo3.alucinante)

console.log(saludo3.saludar());



// Creacion de prototipos
//Con class (azucar sintactico)
// con

