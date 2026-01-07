//Metodos avanzados

//1) .map() 
//Crear un nuevo array con los resultados de la funcion aplicada a cada elemento 

let notas = [10, 5, 4, 7, 8, 9, 2]

let notasHastaCien = notas.map(function(numero){
    return numero * 10 

}); 
console.log(notasHastaCien);

//2) .filter()
//Crea un nuevo arreglo con elementos que pasan la condicion especificada en una funcion de tipo filtro

let notasAprobadas = notas.filter(function(numero){
    return numero >= 4; 
})
console.log(notasAprobadas);


//3) .reduce()
//Reduce a un valor unico un arreglo

let sumaNotas = notas.reduce(function(acumulador, numero){
    return acumulador + numero;
}, 0)
console.log(sumaNotas);

//4) .forEach()
//Itera sobre un array pero no retorna nada

notas.forEach(function(valor, indice){
    console.log("En la posicion " + indice +  " tengo el valor " + valor);
    
})


//5) .find()
//Encuentra el "primer" elemento en el array que cumple con la condicion 

let notaEncontrada = notas.find(function(numero){
    return numero >= 8; 
})
console.log(notaEncontrada);
