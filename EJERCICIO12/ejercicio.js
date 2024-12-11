// 12. Crear una clase Escuela con un atributo estático numEstudiantes que se
// incremente cada vez que se cree un nuevo objeto Estudiante

class Escuela{
    static numEstudiantes = 0;

    constructor(nombre){
        this.nombre = nombre;
    }

    static incrementarEstudiantes(){
        this.numEstudiantes ++;
    }
}

class Estudiante{
    constructor(nombre, escuela){
        this.nombre = nombre;
        this.escuela = escuela;
        Escuela.incrementarEstudiantes();
    }
}

const escuela1 = new Escuela("Escuela central");

const estudiante1 = new Estudiante("Juan", escuela1);
const estudiante2 = new Estudiante("María", escuela1);

console.log(`El número total de estudiantes es: ${Escuela.numEstudiantes}`);

const estudiante3 = new Estudiante("Carlos", escuela1);

console.log(`Número total de estudiantes: ${Escuela.numEstudiantes}`); 

