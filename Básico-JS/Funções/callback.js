/*/ Callback function: É uma função passada para outra função
 como um argumento.*/


 function execute (taskname, callback) {
    console.log("Executando a tarefa :", taskname) 
    callback()

}

function callback() {
    console.log("Callback executed")
}


// Passando para a função

execute("Download de jogo", callback)


// Criando a função no próprio parametro (função anonima)

// execute("Upload do arquivo", function(){
//     console.log("Função de callback como uma função anonima")
// })

// // Utilizando Arrow Function

// execute("Excluindo arquivo...", () => {
//     console.log("Utilizando Arrow Function")
// })