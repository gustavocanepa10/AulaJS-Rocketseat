// método map() chama a função callback recebida por parametro para cada elemento do array original, em ordem, e constroi um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.

const products = ["Teclado", "Mouse", "Monitor"]

// Percorrendo os itens do Array.
products.map((item) => {
  console.log(item)

})