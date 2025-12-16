//Ejemplo 1: Funcion normal: 
function multiplicarPorDos(num){
    return num * 2; 
}

//Llamada a la funcion normal 
console.log(multiplicarPorDos(5)); //10 

//Ejemplo 2: Funcion arrow: 
const multiplicarPorDosArrow = (num)=>{
    return num * 2; 
}; 

//Llamada a la funcion arrow 
console.log(multiplicarPorDosArrow(5)); //10 

//Ejemplo 3: Funcion arrow mas simple (sin llaves y sin "return")
const multiplicarPorDosArrowSimple = (num) => num * 2; 

//Llamada a la funcion arrow simple
console.log(multiplicarPorDosArrowSimple(5)); //10 


