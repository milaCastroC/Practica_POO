// 15. Crear una clase base Animal con un método hacerSonido() y dos subclases
// Perro y Gato que sobrescriban este método.

class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log("El animal está haciendo un sonido");
    }
}

class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }

    hacerSonido(){
        console.log(`El ${this.nombre} de raza ${this.raza} está ladrando`);
    }
}

class Gato extends Animal{
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }

    hacerSonido(){
        console.log(`El ${this.nombre} de raza ${this.raza} está maullando`);
    }
}

const animalGenerico = new Animal("Animal");
animalGenerico.hacerSonido();

const perro1 = new Perro("Perro", "Pincher");
perro1.hacerSonido();

const gato1 = new Gato("Gato", "Siames");
gato1.hacerSonido();