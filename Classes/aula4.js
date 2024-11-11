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