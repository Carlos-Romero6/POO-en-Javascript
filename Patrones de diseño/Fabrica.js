// Interfaz de Animal
class Animal {
    speak() {
        throw new Error("Este método debe ser implementado");
    }
}

// Clases concretas que implementan la interfaz Animal
class Perro extends Animal {
    speak() {
        return "¡Guau!";
    }
}

class Gato extends Animal {
    speak() {
        return "¡Miau!";
    }
}

class Vaca extends Animal {
    speak() {
        return "¡Muu!";
    }
}

// Fábrica de Animales
class AnimalFactory {
    static crearAnimal(tipo) {
        switch (tipo) {
            case 'perro':
                return new Perro();
            case 'gato':
                return new Gato();
            case 'vaca':
                return new Vaca();
            default:
                throw new Error("Tipo de animal no reconocido");
        }
    }
}

// Uso de la fábrica
const perro = AnimalFactory.crearAnimal('perro');
console.log(perro.speak()); // ¡Guau!

const gato = AnimalFactory.crearAnimal('gato');
console.log(gato.speak()); // ¡Miau!

const vaca = AnimalFactory.crearAnimal('vaca');
console.log(vaca.speak()); // ¡Muu!