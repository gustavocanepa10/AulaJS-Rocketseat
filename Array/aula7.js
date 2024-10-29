// Tipos de elementos que funcionam dentro do  Array


let myArray = [
    "Um texto",
    10,
    true,
    function () {
        console.log("Função dentro do Array")

    },

    {
        name:"João Gustavo",
        email: "gustavociscotto@gmail.com"
    },





]

// Texto.
console.log(myArray[0])


// Número
console.log(myArray[1])

// booleano
console.log(myArray[2])

// função 
myArray[3] ()


// objeto
console.log(myArray[4].name)
console.log(myArray[4].email)