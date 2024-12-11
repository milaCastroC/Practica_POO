// 11. Crear una clase Vehiculo con un atributo privado modelo, un atributo público
// marca, y un método privado encenderMotor() que sea usado en el método
// público arrancar().

class Vehiculo{

    #modelo;

    constructor(modelo, marca){
        this.#modelo = modelo;
        this.marca = marca;
    }

    #encenderMotor(){
        console.log(`El motor del carro marca ${this.marca} y modelo ${this.#modelo} está siendo encendido`);
    }

    arrancar(){
        this.#encenderMotor();
        console.log(`El motor del carro marca ${this.marca} y modelo ${this.#modelo} está arrancando`);
    }
}

const vehiculo1 = new Vehiculo("Optra 2006", "Chevrolet");
vehiculo1.arrancar();