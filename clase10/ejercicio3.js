//Constantes / Validación de Edad:
//Más adelante vamos a querer validar que nuestros encuestados sean de
//18 años de edad mínima y 99 años de edad máxima.
//Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas
//en dos constantes (asignándoles los valores numéricos 18 y 99
//respectivamente). Por último, Deberás pedirle al usuario que ingrese su
//edad para validarla usando parseInt.
//Desglosando el ejercicio deberás:
//ea una constantente llamada EDAD_MINIMA y otra llamada
//respectivamente.
//2 Pide al usuario que ingrese su edad.
//entero.
//3//. Usa “p/1 crarseInt” para convertir la entrada del usuario a un número 
// entero/1Crea una consta
//4. Valida si la edad ingresada está dentro del rango permitido y
// un mensaje adecuado.

const prompt = require('prompt-sync')();

const EDAD_MINIMA =18
const EDAD_MAXIMA =99

let edad = parseInt (prompt ("ingresa tu edad  "));

if (edad >=EDAD_MINIMA && edad <=EDAD_MAXIMA){}