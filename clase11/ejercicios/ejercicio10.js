/*Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 
Luego, pide al usuario que adivine el número hasta 3 intentos. 
Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación
y detén los intentos restantes. Si no acierta después de los 3 intentos, 
muestra el número secreto. Usa un for para resolver este ejercicio.*/

const prompt = require("prompt-sync")(); 

let numeroAlAzar = Math.floor(Math.random()*10)+ 1; 

console.log("Adivina un numero entre 1 y 10, tienes 3 intentos");

let intento = 0; 

for(let i = 1; i <=3; i ++ ){
    intento = parseInt(prompt(`Intento ${i}: Ingresa un numero: `));
    if(intento === numeroAlAzar){
        console.log("Felicitaciones! Haz adivinado!");
        break; 
    }else{
        console.log("Numero Incorrecto...");
        
    }
}

if(intento !== numeroAlAzar){
    console.log(`No has acertado... El numero a adivinar era: ${numeroAlAzar}`);
    
}