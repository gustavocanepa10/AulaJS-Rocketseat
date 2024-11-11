// Estrutura que representa elementos da vida real com propriedades e comportamentos.
// Usa-se muito a abstração.
// Pode ser abstração concreta ou não concreta.

/* exemplo de objeto

const user = {
name : "gustavo@email.com",


} */



/* OBJETO

-- Uma coleção de dados e/ou funcionalidades:
-  Podem ter propriedades e métodos:

*/
// Cria um objeto vazio.

// const obj = {}
// console.log(obj)
// console.log(typeof obj)


// Cria um objeto com propriedades e métodos.

const user = {
    email : "gustavo@email.com",
    age : 18,
    name : { // estrutura de objeto aninhado (dentro do outro)
      firstName : "Gustavo",
      surName : "Canepa",

    }, // estrutura de objeto aninhado
    address: {
        street : "Rua X",
        number : 35,
        city: "RJ",
        postal_code : 26600000 // usa o "snake case", com o underline (_)

    }, // método (função)
    message : () => {
        console.log("Oi Gustavo")
    
    
    },



}


// Acessando propriedades e métodos usando a notação de ponto (.)

console.log(user.age)
console.log(user.address)

// Acessando propriedades de objetos

console.log(user.name.firstName)
console.log(user.name.surName)


// Executando função ou método do objeto

user.message()


// Notação de colchetes

console.log(user["email"])
console.log(user["name"] ["firstName"])

user["message"] ()


const person = {
    name:"Gustavo",
    age:18,
    email:"gustavociscotto@gmail.com" 

    
}

console.log(person.name)
console.log(person.age)
console.log(person.email)



