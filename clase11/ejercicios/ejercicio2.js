/*Ejercicio 2: Semáforo inteligente
Consigna:
Vamos a programar un semáforo. 
Escribe un programa que le pida al usuario ingresar un color del semáforo: 
rojo, amarillo o verde. Dependiendo del color ingresado, 
el programa debe imprimir un mensaje con la acción correspondiente:
Rojo: "Alto, no puedes avanzar."
Amarillo: "Precaución, prepárate para avanzar."
Verde: "Avanza con seguridad."
Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: 
"Color no reconocido, ingresa rojo, amarillo o verde."
Utiliza un switch para resolver este ejercicio.*/

const prompt = require("prompt-sync")(); 
let color = prompt("Por favor ingrese un color del semaforo (rojo, amarillo o verde): "); 

switch(color){
    case "rojo":
        console.log("Pare. Debe detener su vehiculo");
        break; 
    case "amarillo": 
        console.log("Precaucion. Momento de esperar su señal");
        break; 
    case "verde": 
        console.log("Puede avanzar");
        break; 
    default: 
        console.log("El color ingresado no se encuentra dentro de los parametros");
        
        
}