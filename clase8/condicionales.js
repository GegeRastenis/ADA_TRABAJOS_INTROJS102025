/*Consigna
Crear un programa que simule un sistema de calificacion basado en la nota de un estudiante (valor numerico del 0 al 100).
El programa debe determinar si el estudiante ha aprobado, reprobado o ha obtenido una calificacion excelente, 
segun las siguientes condiciones: 
- Si la nota es menor a 60, el estudiante ha reprobado
- Si la nota esta entre 60 y 89 inclusive, el estudiante ha aprobado
- Si la nota es mayor a 90, el estudiante ha obtenido una nota excelente

Usar el condicional if, else if y else para mostrar el msje correspondiente en la consola*/

let nota = 75; 
 
if(nota < 60){
    console.log("Reprobrado");S
}else if(nota >= 60 && nota <= 89){
    console.log("Aprobado");
    
}else{
    console.log("Calificacion Excelente!");
}

