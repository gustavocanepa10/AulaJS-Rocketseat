/* Deep freexe : imutabilidade profunda, congelar recursivamente
cada propriedade usando uma função recursiva*/

const book = {
    title: "Objetos imutaveis",
    category : "Javascript",
    author : {
        name: "Gustavo", 
        email: "gustavo@email.com"
    }
}


function deepFreeze(object) {
    // Pega e Obtém um array com todas as propriedades do objeto.
    const props = Reflect.ownKeys(object)
    console.log(props)
    
    
    // itera sobre todas as propriedades do objeto.
    for (const prop of props) {
        // Obtém o valor associdado à propriedade atual.
        const value = object[prop]
        console.log(value)
        
        /* Verifica se o valor é um objeto ou função para continuar aplicando
        o deep freeze em objetos aninhados.*/
        if ((value && typeof value === "object" ) 
            || typeof value === "function") {
            deepFreeze(value)
        
        }

        

    }

    // Retorna o objeto congelado.
    return Object.freeze(object)
        


}

// Chama a função para congelar o objeto com deep freeze (congelamento profundo)
deepFreeze(book)
console.log(book)

