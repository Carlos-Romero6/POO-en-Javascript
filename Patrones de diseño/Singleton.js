class Aeropuerto {
    // Atributo estático para almacenar la instancia única
    static #instancia;

    // Atributo para almacenar los aviones
    aviones = [];

    // Constructor privado para evitar la creación de instancias externas
    constructor() {
        if (Aeropuerto.#instancia) {
            return Aeropuerto.#instancia;
        }
        Aeropuerto.#instancia = this;
    }

    // Método para registrar un avión
    registrarAvion(avion) {
        this.aviones.push(avion);
        console.log(`Avión ${avion} registrado en el aeropuerto.`);
    }

    // Método para mostrar todos los aviones registrados
    mostrarAviones() {
        console.log("Aviones registrados en el aeropuerto:");
        this.aviones.forEach(avion => {
            console.log(avion);
        });
    }
}

// Crear la única instancia del aeropuerto
const aeropuerto1 = new Aeropuerto();
aeropuerto1.registrarAvion("Boeing 747");
aeropuerto1.registrarAvion("Airbus A320");

// Mostrar aviones registrados
aeropuerto1.mostrarAviones();

// Intentar crear otra instancia del aeropuerto
const aeropuerto2 = new Aeropuerto();
aeropuerto2.registrarAvion("Cessna 172");

// Mostrar aviones registrados nuevamente
aeropuerto1.mostrarAviones();

// Verificar si ambas instancias son la misma
console.log(aeropuerto1 === aeropuerto2); // true