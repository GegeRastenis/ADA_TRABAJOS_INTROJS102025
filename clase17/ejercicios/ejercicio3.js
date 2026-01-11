/*Ejercicio 3: Gestión Compleja de Arrays 
A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que 
realice las siguientes tareas: 
1. Añada un nuevo producto al array. 
2. Elimine el último producto del array. 
3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o 
investigar el método “findIndex()” 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
/Array/findIndex
4.Verifique si existe un producto con precio mayor a 50. Para esto investigar el 
método “.some()” 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Arr
ay/some 
5. Devuelva una cadena de nombres de productos separados por comas.*/

let productos = [
    { nombre: "Alfajores", precio: 30 }, 
    { nombre: "Chocolates", precio: 50 }, 
    { nombre: "Chupetines", precio: 70 }, 
    { nombre: "Caramelos", precio: 20 }, 
    { nombre: "Bombones", precio: 20 }, 
]; 

function gestionarProductos(productos){
    //Anadir un nuevo producto 
    productos.push({nombre: "Chicles", precio: 15}); 
    //Elimine el ultimo producto 
    productos.pop(); 
    //Ecuentre el indice de un producto especifico
    let productoBuscado = "Caramelos"; 
    let indice = productos.findIndex(function(p){
        return p.nombre === productoBuscado
    })  
    //Precios mayor a 50 
    let mayorACincuenta = productos.some(function(p){
        return p.precio > 50; 
    }); 
    //Cadena separadas por comas 
    let nombresDeProductos = productos.map(function(p){
        return p.nombre   
    }); 

    let listadoDeProductos = nombresDeProductos.join(", "); 

    return {
        productos: productos, 
        indice: indice, 
        mayorACincuenta: mayorACincuenta, 
        listadoDeProductos: listadoDeProductos
    }
}; 

let resultado = gestionarProductos(productos)
console.log(resultado);

