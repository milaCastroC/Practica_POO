// Crear una clase Avion que implemente dos métodos de objeto y
// dos atributos de objeto, también, un atributo de clase(estático)
// y un método de clase(estático)

class Avion{
    //Atributos
    static cantidadAviones = 0;

    constructor(matricula, modelo, capacidad){
        this.matricula =  matricula;
        this.modelo = modelo;
        this.capacidad = capacidad;
        Avion.cantidadAviones ++;
    }

    informacion(){
        console.log(`El avión con matrícula: ${this.matricula} \n`+
            `Modelo: ${this.modelo} \n`+
           `Tiene una capacidad para: ${this.capacidad} pasajeros`);
    }

    static cantidadTotalAviones(){
        console.log(`La cantidad total de aviones registrados es: ${this.cantidadAviones}`);
    }
}

const avion1 = new Avion("AV1","Boeing 747", 400);
const avion2 = new Avion("AV2","Airbus A320", 180);

avion1.informacion();
avion2.informacion();

Avion.cantidadTotalAviones();