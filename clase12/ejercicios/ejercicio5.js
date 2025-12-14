/*Ejercicio 5: Uso de Arrays y Condicionales 
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en 
un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se 
encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su 
desarrollo)*/

const prompt = require("prompt-sync")(); 

let nombres = []; 

for(let i = 0; i < 5; i ++){
    let nombreIngresado = prompt(`Ingrese el nombre deseado ${i + 1}:  `); 
    nombres[i] = nombreIngresado; 
}; 

let nombreBuscado = prompt("Ingrese un nombre para chequear que este en el listado: "); 

if(nombres.includes(nombreBuscado)){
    console.log(`El nombre ${nombreBuscado} se encuentra en el listado!`);

}else{ 
    console.log(`El nombre ${nombreBuscado} NO se encuentra en el listado...`);
    
}

console.log(`Los nombres originalmente ingresados fueron: ${nombres}`);
