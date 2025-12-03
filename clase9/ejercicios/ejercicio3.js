/*Ejercicio 3: 
Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que 
ingrese dos valores booleanos (true o false) y muestra el resultado de diversas 
combinaciones lógicas.*/

const prompt = require("prompt-sync")(); 

let condicion1 = prompt("Por favor ingrese un valor del tipo Booleano: ") === 'true'; 
let condicion2 = prompt("Por favor ingrese un segundo valor del tipo Booleano: ") === 'true'; 

console.log("Resultados logicos: ");
console.log("AND (&&): " + (condicion1 && condicion2)); //Ambas deben ser verdaderas
console.log("OR (||): " + (condicion1 || condicion2)); //Una tiene que ser true 
console.log("NOT condicion1 (!): " + (!condicion1)); //Invierte el valor 



