class Animal {
    // Atributos públicos
    nombre;
    especie;
    // Atributo privado
    #edad;

    constructor(nombre, especie, edad) {
        this.nombre = nombre; // Atributo público
        this.especie = especie; // Atributo público
        this.#edad = edad; // Atributo privado
    }

    // Método público
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }

    // Método para comer
    comer () {
        console.log(`El ${this.especie} ${this.nombre} esta comiendo.`);
    }

    // Método privado para acceder a la edad
    #obtenerEdad() {
        return this.#edad;
    }

    // Método público para mostrar la edad
    mostrarEdad() {
        console.log(`La edad de ${this.nombre} es ${this.#obtenerEdad()} años.`);
    }
}

// Crear una instancia de la clase Animal
const loro = new Animal("Lorenzo", "loro", 5);

// Usar los métodos
loro.hacerSonido(); // Lorenzo hace un sonido.
loro.comer(); // El loro Lorenzo esta comiendo.
loro.mostrarEdad(); // La edad de Lorenzo es 5 años.