// método estatico 
// Não precisa instaciar a classe, exemplo abaixo
// usando a palavra reservada "static"
// método construtor só quando a classe é instanciada

class User {
    static showMessage() {
        console.log("Essa é uma mensagem")
    }

}

//const user = new User()
//user.showMessage()

User.showMessage()