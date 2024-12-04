/* o método every() testa se todos os elementos do array passam na 
condição e retorna um valor Boolean*/


// Exemplo de array de idades.
const ages = [ 18 , 30, 39 , 29

]

// Verificando se todas as idades são maiores ou igual a 18.

const result = ages.every((age) => age >= 18 )

console.log(result)


const values = [1 , 3  , 5  ,7]

const valuesResult = values.every((value) => value > 4  )

console.log(valuesResult)