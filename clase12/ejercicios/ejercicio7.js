/*Ejercicio 7: Matriz 5x5 
Declara una variable que contenga una matriz de 5x5 llena de puros números 
enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en 
la matriz.*/

let matriz = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10], 
    [1, 3, 5, 7, 9],
    [10, 20, 30, 40, 50], 
    [2, 4, 16, 256, 65356],

]

let suma = 0; 

for(let fila = 0; fila < matriz.length; fila ++){
    for(let columna = 0; columna < matriz[fila].length; columna ++){
        let valor = matriz[fila][columna]; 
        suma += valor

    }
}

console.log("La suma de todos los valores de la matriz da un total de:", suma);
