/* método reduce é utilizado para reduzir um array a um unico valor.

Parametros:
-Array original (values)
-Acumulador (accumulator)
-valor da iteração (currentValue)
-valor inicial (0)
- Index (index da iteração atual - opcional)
*/

const values = [1,2,3,4,5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("ACUMULADOR",accumulator)
    console.log("VALOR DA ITERAÇÃO",currentValue)
    console.log("INDEX",index)


    console.log("SOMA", accumulator+ currentValue)
    console.log("###############")

    return accumulator + currentValue




},0)


console.log("RESULTADO", sum)