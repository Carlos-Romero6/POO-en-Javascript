class Charmander {

    constructor(nombre,hp,ataq,def,def_esp,vel){
        this.nombre = nombre;
        this.hp = hp;
        this.ataq = ataq;
        this.def = def;
        this.def_esp = def_esp;
        this.vel = vel;
    }
    
    arañazo(){
        console.log(`¡${this.nombre}  ha usado arañazo!`)
    }
    gruñido(){
        console.log(`¡${this.nombre} ha usado gruñido!`)
    }
    ascuas(){
        console.log(`¡${this.nombre} ha usado ascuas!`)
    }
    pantallahumo(){
        console.log(`¡${this.nombre} ha usado pantallahumo!`)
    }
}

class Charizard extends Charmander{ //Clase hija
    constructor(nombre,hp,ataq,def,def_esp,vel,apodo){ //Establecer los atributos en el constructor y un atributo extra a los que está heredando.
        super(nombre,hp,ataq,def,def_esp,vel); //Llamada al superconstructor.
        this.apodo = apodo
        
    }
    terremoto(){
        console.log(`¡${this.nombre} ha usado terremoto!`)
    }
    vuelo(){
        console.log(`¡${this.nombre} ha usado vuelo!`)
    }    
    }


let charmander = new Charmander("Charmander",5,10,7,18,22)
let charizard = new Charizard("Charizard",40,120,35,60,100,"Dragoncito") //Otro objeto de la clase hija que hereda los mismos atributos de la clase padre y tiene uno más  extra.
charmander.arañazo()

console.log(charizard.nombre)