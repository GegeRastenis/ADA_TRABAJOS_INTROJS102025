/*Calcula el total de ventas de productos seleccionados 
Supón que tienes una lista de productos con sus precios en formato de objeto: 
const products = [ 
{ name: 'Laptop', price: 1000 }, 
{ name: 'Mouse', price: 25 }, 
{ name: 'Teclado', price: 50 }, 
{ name: 'Monitor', price: 200 }, 
{ name: 'Audífonos', price: 75 } 
]; 
Queremos: 
o Seleccionar los productos cuyo precio sea mayor o igual a 50. 
o Obtener solo los nombres de esos productos. 
o Calcular el precio total sumando los precios de los productos seleccionados. 
o Imprime el total y los nombres de los productos seleccionados en la consola.*/

const products = [ 
{ name: 'Laptop', price: 1000 }, 
{ name: 'Mouse', price: 25 }, 
{ name: 'Teclado', price: 50 }, 
{ name: 'Monitor', price: 200 }, 
{ name: 'Audífonos', price: 75 } 
]; 

//Productos precio mayor o igual a 50 
let productosMasCaros = products.filter(function(product){
    return product.price >= 50;
})

console.log(productosMasCaros);

//Obtener solo los nombres
let nombresDeProductos = productosMasCaros.map(function(product){
    return product.name
}); 

console.log(nombresDeProductos);

//Precio total de los productos seleccionados 

let precioFinal = productosMasCaros.reduce(function(acumulador, product){
        return acumulador + product.price; 
}, 0); 

console.log(precioFinal);

//Imprimir total y nombres de prod. seleccionados 

console.log("Los productos seleccionados son:", nombresDeProductos.join(", "));
console.log("Estos productos ascienden a un total de USD:", precioFinal);

