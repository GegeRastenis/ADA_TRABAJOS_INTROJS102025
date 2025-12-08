/*Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y 
muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.*/

const prompt = require("prompt-sync")(); 

let numero = parseInt(prompt("Por favor ingrese un numero entero y positivo: ")); 

for(let i = 1; i <= 100; i ++){
   if(i % numero === 0){
    console.log(i);
   }
    
}