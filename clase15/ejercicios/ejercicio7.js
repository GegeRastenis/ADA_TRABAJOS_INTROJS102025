/*Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. 
Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.*/

let listaDeComidas = ["Pizza", "Hamburguesa", "Tacos"]; 

function haySushi(){
    let sushi = listaDeComidas.includes();
        if(sushi === true){
            return "Existe sushi en el listado de comida";
            
        }else{
            return "No hay sushi en el listado de comida";
            
        }
    }
console.log(haySushi()); 

