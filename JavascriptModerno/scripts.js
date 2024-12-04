// spread (espalhar) permite que um objeto iteravel, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.


const number = [1,2,3]
console.log(number)

// Spread
console.log(...number)

// Criando um objeto
const data = [
  {
    name: "João",
    email: "gustavo@gmail.com",
    avatar : "j.png"

  },
  {
    name: "Marcos",
    email: "marcos@gmail.com",
    avatar: "m.png"

  }
  
]

console.log(data)

// Utilizando o spread no array com objetos.
console.log(...data)