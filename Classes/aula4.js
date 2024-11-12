// Adicionando métodos nas classes

class User {
    constructor(name,email) {
        this.name = name
        this.email = email
    }


    // método aqui
    sendEmail() {
        console.log("E-mail enviado para", this.name, "para o endereço", this.email)
    }
}

// objeto
const user = new User("Gustavo", "gustavociscotto@gmail.com")
// função sendo usada aqui
user.sendEmail()

class Product {
    constructor (name, price) {
        this.name = name
        this.price = price

    }


    info() {
        console.log("O nome do produto é", this.name, "e o preço é", this.price)
    }
}

const product = new Product("mouse", "2000k")
product.info()