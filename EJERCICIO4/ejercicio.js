// 4. Crear una clase base Animal con un método hacerSonido(), y dos subclases
// Perro y Gato que sobrescriban el método.

class Animal{

    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log("Animal hacer sonido");
    }
}
class Gato extends Animal {
    static sonido = "Miau";

    constructor(nombre) {
        super(nombre);
    }

    hacerSonido() {
        console.log(`${Gato.sonido}, mi nombre es ${this.nombre} y soy un gato`);
    }
}

class Perro extends Animal {
    static sonido = "Guau";

    constructor(nombre) {
        super(nombre);
    }

    hacerSonido() {
        console.log(`${Perro.sonido}, mi nombre es ${this.nombre} y soy un perro`);
    }
}

const gato1 = new Gato("Michi");
const perro1 = new Perro("Firu");

gato1.hacerSonido();
perro1.hacerSonido();