// 8. Crear una clase Empleado con atributos nombre y salario. Que implemente
// un método trabajar(). Implemente encapsulación.

class Empleado{

    #nombre;
    #salario;

    constructor(nombre, salario){
        this.#nombre = nombre;
        this.#salario = salario;
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getSalario(){
        return this.#salario;
    }

    setSalario(salario){
        if (salario >= 0) {
            this.#salario = salario;
        } else {
            console.error("El salario debe ser un número positivo.");
        }
    }

    trabajar(){
        console.log(`El trabajador ${this.#nombre} está trabajando`);
    }
}

const empleado1 = new Empleado("Juan Perez, 5000");

console.log(empleado1.getNombre());
console.log(empleado1.getSalario());

empleado1.setSalario(60000);
console.log(empleado1.getSalario());

empleado1.trabajar();
