// Herança e cadeia de protótipos

/* Quando um objeto é criado ele possui automaticamente uma propriedade
que referencia outro objeto e esse objeto é chamado e Prototype

O objeto prototype herda propriedades e métodos do seu prototipo ascendente.
Essas propriedades não pertencem ao objeto em sim, mas sim ao prototype do objeto:
*/

// Criando um objeto prototype

const adress = {
    city: "Rio de Janeiro",
    country : "Brasil",

}


console.log(adress)


const userName = "Gustavo Canepa"
console.log(userName.__proto__)






