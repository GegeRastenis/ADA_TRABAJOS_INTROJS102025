/*Ejercicio 7: “La Floreria” 
Escribe una función "gestionarFloreria" que realice las siguientes tareas con una lista 
predefinida de nombres de flores: 
1. Quite los espacios en blanco alrededor de cada flor. 
2. Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la 
lista. 
3. Reemplace todas las flores "Orquídea" por "Clavel". 
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio 
de la lista. 
5. Devuelva una cadena de flores en orden alfabético separadas por puntos.*/

let entrada = "Rosa, Tulipan, Orquidea, Lirio"; 

function gestionarFloreria(entrada){
    //Quitar los espacios en blanco
    let flores = entrada.split(",");
    let sinEspacios = flores.map(function(flor){
        return flor.trim(); 
    });
    //Existe Margarita 
    if(sinEspacios.includes("Margarita")){
        sinEspacios.push("Azucena")
    }; 
    //Reemplazar Orquidea por Clavel 
    let reemplazada = sinEspacios.map(function(f){
        if(f === "Orquidea"){
            return "Clavel"
        }else{
            return f; 
        }
    }); 
    //Encontrar el indice de Girasol y si no esta agregarlo al inicio de la lista
    if(!reemplazada.includes("Girasol")){
        reemplazada.unshift("Girasol")
    }; 
    //Cadena de flores separadas en orden alfabetico por puntos
    let floreria = reemplazada.sort().join("."); 
    return floreria; 
}

let resultado = gestionarFloreria(entrada); 
console.log(resultado);
