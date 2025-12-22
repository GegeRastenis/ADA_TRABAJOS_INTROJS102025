/*Simulador de una cola de atención al cliente
Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. 
Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. 
Realiza lo siguiente:
Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
Al final, muestra cuántos clientes fueron atendidos en total.
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].*/

let listaClientes = ["Ana", "Carlos", "VIP", "Sofia", "Juan"]; 
let atendidos = 0; 

while (listaClientes.length > 0) {
    let cliente = listaClientes.shift(); //atiende al primero

    if(cliente === "VIP"){
        console.log("Atendiendo cliente prioritario, por su condicion de VIP");
        
    }else{
        console.log("Atendiendo cliente", cliente);
        
    }
    atendidos ++; 
}

console.log("Total de clientes atendidos:", atendidos);
