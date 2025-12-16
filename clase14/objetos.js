//Definimos un objeto llamado "auto"
const auto = {
    marca: "Toyota", 
    modelo: "Corolla", 
    anio: 2022, 
    color: "rojo", 
    //metodo que se usa para describir el auto
    describir: function(){
        //aqui "this" hace referencia al objeto "auto"
        return `Este auto es un ${this.marca} ${this.modelo} del anio ${this.anio} y de color ${this.color}`; 
    }
}

//Llamada al metodo "describir" del objeto "auto"
console.log(auto.describir()); //Este auto es un Toyota Corolla del anio 2022 y de color rojo 

//Accediendo correctamente a las propiedades del objeto 
console.log(auto.marca);//Toyota
console.log(auto.modelo);//Corolla
console.log(auto.anio);//2022
console.log(auto.color);//rojo 




