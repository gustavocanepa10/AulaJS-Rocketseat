/* o método some() se ao MENOS UM dos elementos no array
passa na condição e retorna um valor true ou false.
*/

// Exemplo de array de idades

const ages = [18,30,39,29]

const result = ages.some((age) => age < 18)
console.log(result)