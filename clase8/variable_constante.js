//Declaracion de variables y constantes

const { log } = require("node:console");

let nombre = "Giselle"; 
const edad = 28; 
const altura = 156; 

console.log(`Hola mi nombre es ${nombre} y mido ${altura} cm.`);   

//Cambiar el valor de una variable

nombre = "Fulana"; 
console.log(`Ahora mi nombre es ${nombre}`);

//No se puede reasignar una variable 
//altura = 150; 