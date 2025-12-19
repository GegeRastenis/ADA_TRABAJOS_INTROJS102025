//Creamos una cadena de ejemplo
let descripPerro = " El pastor aleman es un perro muy inteligente y leal.  "
console.log("Cadena original", descripPerro);

//Propiedades 
//1. length: Devuelve la longitud de la cadena o de un array 
console.log("Longitud de la cadena con length: ", descripPerro.length); //Devuelve 55
//2. indexof: Devuelve el primer indice donde se encuentra una subcadena (o -1 si no esta) 
let indiceInteligente = descripPerro.indexOf("inteligente"); 
console.log("Indice de inteligente", indiceInteligente); //Devuelve 34

//Metodos
//3. slice: Extrae una parte de la cadena entre 2 indices 
let subcadena = descripPerro.slice(3,17); 
console.log("Subcadena con slice:", subcadena); //Devuelve " pastor aleman"
//4. trim: Elimina los espacios al inicio y al final 
let cadenaSinEspacios = descripPerro.trim(); 
console.log(cadenaSinEspacios);
//5. replace: Reemplaza una subcadena por otra 
let cadenaReemplazada = descripPerro.replace("inteligente", "valiente"); 
console.log("La nueva frase luego de replace es: ", cadenaReemplazada);
//6. split: Divide un string y lo convierte en un array 
let palabras = descripPerro.split(" "); 
console.log("Cadena dividida con split: ", palabras);



