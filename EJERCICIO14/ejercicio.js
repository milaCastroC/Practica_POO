// 14. Crear una clase Producto con un atributo privado precio y métodos públicos
// setPrecio() y getPrecio() para acceder y modificar el precio.

class Producto{
    #precio

    constructor(nombre, precio){
        this.nombre = nombre;
        this.#precio = precio;
    }

    getPrecio(){
        return this.#precio;
    }

    setPrecio(precio){
        if (precio >= 0) {
            this.#precio = precio;
        } else {
            console.error("El precio debe ser un número positivo.");
        } 
    }
}

const producto1 = new Producto("Camisa",100);
console.log(`Precio inicial: ${producto1.getPrecio()}`);

producto1.setPrecio(150);
console.log(`Nuevo precio: ${producto1.getPrecio()}`);
