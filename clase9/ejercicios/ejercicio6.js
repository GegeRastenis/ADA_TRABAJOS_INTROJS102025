/*Ejercicio 6:  
Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. 
Muestra un mensaje personalizado según el caso.*/

const prompt = require("prompt-sync")(); 

let edad = parseInt(prompt("Por favor ingrese su edad: ")); 

if(edad >= 18){ 
    console.log("Tienes permitido el ingreso a esta plataforma. Bienvenido!");
    
}else{
    console.log("Todavia eres menor de 18 años y no tienes permitido el ingreso a esta plataforma");
    
}