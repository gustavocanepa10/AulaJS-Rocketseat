// Criando propriedades dentro das classes



class Product {
    constructor(name) {
        this.name = name
    }
}

const product1 = new Product("Mouse")
console.log(product1.name)

const product2 = new Product("Teclado")
console.log(product2.name)