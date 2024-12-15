//Solicite al usuario que ingrese un número cualquiera.
// Calcule el doble de ese número.
//Muestre el resultado en la consola.

const prompt = require("prompt-sync") ();
let numero= parseFloat (prompt("ingrese numero"));


let doble =  numero *2;
 
console.log("el doble del numero es:"+doble);