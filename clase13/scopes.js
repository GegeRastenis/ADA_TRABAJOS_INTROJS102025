//Variable con scope global 
let mensajeGlobal = "Estoy en el escopa global"; 

function mostrarMensajes(){ 
    let mensajeLocal = "Estoy en el scope local"; 
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
    
    
}

mostrarMensajes(); 

//console.log(mensajeLocal); //esto causara error: Reference error 
