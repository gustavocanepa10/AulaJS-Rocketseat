/* destructuring assignment (desestruturação) permite extrair dados
de arrays ou objetos em variaveis distintas. */

const product = {
  description : "teclado",
  price: 150
}


const {description,price} = product
// console.log("Descrição",description)
// console.log("Preço R$", price ,",00")

function newProduct ({price, description}) {
  console.log("Descrição:",description)
  console.log("Preço R$", price ,",00")
  
}

newProduct({
  description: "Mouse", 
  price: 70,
})


