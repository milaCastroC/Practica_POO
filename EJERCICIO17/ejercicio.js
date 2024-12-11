// 17. Crear una clase base Empleado con un atributo estático totalEmpleados que
// se incremente cada vez que se cree un Empleado o un Gerente.

class Empleado{
    static totalEmpleados = 0;

    constructor(nombre){
        this.nombre = nombre;
        Empleado.totalEmpleados ++;
    }

    getNombre(){
        return this.nombre;
    }
}

class Gerente extends Empleado{
    constructor(nombre, dependencia) {
        super(nombre); 
        this.dependencia = dependencia;
    }

    getDependencia() {
        return this.dependencia;
    }
}

const empleado1 = new Empleado("Juan");
console.log(`Total empleados: ${Empleado.totalEmpleados}`);

const empleado2 = new Empleado("María");
console.log(`Total empleados: ${Empleado.totalEmpleados}`);

const gerente1 = new Gerente("Carlos", "Ventas");
console.log(`Total empleados: ${Empleado.totalEmpleados}`);

console.log(`Gerente: ${gerente1.getNombre()}, Departamento: ${gerente1.getDependencia()}`);