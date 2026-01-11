/*Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays 
Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes 
propiedades: nombre, edad y un array de notas (con 5 notas).  
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las 
siguientes tareas: 
1. Agregar una nueva nota al array de notas. 
2. Eliminar la primera nota del array. 
3. Calcular el promedio de las notas restantes. 
4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el 
método “toUpperCase()” 
https://www.w3schools.com/jsref/jsref_touppercase.asp 
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.*/

const estudiante = {
    nombre: 'juan', 
    edad: 20, 
    notas: [8, 7, 6, 9, 10]
}

function procesarEstudiante(estudiante){
    //Agrega una nota
    estudiante.notas.push(5); 
    //Elimina la primera nota del array 
    estudiante.notas.shift();  
    //Promedio de notas restantes
    let sumaNotas = estudiante.notas.reduce(function(acumulador, nota){
        return acumulador + nota
    }, 0)

    let promedio = sumaNotas/ estudiante.notas.length;
   
    //Nombre del estudiante a mayuscula y devolver un nuevo objeto con promedio 
    let nombreAMayuscula = estudiante.nombre.toUpperCase(); 
    
    return {
        nombre: nombreAMayuscula, 
        promedio: promedio
    }; 
    
}

console.log(procesarEstudiante(estudiante));
