/*Ejercicio 4: Transformación y Análisis de Cadenas 
Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a 
ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”. 
Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas: 
1. 
Quite los espacios en blanco alrededor de cada nombre. 
2. Verifique si existe el nombre "Juan". 
3. Reemplace todos los nombres "María" por "Ana". 
4. Encuentre el índice del nombre "Pedro". 
5. Devuelva una cadena de nombres en orden alfabético separados por puntos. 
Investigar el método “.sort()” 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
/Array/sort*/

const prompt = require("prompt-sync")(); 
let nombres = prompt("Por favor ingrese un listado de nombres separados por comas: "); 

function transformarYAnalizarNombres(nombres){
    //Quitar los espacios al inicio y al final 
    let limpio = nombres.trim(); 
    //Convertir en array
    let lista = nombres.split(",") 
    //Quitar espacios entre los nombres
    let listaSinEspacios = lista.map(function(nombre){
        return nombre.trim(); 
    })
    //Verificar si existe Juan 
    let hayJuan = listaSinEspacios.includes("Juan"); 
    //Reemplazar todas las Maria por Ana

    let reemplazoMaria = listaSinEspacios.map(function(nombre){
        if(nombre === "Maria"){
            return "Ana"; 
        }return nombre; 
    })
   
    //Encontrar indice de Pedro 
    let encontrarPedro = reemplazoMaria.indexOf("Pedro"); 
 
    

    return {
        listaSinEspacios: listaSinEspacios, 
        hayJuan: hayJuan, 
        reemplazoMaria: reemplazoMaria, 
        encontrarPedro: encontrarPedro
    }
}; 

let resultado = transformarYAnalizarNombres(nombres);

console.log(resultado);

