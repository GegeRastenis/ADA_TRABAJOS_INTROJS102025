/*Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. 
Usa una función flecha para calcular el precio final.*/

const prompt = require("prompt-sync")(); 
let precio = parseFloat(prompt("Por favor ingrese el valor neto de su producto: ")); 
let iva = parseFloat(prompt("Por favor ingrese el porcentaje de IVA: ")); 
const calcularPrecioFinal = (precio, iva) => {
    let porcentajeIva = precio * iva / 100; 
    let  precioFinal = precio + porcentajeIva
    return precioFinal
}

console.log("El precio final de su producto es:", calcularPrecioFinal(precio, iva));
