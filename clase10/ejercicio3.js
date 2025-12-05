/*Ejercicio 3 – Constantes / Validación de Edad: 
Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima. 
Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes 
(asignándoles los valores numéricos 18 y 99 respectivamente). 
Por último, Deberás pedirle al usuario que ingrese su edad para validarla usando parseInt.
Desglosando el ejercicio deberás:
Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignarás los valores numéricos 18 y 99 respectivamente.
Pide al usuario que ingrese su edad.
Usa “parseInt” para convertir la entrada del usuario a un número entero.
Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.
Pista: Las constantes se declaran con la palabra reservada const y es buena práctica que sus nombres sean declarados siempre con letras mayúsculas. 
Utiliza parseInt para convertir la entrada del usuario a un número entero.*/

const prompt =  require("prompt-sync")(); 

const EDAD_MINIMA = 18; 

const EDAD_MAXIMA = 99; 

let edad = parseInt(prompt("Por favor ingrese su edad para comenzar con la encuesta: ")); 

if(edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA){
    console.log("Bienvenido a la encuesta!");
    
}else{
    console.log("Su edad no le permite completar esta encuesta.");
    
}