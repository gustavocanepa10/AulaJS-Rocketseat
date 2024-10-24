/*

OPTIONAL CHAINING - encadeamento opcional
Se a propriedade ou função chamada é nullish
(null or undefined) , a expressão retorna undefined em vez de gerar um erro.



*/


const user = {
    id : 1,
    name : "Gustavo",
    /*
    adress: {
        street : "Rua Kardec de Souza",
        city : "Paracambi",
        geo : {
            latitude : 47.8080,
            longitude : 17.5674,
        },
    },
    message: function () {
        console.log(`Olá ${this.name}!`)
    }, */
}

// Exemplo de OPTIONAL CHAINING
console.log(user?.adress)
console.log(user?.adress?.street) // ? significa que eu não sei se essa propriedade vai existir

// OPTIONAL CHAINING EM MÉTODO
user.message?.()