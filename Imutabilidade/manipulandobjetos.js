const book = {
    title: "Objetos imutaveis",
    category : "Javascript",
    author : {
        name: "Gustavo", 
        email: "gustavo@email.com"
    }
}


const updatedBook = {
    ...book,
    title: "Criando um front-end",
    category: "HTML",
    type: "Programming"
}

console.log(book)
console.log(updatedBook)


const product = {
    type: "Hardware",
    category: "PC"
}


const product2 = {
    ...product,
    type: "Hardware",
    category: "Notebook",
    price: 2000
}

// Original intacto.
console.log(product)

// Modificado
console.log(product2)


/* Utilizando operador de desestruturação
(rest operator) para remover propriedades.*/

const {price, ...product2WithoutPrice} = product2
console.log(product2WithoutPrice)