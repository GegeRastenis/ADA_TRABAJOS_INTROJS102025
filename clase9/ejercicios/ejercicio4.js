/*Ejercicio 4:  
Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si 
el nombre ingresado es igual a tu nombre.*/

const prompt = require("prompt-sync")(); 
let nombre = prompt("Por favor ingrese su nombre: ")

if(nombre === "Giselle"){
    console.log("Que casualidad te llamas igual que yo! Hola Giselle!");
    
}else{
    console.log(`Hola ${nombre}! Que lindo nombre que tienes!`);
    
}