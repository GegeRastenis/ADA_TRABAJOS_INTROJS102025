/*Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔	título: una cadena con el título del libro.
✔	autor: una cadena con el nombre del autor del libro.
✔	anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el formato especificado.*/

const libros = [
    {
        titulo: "Este dolor no es mio",
        autor: "Mark Wolynn", 
        anioDePublicacion: 2020

    },

    {
        titulo: "Crepusculo", 
        autor: "Stephenie Meyer",
        anioDePublicacion: 2005
    }
];

    function mostrarLibro(indice){
    for(let i = 0; i < libros.length; i++){
        return `El libro ${libros[indice].titulo} fue escrito por ${libros[indice].autor} en ${libros[indice].anioDePublicacion}`;
        
    }
}

console.log(mostrarLibro(1)); 