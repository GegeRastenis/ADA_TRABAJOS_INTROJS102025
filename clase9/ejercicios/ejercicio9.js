/*Ejercicio 9:  
Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el 
radio de un círculo y calcula su área y perímetro utilizando la constante PI.*/

const prompt = require("prompt-sync")(); 

let radio = parseInt(prompt("Por favor ingrese el radio en cm. de su circulo: "))

let area = Math.PI * (radio ** 2); 
console.log(`El area de  tu circulo es de: ${area}`);

let perimetro = 2 * Math.PI * radio; 
console.log(`El perimetro de tu circulo es de: ${perimetro}`);
