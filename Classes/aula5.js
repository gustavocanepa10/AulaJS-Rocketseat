// método estatico 
// Não precisa instaciar a classe, exemplo abaixo
// usando a palavra reservada "static"
// método construtor só quando a classe é instanciada

class User {
    static showMessage(message) {
        console.log(message)
    }

}

//const user = new User()
//user.showMessage()

User.showMessage("Essa é uma mensagem")


class Person {
    static info() {
        console.log("Essa é uma info")
    }
}

Person.info()