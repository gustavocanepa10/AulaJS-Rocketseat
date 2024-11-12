// Herança em classes

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
  // Não tem nada aqui



}

const dog = new Dog("Zorro", 3)
console.log(dog.name)
dog.makeNoise()



class Cat extends Animal {
  // Não tem nada aqui



}

const cat = new Cat("Mel")
console.log(cat.name)
cat.makeNoise()