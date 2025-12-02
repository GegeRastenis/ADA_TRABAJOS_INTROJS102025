/*Ejercicio 1:  
Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese 
dos números y muestra cuál es mayor o si son iguales.*/

const prompt = require("prompt-sync")(); 

let numero1 = parseInt(prompt("Por favor ingrese un numero: ")); 

let numero2 = parseInt(prompt("Por favor ingrese otro numero: "))

if(numero1 > numero2){
    console.log(`El primer numero ingresado ${numero1} es mayor al segundo ${numero2}`);
    
}else if(numero1 === numero2){
    console.log(`Ambos numeros ingresados son iguales`);
    
}else{
    console.log(`El primer numero ingresado ${numero1} es menor al segundo ${numero2}`);
    
}