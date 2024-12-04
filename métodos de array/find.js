/* método find() retorna o valor do PRIMEIRO elemento do array que satisfazer a condição.
Caso contrário, undefined é retornado*/

// find() retorna o conteúdo do indice, enquanto o findIndex() retorna o indice, ou melhor dizendo a posição.

const values = [5,12,8,130,44]

// Retorna o primeiro elemento que o valor é maior que 10
const found = values.find((value) => value > 10)

console.log(found)

// Exemplo com objetos.
const fruits = [
{name:"Apple", quantity: 23 },
{name:"Bananas", quantity: 25 },
{name:"Oranges", quantity: 52 },

]

const search = fruits.find((fruit) => fruit.name ==="Apple")

console.log(search)


const products = [
    {name: "Teclado", price: 350},
    {name: "Mouse", price: 200},
    {name: "Monitor", price: 950},


]

const searchedProducts = products.find((product) => product.name ==="Teclado")
console.log(searchedProducts)