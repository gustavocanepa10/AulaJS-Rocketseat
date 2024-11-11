const user = {
    name : "João",
    age : 21,
    email : "gustavo@email.com",

    message : function () {
        // console.log(`Olá ${user.name}`) // importante
        // console.log(`Sua idade é ${user.age} anos`)
        // console.log(`Seu email é ${user.email}`)
        console.log(`Olá ${this.name}`)
    },
}

user.message()


// Para usar o this, é importante usar a função tradicional como feito acima

