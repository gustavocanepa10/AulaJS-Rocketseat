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

const product3 = new Product("Fone")
console.log(product3.name)

class PC {
    constructor(specs) {
        this.specs = specs

    }

    
}

const pc1 = new PC("i9, 2080, 16gb ram")
console.log(pc1.specs)
