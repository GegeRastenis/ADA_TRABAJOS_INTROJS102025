/*Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. 
Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), 
eres libre de elegir el que desees, eso si, investiga sobre el que usaras.*/

//Intercambio de valores: Variable Aritmetica

let a = 5; 
let b = 10 

console.log(`Antes del intercambio a = ${a} y b = ${b}`);

let aux = a; // aux guarda temporalmente el valor de a
a = b; // a toma el valor de b
b = aux; // b toma el valor guardado en aux 

console.log(`Despues del intercambio a = ${a} y b = ${b}`);

