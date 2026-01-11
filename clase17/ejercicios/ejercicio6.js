/*Ejercicio 6: Autos y más autos… 
Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida 
de marcas de autos: 
1. Quite los espacios en blanco alrededor de cada marca. 
2. Verifique si existe la marca "Tesla". 
3. Reemplace todas las marcas "Ford" por "BMW". 
4. Encuentre el índice de la marca "Chevrolet".  
5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()” */

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
function gestionarAutos(entrada){
    //Quitar los espacios en blanco
    let autos = entrada.split(","); 
    let sinEspacios = autos.map(function(auto){
        return auto.trim(); 
    }); 
    //Verificar si existe Tesla
    let tesla = sinEspacios.includes("Tesla"); 
    //Reemplazar Ford por BMW
    let bmw = sinEspacios.map(function(auto){
        if(auto === "Ford"){
            return "BMW"
        }else{
            return auto
        }
    }); 
    //Encontrar indice Chevrolet
    let indiceChevrolet = bmw.indexOf("Chevrolet"); 
    //Devolver cadena de marcas en orden alfabetico, separadas por puntos 
    let marcas = bmw.sort().join("."); 
    return marcas; 
}



let resultado = gestionarAutos(entrada); 
console.log(resultado);
