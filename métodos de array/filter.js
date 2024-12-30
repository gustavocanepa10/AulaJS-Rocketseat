/* Método filter() cria um novo array com todos os elementos 
que passaram na condição.*/

// const words = ["Javascript", "HTML", "CSS", "Web"]

// // Filtrando palavras que tem mais de 3 letras. 
// const result = words.filter((word) => word.length > 3 )
// console.log(result)

const fruits = ["Laranja", "Banana", "Maçã"]

const fruitsFirstFilter = fruits.filter((fruit) => fruit.length<7)
console.log(fruits)
console.log(fruitsFirstFilter)
    
/*

const persons = ["Maria", "João", "Mateus"]

const personsFilter = persons.filter((person) => person.length <= 5)
console.log(personsFilter)


// Exemplo do uso do filtro
const products = [
    
    {description: "Teclado", price: 150, promotion: true},
    {description: "Mouse", price: 70, promotion: false},
    {description: "Mouse", price: 800, promotion: true},

]

// Filtrando produtos que estão na promoção.
const promotion = products.filter((product) => product.promotion === true)
console.log(promotion)




// Filtrando frutas que tem o preço abaixo de 4.00
const resultado = fruits.filter((fruit) => fruit.price < 4.00)
console.log(resultado)


const foods = [
    {id: Math.random() , description: "Arroz", price: 7.00},
    {id: Math.random() , description: "Feijão", price: 10},
    {id: Math.random() , description: "Carne", price: 30.00}

]

const foodResult = foods.filter((food) => food.price < 11)
console.log(foodResult)
*/
