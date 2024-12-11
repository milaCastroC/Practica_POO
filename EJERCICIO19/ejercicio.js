// 19. Crear una clase CuentaBancaria con un atributo privado saldo y un método
// privado actualizarSaldo(). Crear métodos públicos para depositar() y retirar()
// que usen actualizarSaldo().

class CuentaBancaria{
    #saldo

    constructor(titular, saldo){
        this.titular = titular;
        this.#saldo = saldo;
    }

    #actualizarSaldo(monto){
        this.#saldo += monto;
    }

    depositar(monto){
        if (monto > 0) {
            this.#actualizarSaldo(monto);
            console.log(`Depósito de $${monto} realizado. Saldo actual: $${this.#saldo}`);
        } else {
            console.error("El monto a depositar debe ser positivo.");
        }
    }

    retirar(monto){
        if (monto > 0 && monto < this.#saldo) {
            this.#actualizarSaldo(-monto);
            console.log(`Retiro de $${monto} realizado. Saldo actual: $${this.#saldo}`);
        } else if (monto > this.#saldo) {
            console.error("Saldo insuficiente para realizar el retiro.");
        } else {
            console.error("El monto a retirar debe ser positivo.");
        }
    }

    consultarSaldo() {
        console.log(`Saldo actual: $${this.#saldo}`);
    }
}

const cuenta1 = new CuentaBancaria("Camila", 1000);

cuenta1.consultarSaldo(); 
cuenta1.depositar(500);    
cuenta1.retirar(300);      
cuenta1.retirar(1500);     
cuenta1.consultarSaldo(); 