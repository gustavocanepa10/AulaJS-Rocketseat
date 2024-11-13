// Sobrescrevendo métodos
/*
class Animal {
  constructor (name, age) {
    this.name = name
    this.age = age

  }

  makeNoise () {
    console.log("Som genérico")
  }
}

class Dog extends Animal {
  // Sobrescreve o método dentro da classe Dog
  makeNoise() {
    console.log("WOOF WOOF...")
  }

  run () {
    console.log("Andando")
  }



}

const dog = new Dog("Zorro", 3)
console.log(dog.name) 
console.log(dog.age)
dog.makeNoise()



class Cat extends Animal {
  // Sobrescreve o método dentro da classe Cat
  makeNoise() {
    console.log("MIAU...MIAU")
    
  }

  run () {
    console.log("Correndo")

  }



}

const cat = new Cat("Mel")
console.log(cat.name)
cat.makeNoise()
cat.run()
dog.run()*/



class Game {
  constructor(name, type) {
    this.name = name
    this.type = type

  }



  info() {
    console.log("JOGO")
  }

  run () {
    console.log("Inicializando")
  }


}

class Player extends Game {
  info() {
    console.log("PLAY")
  }

  run () {
    console.log("Rodando")
  }

}


class Item extends Game {
  info () {
    console.log("DIAMANTE ENCONTRADO")

  }

  update() {
    console.log("SUBIU PARA O PRÓXIMO NIVEL")
  }


}


const player = new Player()
player.info()
player.run()

const game = new Game()
game.info()
game.run()

const item = new Item()
item.info()
item.update()
