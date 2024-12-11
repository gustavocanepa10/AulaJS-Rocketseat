// Função que retorna uma Promise.

function asyncFunction () {
    return new Promise((resolve, reject) => {
        // Simula uma operação assincrona.

        setTimeout(() => {

        

        const isSucess = false

        if(isSucess) {
            resolve("Operação foi um sucesso")
        
        } else {
            reject("Algo deu errado")
        }

    },3000)

    })
    
}

// Visualizando que o retorno é uma promise

// console.log(asyncFunction())

// usa o then quando for resolvida.
asyncFunction().then((response)=> {
    console.log(response)


// usa o catch quando der errado.
}).catch((error) => {
    console.log(error)


// usa o finally quando for o fim da execução
}).finally(() => {
    console.log("FIM DA EXECUÇÃO")
})





