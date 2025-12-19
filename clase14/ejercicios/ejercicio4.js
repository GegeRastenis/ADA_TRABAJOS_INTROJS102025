/*Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la cantidad.*/

const prompt = require("prompt-sync")(); 
let cantidad = parseInt(prompt("Por favor ingrese la cantidad de productos que va a llevar: ")); 
let precio = parseFloat(prompt("Por favor ingrese el precio unitario de su producto: ")); 

const calcularDescuento = (precio, cantidad)=>{
    let descuento = (precio * 40)/ 100; 
    let descuento2 = (precio * 30)/ 100; 
    let descuento3 = (precio * 20)/100; 
    if(cantidad >= 5){
        return (precio - descuento) * cantidad; 
    }else if(cantidad < 5 && cantidad > 2){
        return (precio - descuento2) * cantidad; 
    }else if(cantidad === 2){
        return (precio - descuento3) * cantidad; 
    }
}

console.log(calcularDescuento(precio, cantidad));

