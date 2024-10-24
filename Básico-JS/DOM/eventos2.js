// Eventos em um elemento especifico

const ul = document.querySelector("ul")

ul.addEventListener("scroll", () => {
   
   


    if( ul.scrollTop > 223) {
        // console.log("FiM DA LISTA")


        ul.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
   
})


const button = document.querySelector("button")

button.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("CLICOU!")
})