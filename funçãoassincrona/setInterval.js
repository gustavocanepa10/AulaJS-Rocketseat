/* setInterval() executa uma função após um intervalo de tempo
especificado */


let value = 10

// Aqui eu mandei o temporizador dentro de uma variavel para ser executado depois
const interval = setInterval(() => {
    console.log(value)

    value--

    if(value ===0) {
        console.log("FELIZ ANO NOVO!!!")
        clearInterval(interval)
    }

    
        
    
},1000)
