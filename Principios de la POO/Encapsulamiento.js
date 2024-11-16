class Animales {
    #tipo; //Declaración previa de un atributo privado
    constructor(tipo){
        this.#tipo = tipo //Establecer el valor del atributo privado
    }
    get_tipo(){
        return this.#tipo
    }
} 

mono = new Animales("araña")

//console.log(mono.#tipo) //Esta llamada del atributo privado dará error 

console.log(mono.get_tipo()) //No dará error ya que se le llama desde la instancia de la misma clase a través de un método.