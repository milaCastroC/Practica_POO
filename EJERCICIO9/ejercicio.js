// 9. Crear una clase Empleado y una subclase Gerente que sobrescriba un
// método trabajar()

class Empleado{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar(){
        console.log(`El empleado ${this.nombre} está trabajando`);
    }
}

class Gerente extends Empleado{
    constructor(nombre, salario, dependencia){
        super(nombre, salario);
        this.dependencia = dependencia;
    }

    trabajar(){
        console.log(`${this.nombre} es el gerente de ${this.dependencia}`);
    }
}

const empleado1 = new Empleado("Juan Lopez", 500000);
empleado1.trabajar();

const gerente1 = new Gerente("Maria García", 10000000, "Ventas");
gerente1.trabajar();