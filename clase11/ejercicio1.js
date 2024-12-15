//Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa
//que le pida al usuario un número cualquiera. El programa deberá analizar si el
//número ingresado es positivo, negativo o cero. Utiliza estructuras if para
//resolverlo y muestra un mensaje explicativo en cada 


const prompt = require('prompt-sync')();

// Solicitamos al usuario que ingrese un número
let numero = parseInt(prompt("Ingresa un número: "));

// Analizamos si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número es positivo. Esto significa que está por encima de cero.");
} else if (numero < 0) {
    console.log("El número es negativo. Esto significa que está por debajo de cero.");
} else {
    console.log("El número es cero. Esto significa que no tiene valor positivo ni negativo.");
}