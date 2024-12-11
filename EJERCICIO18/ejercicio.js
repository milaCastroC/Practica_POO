// 18. Crear una clase Persona con un atributo privado edad y una subclases
// Empleado que acceda al método público setEdad() de Persona para
// modificar edad

class Persona{
    #edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.#edad = edad;
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(edad) {
        if (edad >= 0) {
            this.#edad = edad;
        } else {
            console.error("La edad debe ser un número positivo.");
        }
    }
}

class Empleado extends Persona{
    constructor(nombre, edad, puesto){
        super(nombre, edad);
        this.puesto = puesto;
    }

    actualizarEdad(nuevaEdad){
        this.setEdad(nuevaEdad);
    }
}

const empleado1 = new Empleado("Juan", 30, "Desarrollador");
console.log(`La edad de ${empleado1.nombre} es:`, empleado1.getEdad());

empleado1.actualizarEdad(35); 
console.log(`La edad de ${empleado1.nombre} es:`, empleado1.getEdad());

