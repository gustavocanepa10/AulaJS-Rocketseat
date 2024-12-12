// Função que retorna uma Promise.

function asyncFunction () {
    return new Promise((resolve, reject) => {
        // Simula uma operação assincrona.

        setTimeout(() => {

        

        const isSuccess = true

        if(isSuccess) {
            resolve("Operação foi um sucesso!")
        
        } else {
            reject("Algo deu errado")
        }

    },3000) // Simula uma operação que leva 3 segundos.

    
})
    
}

// Visualizando que o retorno é uma promise

// console.log(asyncFunction())

console.log("EXECUTANDO FUNÇÃO ASSINCRONA...")

// usa o then quando for resolvida.
asyncFunction().then((response) => {
    console.log(response)


// usa o catch quando der errado.
}).catch((error) => {
    console.log(error)


// usa o finally quando for o fim da execução
}).finally(() => {
    console.log("FIM DA EXECUÇÃO")
})





