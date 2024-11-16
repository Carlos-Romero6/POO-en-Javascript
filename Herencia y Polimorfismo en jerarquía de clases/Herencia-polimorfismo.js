class Animal { // Se declara una superclase llamada Animal
    constructor(nombre) {
        this.nombre = nombre;
    }

    mover() {
        console.log(`${this.nombre} se está moviendo.`);
    }

    comer(alimento) {
        console.log(`${this.nombre} está comiendo ${alimento}.`)
    }
}

class Ave extends Animal { // Se declara una subclase Ave que hereda de animal
    mover() { // El método mover de la subclase remplaza al de la superclase para las instancias en esta clase
        console.log(`${this.nombre} está nadando.`);
    }
}

class Pez extends Animal { // Se declara otra subclace
    mover() {
        console.log(`${this.nombre} está volando.`);
    }
}

// Se declaran las instancias para las clases creadas
let perro = new Animal("Bolt");
let azulejo = new Ave("Mordecai");
let pezPayaso = new Pez("Nemo");

// Se llama a los metodos de las clases de las instancias creadas
perro.mover();
perro.comer("comida para perros");
azulejo.mover();
azulejo.comer("semillas");
pezPayaso.mover();
pezPayaso.comer("comida para peces");