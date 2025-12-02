/*Ejercicio 3: 
Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que 
ingrese dos valores booleanos (true o false) y muestra el resultado de diversas 
combinaciones lógicas.*/

const prompt = require("prompt-sync")(); 

let condicion1 = prompt("Por favor ingrese un valor del tipo Booleano (true/false): "); 
let condicion2 = prompt("Por favor ingrese un segundo valor del tipo Booleano (true/false): "); 

if(condicion1 == "true" && condicion2 == "true"){
    console.log(`Segun los valores ingresados: ${condicion1} y ${condicion2}, su combinacion logica en una tabla de condicionalidad se traduce en: TRUE `);
    
}else if(condicion1 == "true" && condicion2 == "false"){
    console.log(`Segun los valores ingresados: ${condicion1} y ${condicion2}, su combinacion logica en una tabla de condicionalidad se traduce en: FALSE`);
    
}else if(condicion1 == "false" && condicion2 == "true"){
    console.log(`Segun los valores ingresados: ${condicion1} y ${condicion2}, su combinacion logica en una tabla de condicionalidad se traduce en: TRUE`);
}else if(condicion1 == "false" && condicion2 == "false"){
    console.log(`Segun los valores ingresados: ${condicion1} y ${condicion2}, su combinacion logica en una tabla de condicionalidad se traduce en: TRUE`);
}; 
