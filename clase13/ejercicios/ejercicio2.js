/*Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros 
y devuelva el número mayor.*/

function encontrarMayor(numero, numero2){
    if(numero > numero2){
        return `El numero ${numero} es mayor que ${numero2}`;
        
    }else{
        return `El numero ${numero2} es mayor que ${numero} `;
        
    }
}

console.log(encontrarMayor(6, 7));
