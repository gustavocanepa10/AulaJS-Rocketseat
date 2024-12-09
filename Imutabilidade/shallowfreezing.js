const book = {
    title: "Objetos Imutáveis",
    category: "Javascript",
    author: {
        name: "Gustavo",
        email: "gustavo@email.com",
    },
}


// O javascript em si não impoe restrições à modificação dos objetos.
// book.category = "HTML"


// Congela o objeto e impede a modificação.
Object.freeze(book)
book.category = "CSS" //NÃO MODIFICA.


// Object.freeze não impede modificações profundas em objetos aninhados (shallow freezing).
book.author.name = "João"


console.log(book)