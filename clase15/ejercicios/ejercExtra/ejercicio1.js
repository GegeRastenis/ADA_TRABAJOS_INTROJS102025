/*Gestión de inventario de una tienda
Eres encargado de una tienda y tienes un inventario inicial de productos. 
La lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
Debes realizar las siguientes acciones:
Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
Eliminar el primer producto del inventario.
Mostrar la lista actualizada de productos en una sola cadena, separados por comas.*/

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"]; 
//Agregar nuevo producto 
inventario.push("Impresora"); 
console.log(inventario);
//Comprobar si existe tablet 
let haytablet = inventario.includes("Tablet")
    if(haytablet === "true"){
        console.log("Tablet se encuentra dentro del inventario");
        
    }else{
        console.log("El producto tablet no se encuentra dentro del inventario");
        
    }
//Eliminar el primer producto del inventario
inventario.shift(); 
console.log(inventario);
//Mostrar la lista actualizada de productos en una sola cadena, separadas por comas 
let nuevoInventario = inventario.join(", "); 
console.log("El nuevo listado de inventario es: ", nuevoInventario);


