/*Ejercicio 8: Convertir grados Celsius a Fahrenheit
Crea una función expresada llamada convertir Celsius A Fahrenheit que reciba una temperatura
 en grados Celsius y devuelva la temperatura en Fahrenheit.*/

const prompt = require("prompt-sync")(); 
const gradosCelsius = parseInt(prompt("Por favor ingrese su temperatura en grados celsius: ")); 

 function celsiusAFahrenheit(){
    return (gradosCelsius * 9/5) + 32
}

console.log("Su conversion en grados fahreheit es igual a:", celsiusAFahrenheit());
