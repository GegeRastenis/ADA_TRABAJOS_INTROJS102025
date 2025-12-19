/*Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, 
adulto o adulto mayor.*/

const prompt = require("prompt-sync")(); 
const edad = parseInt(prompt("Por favor ingrese su edad: ")); 

const clasificarEdad = edad =>{
    if(edad < 13){
        return "Eres un niño";

    }else if(edad >= 13 && edad <= 17){
        return "Eres un adolescente";
        
    }else if(edad > 17 && edad < 60){
        return "Eres un adulto";
    }else{
        return "Eres un adulto mayor"; 
    }
}

console.log(clasificarEdad(edad));

