// API padrão do Javascript
// Utilizamos para fazer requisições
fetch("Endereço da API que quero consumir")

// Exemplo de requisição
const response = fetch("http://localhost:3333/products")
console.log(response)
// Irá voltar uma Promise

/* Podemos utilizar response.json() que irá converter a resposta no formato
json e devolver o conteúdo da API. */
fetch("http://localhost:3333/products").then((response) => response.json()). 
then((data) => console.log(data))

// Utilizando async/await

async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)

}

// Chamando a função
fetchProducts()


// Fetch com Post
// Cadastrando um novo Produto
const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const form = document.querySelector("form")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    // Cadastro novo Produto
    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            // Tipo de padrão
            "Content-Type": "aplication/json"
        },    
        // Passando pra texto primeiro
        body : JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            productPrice: productPrice.value
        })

    })
    


})




