/* Método map() chama a função callback recebida por parametro
para cada elemento do Array original, em ordem, e constroi um novo array
com base nos retornos de cada chamada. E no final, devolve o novo Array.
*/

/* Muito utilizado quando precisa percorrer um Array,
Manipular o Array e retornar um novo Array*/





const products = ["teclado", "mouse", "monitor"]

// // Percorrendo os itens do Array
const formatted = products.map((product) => {
    return product.toUpperCase()
})

console.log(formatted)



// })
/*

// Sintaxe reduzida.
// products.map((product) => console.log(product))


const fruits = ["laranja", "maça", "banana"]

fruits.map((fruit) => {
    
    // console.log(fruit)
})

const formatada = fruits.map((fruit) => {

    // return fruit.toUpperCase()

    return {
        id: Math.random(),
        description : fruit,
        price: 1.99,
    }




})

console.log(formatada)


// Utilizando o novo objeto retornado.
const formatted = products.map((product) => {
    // Retorna o array novo formatado
    // return product.toUpperCase()

    return {
        id: Math.random(),
        description: product,
        
    }

})

console.log(formatted)


const datas = ["primeiro", "segundo", "terceiro"]

datas.map((data) => {
    console.log(data)
})


const formatData = datas.map((data) => {
    // return data.toUpperCase()

    return {
        description: data,
        id: Math.random(),
    }
})

console.log(formatData)


const foods = ["arroz", "feijao", "carne"]

foods.map((food) => {
    console.log(food)

})

const formatFood = foods.map((food) => {
    // return food.toUpperCase()

    return {
        description: food,
        id: Math.random(),
    }
})

console.log(formatFood)



const produtos = ["teclado", "mouse", "computador"]

const produtosforma = produtos.map((produto) => {
    
    return {
        description: produto,
        id: Math.random()
    }
})


console.log(produtosforma)


*/












