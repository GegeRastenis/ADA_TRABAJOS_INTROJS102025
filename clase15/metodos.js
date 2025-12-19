//Creamos un array inicial con razas de perros
let razasPerros = ["Labrador", "Cocker", "Maltes", "Pug", "Beagle"]; 
console.log("Array inicial", razasPerros);

//Metodo .push() "Agrega un elemento al final del array"
razasPerros.push("Caniche"); 
console.log("Despues del metodo push: ", razasPerros);

//Metodo .pop() "Elimina el ultimo elemento del array"
let razaEliminada = razasPerros.pop(); 
console.log("Despues de pop(): ", razasPerros);
console.log("Raza eliminada: ", razaEliminada);

//Metodo .shift() "Elimina el primer elemento del array"
let primeraRaza = razasPerros.shift(); 
console.log("Despues de shift(): ", razasPerros);
console.log("La raza eliminada: ", primeraRaza);

//Metodo .unshift() "Agrega uno o mas elementos al inicio del array"
razasPerros.unshift("Doberman"); 
console.log("Despues de unshift: ", razasPerros);

//Metodo .join() "Une todos los elementos del array en un string separados por defecto con coma, sino se especifica"
let razasString = razasPerros.join(" - "); 
console.log("Array unido con join: ", razasString);

//Metodo .index() "Devuelve el primer indice donde se encuentra el elemento buscado, sino devuelve -1 (al no econtrarlo)"
let indiceCocker = razasPerros.indexOf("Cocker"); 
console.log(`La posicion de la raza cocker en el array es: ${indiceCocker}`);

let indiceFirulais = razasPerros.indexOf("Firulais"); 
console.log(indiceFirulais); //Como no va a encontrarse en el array, devuelve -1 

//Metodo .lastindexof() "Devuelve el ultimo indice del elemento buscado"
let razasDobles = ["Bulldog", "Siberiano", "Dalmata", "Salchicha", "Siberiano"]; 
console.log("Array con razas dobles: ", razasDobles);
let ultimoSiberiano = razasDobles.lastIndexOf("Siberiano"); 
console.log(ultimoSiberiano); //Devuelve posicion 4 

//Metodo .includes() "Devuelve true or false dependiendo la existencia del elemento en el array"
let tienePug = razasPerros.includes("Pug"); 
console.log(tienePug); //Devuelve true 

