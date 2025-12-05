/*Ejercicio 6 - Comparaciones y Operadores Lógicos: 
Declara dos variables con valores numéricos. 
Utiliza operadores de comparación y lógicos para verificar si ambos números son mayores que 10 y muestra el resultado en la consola.
Pasos a seguir:
Declaración y Asignación de Variables:
Declara dos variables y asígnales valores numéricos de tu elección.
Operadores de Comparación y Lógicos:
Utiliza los operadores > (mayor que) y && (y lógico) para verificar si ambos números son mayores que 10.
Mostrar Resultado en la Consola:
Utiliza console.log() para mostrar el resultado de la comparación.
Pista: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre al cual vamos a hacer referencia.
Pista 2: Los operadores de comparación en JavaScript son >, <, >=, <=, ===, !==. 
El operador lógico "&&" (y lógico) se utiliza para combinar condiciones y todas deben cumplirse para que el resultado sea verdadero.*/

let primerNumero = 22;
let segundoNumero = 16; 

if(primerNumero > 10 && segundoNumero > 10){
    console.log(`Tanto el primer nro ingresado: ${primerNumero}, como el segundo nro ingresado: ${segundoNumero} son mayores a 10`);
}else{
    console.log("Alguno de los numeros ingresados no son mayores a 10");
    
}