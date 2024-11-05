/* FOR...IN executa iterações a partir de um objeto e percorre as propridades.
*/

// Iterações é as vezes que a repetição acontece.


let person = {
    name : "Gustavo",
    sirName : "Canepa",
    email : "gustavociscotto@gmail.com",

}




// Percorrendo as propriedades a partir de um objeto
// Property: variavel auxiliar.
for (let property in person) {

    
    

    // Exibe o nome da propriedade.
    console.log(property)

    
    // Exibe o conteúdo da propriedade.
    console.log(person[property])
    

    


}

let students = ["Gustavo", "Manuela", "Amanda"]


// A cada iteração do loop, a variavel index recebe o indice atual do array (0, 1 , 2 )
for (let index in students) {
    // console.log(index)

    // Aqui eu imprimo o valor do elemento localizado no indice atual.
    console.log(students[index])
    // O index é usado para acessar o valor de cada do array students, então students[index] 

}
