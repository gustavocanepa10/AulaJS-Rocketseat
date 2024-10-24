// Eventos


// addEventListener serve para monitorar algum evento, no caso aqui o "load", quando acionado irá executar a função.
window.addEventListener("load",() =>{
    console.log("A página foi carregada!")
})


addEventListener("click", (event) => {
    event.preventDefault() // Impede o comportamento padrão da página, por exemplo se tiver uma tag <a>, impedira do link ser aberto.


    // Retorna todas as informações do evento.
    // console.log(event)



    // Retorna o elemento clicado.
    console.log(event.target)



    // Retorna o textContent do elemento clicado.
    console.log(event.target.textContent)



    



})


window.addEventListener("click", (event) => {
    console.log("Clicado")
    console.log(event.target)
    console.log(event.target.textContent)

})