const prompt = require("prompt-sync")({ sigint: true });

const nombre = prompt("¿Cómo te llamás? ");
console.log("Hola", nombre);