// Se crean dos clases simples que pertenecerán a una clase más compleja

class Puerta {
    constructor(material) {
        this.material = material;
    }
}

class Ventana {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}

class Casa { // La clase Casa estará compuesta por atributos propios y objetos de otras clases más simples
    constructor(puerta, ventana, alto, ancho, profundo) {
        this.puerta = puerta;
        this.ventana = ventana;
        this.alto = alto;
        this.ancho = ancho;
        this.profundo = profundo;
    }

    obtenerCaracteristicas() { // En los métodos de la clase Casa se podrán utilizar los objetos que conformen a las instancias de esta clase
        console.log(`Casa: ${this.ancho}m x ${this.profundo}m; Altura: ${this.alto}m.`);
        console.log(`Puerta: ${this.puerta.material}; Ventana: ${this.ventana.ancho}m x ${this.ventana.alto}m.`)
    }
}

let miVentana = new Ventana(1, 2);
let miPuerta = new Puerta("Madera");
let miCasa = new Casa(miPuerta, miVentana, 3, 30, 60);
miCasa.obtenerCaracteristicas();