// 5. Crear una clase base Vehiculo que tenga un constructor con parámetros de
// peso y velocidad máxima, e implemente un método mover() que imprima un
// mensaje genérico. Luego, crear dos subclases Carro y Bicicleta

class Vehiculo{
    constructor(peso, velocidadMaxima){
        this.peso = peso;
        this.velocidadMaxima = velocidadMaxima;
    }

    mover(){
        console.log("El vehículo está en movimiento");
    }
}

class Carro extends Vehiculo{
    constructor(peso, velocidadMaxima, marca){
        super(peso, velocidadMaxima);
        this.marca = marca;
    }

    mover(){
        console.log(`El carro de marca ${this.marca} está moviendose a una velocidad máxima de ${this.velocidadMaxima} km/h`);
    }
}

class Bicicleta extends Vehiculo{
    constructor(peso, velocidadMaxima, tipo){
        super(peso, velocidadMaxima);
        this.tipo = tipo;
    }

    mover(){
        console.log(`La bicicleta de tipo ${this.tipo} está avanzando a una velocidad máxima de ${this.velocidadMaxima} km/h`);
    }
}

const miCarro = new Carro(1500, 200, "Mazda");
miCarro.mover();

const miBicicleta = new Bicicleta(15, 30, "Montaña");
miBicicleta.mover();