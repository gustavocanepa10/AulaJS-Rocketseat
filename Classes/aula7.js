// Sobrescrevendo métodos

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
dog.run()