class Pikachu {
    
    hablar(){
        return "Pikapika-chu..."
    }
}

class Piplup {

    hablar(){
        return "Piplup-pliplup..."
    }
}

pikachu = new Pikachu()
piplup = new Piplup()

console.log(pikachu.hablar()) //Llamada de un método con el mismo nombre de otro pero que al ejecutarse realizan funciones distintas.
console.log(piplup.hablar())

/*Output:
Pikapika-chu...
Piplup-pliplup...*/