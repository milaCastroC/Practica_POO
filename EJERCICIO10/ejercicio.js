// 10. Crear una clase base InstrumentoMusical con un método tocar() que debe
// ser implementado por las clases hijas.

class InstrumentoMusical{
    constructor(nombre){
        this.nombre = nombre;
    }

    tocar(){
        console.log("El instrumento está siendo tocado");
    }
}

class Guitarra extends InstrumentoMusical{
    constructor(nombre, tipo){
        super(nombre);
        this.tipo = tipo;
    }

    tocar(){
        console.log(`La guitarra ${this.tipo} está siendo tocada`);
    }
}

class Piano extends InstrumentoMusical{
    constructor(nombre, marca){
        super(nombre);
        this.marca = marca;
    }

    tocar(){
        console.log(`El piano ${this.marca} está siendo tocado`);
    }
}

const instrumentoGenerico = new InstrumentoMusical("Instrumento genérico");
instrumentoGenerico.tocar();

const guitarra1 = new Guitarra("guitarra", "clásica");
guitarra1.tocar();

const piano1 = new Piano("piano", "Steinway & Sons");
piano1.tocar();