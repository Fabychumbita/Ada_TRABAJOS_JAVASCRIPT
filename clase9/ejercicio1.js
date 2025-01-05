//Ejercicio 1:
//Declara dos variables numéricas numero1 y numero2. Pide al usuario
//que ingrese dos números y muestra cuál es mayor o si son iguales

const prompt= require('prompt-sync') ();

let numero1= parseFloat (prompt ("INGRESE UN NUMERO: "));

let numero2=parseFloat ( prompt("Ingrese numero: "));

if ( numero1 >numero2 ) {
    console.log(`el numero  es mayor`); 
} else if (numero1 <numero2) {
    console.log(`el numero es menor`);
} else {
console.log(`los numeros son iguales`)
}

// Declaramos las variables para los números
/**let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Comparamos los números y mostramos el resultado
if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`El número ${numero2} es mayor que ${numero1}`);
} else {
    console.log("Ambos números son iguales");
}*/