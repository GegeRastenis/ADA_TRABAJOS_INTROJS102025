/*Ejercicio 1: While 
Crea un programa que solicite al usuario ingresar números continuamente hasta 
que el usuario ingrese un número negativo. Luego, imprime la suma de todos los 
números ingresados.*/

const prompt = require("prompt-sync")(); 
let numero = parseInt(prompt("Por favor ingrese un numero: "))

let suma = 0; 
while(numero >= 0){
    suma = numero + suma
    numero = parseInt(prompt("Por favor ingrese un numero: "))
}
console.log(suma);
