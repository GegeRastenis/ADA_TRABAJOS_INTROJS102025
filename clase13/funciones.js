//Funcion normal: 

function calcularBaseDeRectangulo(base, altura){
    return base*altura
}

console.log("Area del rectangulo:", calcularBaseDeRectangulo(10, 5)); 

//Funcion declarada: 

function esPar(numero){
    if(numero % 2 === 0){
        return "Es par"
    }else{
        return "Es impar"
    }
}
console.log("El numero 20:", esPar(20));

//Funcion expresada: 

const encontrarMayor = function(a, b){
    if(a > b){
        return a;
    }else{
        return b; 
    }
}
console.log("El mayor entre 15 y 25 es:", encontrarMayor(15, 25));
