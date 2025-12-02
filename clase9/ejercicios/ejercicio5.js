/*Ejercicio 5: 
Escribe un programa que pida al usuario que ingrese tres números y determine 
cuál es el mayor de los tres.*/

const prompt = require("prompt-sync")(); 
let number1 = parseInt(prompt("Por favor ingrese un numero: ")); 
let number2 = parseInt(prompt("Por favor ingrese un segundo numero: ")); 
let number3 = parseInt(prompt("Por favor ingrese un tercer numero: ")); 

if(number1 > number2 && number1 > number3){
    console.log(`El primer numero ingresado ${number1} es mayor a los otros 2 numeros ingresados posteriormente ${number2} y ${number3}`);
    
}else if(number2 > number1 && number2 > number3){
    console.log(`El segundo numero ingresado ${number2} es mayor a los otros 2 numeros ingresados ${number1} y ${number3}`);
    
}else if(number3 > number1 && number3 > number2){
    console.log(`El tercer numero ingresado ${number3} es mayor a los otros 2 numeros ingresados ${number1} y ${number2}`);
    
}