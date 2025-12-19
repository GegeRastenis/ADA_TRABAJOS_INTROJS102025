/*Ejercicio 2: Eliminar al último invitado
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. 
El último invitado no puede asistir. Elimina al último invitado y muestra quién fue eliminado y 
el estado actualizado de la lista.*/

let invitados = ["Ana", "Juan", "Carlos", "Sofia"]; 

let inasistenciaAlEvento = invitados.pop(); 

console.log("La Persona que no podra asistir al evento es:", inasistenciaAlEvento);
console.log("El listado actualizado es:", invitados);

