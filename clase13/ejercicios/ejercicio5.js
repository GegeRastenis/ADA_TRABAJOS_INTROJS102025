/*Ejercicio 5: Concatenar nombres (función expresada)
Crea una función expresada llamada concatenarNombres que reciba dos nombres 
(nombre y apellido) como parámetros y devuelva el nombre completo concatenado.*/

const prompt = require("prompt-sync")(); 
let nombre = prompt("Por favor ingrese su nombre: "); 
let apellido = prompt("Por favor ingrese su apellido: "); 

const concatenarNombres = function(nombre, apellido){
    return `Mi nombre completo es: ${nombre} ${apellido}`; 
}
console.log(concatenarNombres("Giselle", "Rastenis"));
