// 16. Crear una clase base Vehiculo con un método mover(), y subclases Coche y
// Bicicleta que implementen este método de forma diferente.

class Vehiculo{
    constructor(nombre){
        this.nombre = nombre;
    }

    mover(){
        console.log("El vehículo se está moviendo");
    }
}

class Coche extends Vehiculo{
    constructor(nombre, marca){
        super(nombre);
        this.marca = marca;
    }

    mover(){
        console.log(`El carro ${this.marca} se está moviendo`);
    }
}

class Bicicleta extends Vehiculo{
    constructor(nombre, tipo){
        super(nombre);
        this.tipo = tipo;
    }

    mover(){
        console.log(`La bicicleta de ${this.tipo} se está moviendo`);
    }
}


const vehiculoGenerico = new Vehiculo("Vehiculo");
vehiculoGenerico.mover();

const coche1 = new Coche("Coche", "Renault");
coche1.mover();

const bicicleta1 = new Bicicleta("Bicicleta", "ruta");
bicicleta1.mover();
