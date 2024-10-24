// // Acessar elemento com class (Seletor class)

const guestbyClass = document.getElementsByClassName("guest")
console.log(guestbyClass)

// // Exibir o primeiro elemento da lista.
console.log(guestbyClass.item(0))
console.log(guestbyClass[1])


// // Selecionar lista de elementos pela tag

const guestsbyTag = document.getElementsByTagName("li")
console.log(guestsbyTag)