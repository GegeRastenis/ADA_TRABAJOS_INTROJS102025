/*Ejercicio 10:  
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana 
correspondiente. Si el número no está dentro de ese rango, muestra un mensaje 
de error.*/

const prompt = require('prompt-sync')(); 
let dia = parseInt(prompt("Por favor ingrese un numero del 1 al 7: ")); 

if(dia === 1){
    console.log("El numero ingresado corresponde al dia Lunes");
    
}else if(dia === 2){
    console.log("El numero ingresado corresponde al dia Martes");
    
}else if(dia === 3){
    console.log("El numero ingresado corresponde al dia Miercoles");
    
}else if(dia === 4){
    console.log("El numero ingresado corresponde al dia Jueves");
    
}else if(dia === 5){
    console.log("El numero ingresado corresponde al dia Viernes");
    
}else if(dia === 6){
    console.log(("El numero ingresado corresponde al dia Sabado"));
    
}else if(dia === 7){
    console.log("El numero ingresado corresponde al dia Domingo");
    
}else{
    console.log("Ese numero no se encuentra dentro del parametro solicitado");
    
}