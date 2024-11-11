// Função construtora : utiliza o operador "new" que é capaz de instanciar objetos


/*
function createProduct (name) {
    const product = {

    }

    product.name = name
    product.details = function () {
        console.log(`O nome do produto é ${this.name}`)
    }


    return product



}


const product1 = new createProduct("teclado")
console.log(product1.name)
product1.details()


const product2 = new createProduct("mouse")
console.log(product2.name)
product2.details()

//////////////////////////////////////////////////////////

//  Função construtora de object
function createobject (type,mark) { // passa o parametro name

    // Cria o objeto "object" vazio
    const object = {

    }
    
    // Define a propriedade name = name da função
    /* É como se fosse isso aqui :
    name : "computador"
    mark : "asus"
    


    
    object.type = type
    object.mark = mark

    
    object.exibeinfo = function () {
        console.log(`o tipo do objeto é ${this.type}`)
        console.log(`a marca do objeto é ${this.mark}`)
    }

    return object

}



// O new cria um novo objeto com a mesma estrutura definida na função construtora.

const object1 = new createobject("Computador","Asus")
console.log(object1.type)
console.log(object1.mark)
object1.exibeinfo()


const object2 = new createobject ("Notebook", "Apple")
console.log(object2.type)
console.log(object2.mark)
object2.exibeinfo()


*/


function createPC (type,price) {
    const pc = {

    }


   pc.type = type
   pc.price = price


   pc.exibeinfo = function () {
    console.log(`o tipo de pc é ${this.type}`)
    console.log(`o preço do pc é ${this.price}`)

   }

   return pc

}

const pc1 = new createPC("Desktop", 3000)

pc1.exibeinfo()


const pc2 = new createPC("Notebook", 4000)

pc2.exibeinfo()





// Exemplos de funções construtoras disponiveis no próprio javascript

// let myName = new String("Gustavo")
// console.log(myName)

// let price = "40,06".replace(".", "")
// console.log(price)


// let date = new Date("2024-1-1")
// console.log(date)


function createhouse (location, size) {

    const house = {

    }

    house.location = location
    house.size = size


    house.exibeinfos = function () {
        console.log(`A localização da casa é ${this.location} e o tamanho da casa é ${this.size}`)
    }


    return house


}


const house1 = new createhouse ("Paracambi", "Grande")

house1.exibeinfos()


function createStore  (name,local) {
    const store = {

    }

    store.name = name
    store.local = local


    store.exibeinfo = function () {
        console.log(`O nome da loja é ${this.name}`)
        console.log(`O local da loja é ${this.local}`)

    }

    return store

}


const store1 = new createStore("Mercado Livre", "RJ")
store1.exibeinfo()






