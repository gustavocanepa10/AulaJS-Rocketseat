/* destructuring assignment (desestruturação) permite extrair dados
de arrays ou objetos em variaveis distintas. */

const data = ["Gustavo", "gustavociscotto@gmail.com"]

// Desestruturando de array



const [username, email] = data

console.log(username)
console.log(email)


const fruits = ["banana", "apple", "orange"]

// Desestruturando somente o primeiro.

const [Banana] = fruits

console.log(Banana)

// Ignorando o primeiro na desestruturação

const [_,apple] = fruits

console.log(apple)

// Ignorando o primeiro e o segundo na desestruturação.

const [, , orange] = fruits

console.log(orange)



