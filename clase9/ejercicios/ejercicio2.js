/*Ejercicio 2:  
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores 
numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está 
dentro del rango definido por las constantes.*/

const prompt = require("prompt-sync")(); 

let RANGO_MINIMO = 2

let RANGO_MAXIMO = 10 

let number = parseInt(prompt("Por favor ingrese un numero: ")); 

if(number >=RANGO_MINIMO && number <= RANGO_MAXIMO){
    console.log(`Su numero ingresado ${number} se encuentra dentro de los rangos`);
    
}else{
    console.log(`El numero ingresado por ud ${number} no se encuentra dentro de los rangos numericos seleccionados`);
    
}