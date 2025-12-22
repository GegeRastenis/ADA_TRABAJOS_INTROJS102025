/*Clasificación de palabras según su longitud
Tienes una lista de palabras en una oración. Debes:
Dividir la oración en palabras individuales.
Clasificar las palabras en dos categorías:
Cortas (menos de 5 letras)
Largas (5 letras o más)
Mostrar ambas listas de palabras clasificadas.
La oración es: "JavaScript es un lenguaje poderoso y versátil".*/

let oracion = "JavaScript es un lenguaje poderoso y versatil"; 
//Dividir la oracion en palabras individuales
let palabras = oracion.split(" "); 
console.log(palabras);
//Clasificar las palabras en 2 categorias: Cortas (- de 5 letras) y largas (+ de 5)
let cortas = [];
let largas = []; 
for(let i = 0; i < palabras.length; i++){
    if(palabras[i].length > 5){
        largas.push(palabras[i]); 
    }else{
        cortas.push(palabras[i]); 
    }
}

console.log("Las palabras cortas, con menos de 5 letras son:", cortas);
console.log("Las palabras largas, con mas de 5 letras son:", largas);

