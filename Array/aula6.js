
// Usando o indice no Array


let fruits = ['Apple','Watermelon','Strawberry','Grape']

// console.log(fruits)


// Encontra e retorna o indice do elemento
let position = fruits.indexOf("Strawberry")

// console.log(position)

let position2 = fruits.indexOf("Grape")
// Remove um item pela posição do indice (1 é o numero de itens para remover)
fruits.splice(position2,1)


let position3 = fruits.indexOf("Apple")

fruits.splice(position3,1)

console.log(fruits)


// fruits.splice(0,1)


// fruits.splice(position,1)
// console.log(fruits)