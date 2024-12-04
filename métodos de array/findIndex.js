/* o método findIndex() retorna o indice no array do primeiro elemento 
satisfazer a condição, caso contrario, retorna -1, indicando que 
nenhum elememento passou no teste.*/


const values = [4,6,8,12]
// Obtendo o primeiro indice do elemento que o valor é maior 4
console.log(values.findIndex((value) => value > 4 ))




const products = ["teclado", "mouse", "monitor"]

// Obtendo o primeiro indice do elemento que o número de letras é maior que 6
console.log(products.findIndex((product) => product.length > 6 ))


const index = values.findIndex((value) => value > 4)
console.log(index)
console.log(values[index])

// Exemplo de quando não encontra.
console.log(values.findIndex((value) => value > 12))


const foods = ["arroz", "feijão", "carne"]

console.log(foods)

const result = foods.findIndex((food) => food.length > 6)
console.log(result)







