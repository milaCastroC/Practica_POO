// 2. Crear una clase Contador con un atributo estático cuenta y un método
// estático incrementar() que aumente el valor de cuenta

class Contador{
    static cuenta = 0;

    static incrementar(){
        Contador.cuenta ++;
    }
}

let cantVeces = parseInt(prompt("Ingrese la cantidad de veces que desea incrementar: "));

for(let i = 0; i < cantVeces; i++){
    Contador.incrementar();
    console.log("Se ha incrementado");
}

console.log(`El valor de la cuenta es`, Contador.cuenta);