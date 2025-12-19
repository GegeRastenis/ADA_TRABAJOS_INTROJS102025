/*Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona 
sus flores favoritas. Realiza las siguientes acciones:
1.	Inicializa un array vacío para almacenar las flores favoritas.
2.	Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
agrega cada una al array manualmente (sin usar métodos como push).
3.	Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
4.	Muestra por consola cuántas de las flores favoritas se mencionaron 
(esto debe hacerse manualmente).*/

const prompt = require("prompt-sync")(); 

let floresFavoritas = []; 

for(let i = 1; i <= 3; i ++){
    let flores = prompt(`Cual es tu flor favorita numero ${i}? `); 
    floresFavoritas[i] = flores; 
}; 

let florABuscar = prompt("Cual es la flor que deseas buscar?: "); 

function encontrarFlor(nombreFlor){
    let contador = 0; 
    for(let i = 0; i < floresFavoritas.length; i++){
        if(nombreFlor === floresFavoritas[i]){
            contador ++ 
        }
    }
    if(contador > 0){
        console.log(`Esa flor se encuentra dentro de sus flores favoritas y la encuentras ${contador} vez/ veces.`);
        
    }else{
        console.log("Esa flor no es de sus favoritas");
        
    }
}

encontrarFlor(florABuscar);
