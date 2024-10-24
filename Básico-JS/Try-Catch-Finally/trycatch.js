

/*try {
  // Tenta executar algo
  console.log(result)

} catch (error) {

  // Captura o erro para tratar.


  // console.log(error)
  console.log("Não foi possivel executar seu pedido")

} finally {
  console.log("Fim")

}*/

// Gerar excessões personalidadas 

let result = 0

try {
  if (result===0) {
    throw new Error ("O valor é igual a zero")
  }

} catch (error) {
  console.log(error)

}