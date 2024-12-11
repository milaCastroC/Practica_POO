// 13. Crear una clase Cliente con un atributo privado saldo y un método privado
// calcularDescuento() que se utilice dentro de un método público
// aplicarDescuento()

class Cliente{
    #saldo

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.#saldo = saldo;
    }

    getSaldo(){
        return this.#saldo;
    }

    setSaldo(saldo){
        this.#saldo = saldo;
    }

    #calcularDescuento(){
        if(this.#saldo >= 10000){
            return 0.1;
        }else if(this.#saldo >= 50000){
            return 0.5;
        }else{
            return 0;
        }
    }

    aplicarDescuento(){
        const descuento = this.#calcularDescuento();
        const montoDescuento = this.#saldo * descuento;

        this.#saldo -= montoDescuento;
        console.log(`Se aplicó un descuento del ${descuento * 100}%, el nuevo saldo es ${this.#saldo}`);
    }
}


console.log("CLIENTE 1");
const cliente1 = new Cliente("Juan", 120000);
console.log(`El cliente ${cliente1.nombre} tiene un saldo de: `, cliente1.getSaldo());
cliente1.aplicarDescuento(); 
console.log(`El cliente ${cliente1.nombre} tiene un saldo de: `, cliente1.getSaldo());

console.log("CLIENTE 2");
const cliente2 = new Cliente("Maria", 7000);
console.log(`El cliente ${cliente2.nombre} tiene un saldo de: `, cliente2.getSaldo());
cliente2.aplicarDescuento();
console.log(`El cliente ${cliente2.nombre} tiene un saldo de: `, cliente2.getSaldo());

console.log("CLIENTE 3");
const cliente3 = new Cliente("Pepe", 5000);
console.log(`El cliente ${cliente3.nombre} tiene un saldo de: `, cliente3.getSaldo());
cliente3.aplicarDescuento();
console.log(`El cliente ${cliente3.nombre} tiene un saldo de: `, cliente3.getSaldo());