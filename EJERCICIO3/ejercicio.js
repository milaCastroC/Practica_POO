// 3. Crear una clase CuentaBancaria que tenga un saldo privado y métodos
// públicos para depositar y retirar dinero.

class CuentaBancaria{

    #saldo;

    constructor(saldo){
        this.#saldo = saldo;
    }

    depositar(cantidad){
        this.#saldo += cantidad;
        console.log("Deposito realizado con éxito");
    }

    retirar(cantidad){
        if(cantidad > this.#saldo){
            console.log("Saldo insuficiente para retirar: ", cantidad);
        }else{
            this.#saldo -= cantidad;
            console.log("Retiro realizado con éxito");
        }
        
    }

    getSaldo(){
        return this.#saldo;
    }

}

const cuenta1 = new CuentaBancaria(0);
cuenta1.retirar(10000);
cuenta1.depositar(15000);
console.log(`El saldo en su cuenta es de: `, cuenta1.getSaldo());
cuenta1.retirar(10000);
