/*Encuentra la película más corta y analiza los títulos largos 
Supón que tienes una lista de películas con su duración en minutos: 
const movies = [ 
{ title: 'El Señor de los Anillos', duration: 200 }, 
{ title: 'Inception', duration: 148 }, 
{ title: 'Matrix', duration: 136 }, 
{ title: 'Toy Story', duration: 81 }, 
{ title: 'Coco', duration: 105 } 
]; 
Queremos: 
o Encontrar la película más corta en duración. 
o De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 
caracteres. 
o Crear una lista de los títulos largos en minúsculas. 
o Imprime en la consola: 
o El título de la película más corta. 
o La lista de títulos largos en minúsculas.*/

const movies = [ 
{ title: 'El Señor de los Anillos', duration: 200 }, 
{ title: 'Inception', duration: 148 }, 
{ title: 'Matrix', duration: 136 }, 
{ title: 'Toy Story', duration: 81 }, 
{ title: 'Coco', duration: 105 } 
]; 

//La pelicula mas corta 

let peliculaMasCorta = movies.reduce(function(masCorta, peli){
   if(peli.duration < masCorta.duration){
    return peli
   }
   return masCorta
})

console.log(peliculaMasCorta);

//Peliculas restantes, titulo con mas de 10 caracteres 

let restantes = movies.filter(function(peli){
    return peli !== peliculaMasCorta
}); 

console.log(restantes);

let titulosMasLargos = restantes.filter(function(peli){
    return peli.title.length > 10; 
}); 
console.log(titulosMasLargos);

//Titulo en minuscula 

let tituloEnMinuscula = titulosMasLargos.map(function(peli){
    return peli.title.toLowerCase(); 
}); 

console.log(tituloEnMinuscula);

//Imprimir en consola el titulo de la peli mas corta y la lista de los titulos mas largos en minuscula

console.log("El titulo de la pelicula mas corta es:", peliculaMasCorta.title);
console.log("El titulo de la peli mas larga en minuscula es:", tituloEnMinuscula.join(" "));

