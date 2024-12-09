const address1 = {
    street: "Av. Brasil",
    number: 20
}

// Isso não é uma cópia, mas sim uma referência.
// const address2 = address1


// console.log(address1)
// address2.number = 30

/* Aqui estamos criando um novo objeto utilizando as propriedades e 
valores de address1  (opção1) 
const address2 = {...address1}
address2.number = 30*/

const address2 = {...address1, number:30}
console.log(address1,address2)


const list1 = ["apple, banana"]

// Exemplo de referencia de Array.
// const list2 = list1

// list2.push("grape")

const list2 = [...list1, "lemon"]

list2.push("grape")

console.log(list1,list2)

/*
const product1 = {
    name: "teclado",
    price: 150,
}


const products2 = {...product1, name: "mouse"}
console.log(products2)*/