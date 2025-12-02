/*Ejercicio 7:  
Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra 
el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462).*/

const prompt = require("prompt-sync")(); 

let peso = parseFloat(prompt("Por favor ingrese su peso en Kg: ")); 

let pesoEnLibras = peso * 2.20462
console.log(`Su peso en Kilogramos se traduce a un total de ${pesoEnLibras} en Libras`);

