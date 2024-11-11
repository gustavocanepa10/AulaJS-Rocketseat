// CLASSES

/*
São uma forma de criar objetos e definir seu comportamento por
meio de construtores e metódos.

Ela tem construtores e métodos
Ela é basicamente um modelo pra criar objetos.
Métodos são funções associadas a objetos e descrevem o comportamento 
desses objetos.
*/

// Exemplo

class Animal {
    constructor(name) {
        this.name = name

    }

    makeSound() {
        console.log("Some generic sound");
    }

}


/* HERANÇA

Uma classe pode herdar propriedades e métodos de outra classe, permitindo
a reutlização de código.*/


class dog extends Animal {
    makeSound() {
        console.log("WOOF! WOOF");
    }

    fetch() {
        console.log("Fetching the ball")
    }
}



