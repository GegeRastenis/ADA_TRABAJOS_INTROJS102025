/*Ejercicio 8:  
Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga 
sobre los triángulos para determinar la formula).*/

const prompt = require("prompt-sync")(); 

let lado1 = parseInt(prompt("Por favor ingrese la longitud del primer lado de un triangulo: ")); 
let lado2 = parseInt(prompt("Por favor ingrese la longitud del segundo lado de un triangulo: ")); 
let lado3 = parseInt(prompt("Por favor ingrese la longitud del tercer lado de un triangulo: ")); 

if(lado1 === lado2 && lado2 === lado3){
    console.log("El triangulo formado es de tipo equilatero");
    
}else if(lado1 === lado2 && lado2 != lado3 || lado1 === lado3 && lado3 != lado2 || lado2 === lado3 && lado3 != lado1){
    console.log("El triangulo formado es de tipo isosceles");
    
}else if(lado1 != lado2 && lado2 != lado3 || lado1 != lado3 && lado3 != lado2){
    console.log("El triangulo fomado es de tipo escaleno");

}