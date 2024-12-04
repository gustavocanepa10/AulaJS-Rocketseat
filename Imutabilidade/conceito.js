/*
Uma vez algo imutável é criado você não pode modificar seus valores
ou propriedades. Em vez disso, você cria uma cópia 
modificada para manter o original inalterado.
*/

// Exemplo

const adress1 = {
    street: "Av. Brasil",
    number: 20,

}

/* Cria um novo objeto na mémoria (address2)
com as propriedades e valores do address1.*/
const address2 = {...adress1}
address2.street = "Linha Vermelha"
address2.number = 30

console.log(adress1)
console.log(address2)