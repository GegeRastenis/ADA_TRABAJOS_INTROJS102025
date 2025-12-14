/*Ejercicio 2: Do While 
Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la 
correcta. La contraseña correcta es "1234".*/

const prompt = require("prompt-sync")(); 

let password = 1234; 

let intentos = 3; 

do{
    password = parseInt(prompt("Por favor ingrese su password numerico de 4 digitos: "));
    if(password !== 1234){ 
    intentos --; 
    console.log(`Password incorrecto. Intento restante: ${intentos}`);
    
    }
}while(password !== 1234 && intentos > 0);

if(password === 1234){
    console.log("Acceso correcto! Bienvenid@!");
}else{
    console.log("Acceso bloqueado, ya no puede seguir intentando");
    
}

