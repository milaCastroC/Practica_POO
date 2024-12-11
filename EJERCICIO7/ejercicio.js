// 7. Crear una clase Coche con un método privado encenderMotor() y un método
// público conducir() que llame al método privado.

class Coche{
    
    #encenderMotor(){
        console.log("El motor se encendió");
    }

    conducir(){
        this.#encenderMotor();
        console.log("El coche está siendo conducido");
    }
}

const miCoche = new Coche();
miCoche.conducir();