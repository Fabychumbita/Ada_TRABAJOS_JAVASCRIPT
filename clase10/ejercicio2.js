// Escribe un programa que pida al usuario que ingrese su nombre, su
// edad y su peso, y luego muestre un mensaje personalizado que incluya
// toda esta información.
// Desglosando el ejercicio deberás:
// 1. Pide al usuario que ingrese su nombre.
// 2. Pide al usuario que ingrese su edad.
// 3. Pide al usuario que ingrese su peso.
// 4. Muestra un mensaje personalizado que incluya el nombre, la edad
// y el peso del usuario.


const prompt = require('prompt-sync')();
let nombre = prompt("ingrese su name: ");
let edad = parseInt(prompt("ingrese el age: "));

let peso = parseFloat(prompt("ingrese weight: "));



console.log ("ingresa tu nombre  ", nombre , "tu edad es  ", edad ," y su peso es ",peso );