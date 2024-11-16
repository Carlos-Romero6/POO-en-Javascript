class gato {
    constructor(){
        this.estado = "dormido"
}
    despertar(){
        this.estado = "despierto"
        console.log("¡El gato ha despertado!")
    }
    dormir(){
        this.estado = "dormido"
        console.log("El gato se ha dormido")
    }
    bostezar(){
        console.log("El gatito esta muy cansado, tanto que ha comenzado a bostezar")
        this.dormir()
    }
}

Garfield = new gato()

Garfield.despertar() 
Garfield.bostezar() //Es abtracción que al bostezar el gato también se vaya a dormir

/*Output: 

¡El gato ha despertado!
El gatito esta muy cansado, tanto que ha comenzado a bostezar
El gato se ha dormido*/