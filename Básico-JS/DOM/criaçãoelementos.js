const guests = document.querySelector("ul")


// Criação de elemento

const newGuest = document.createElement("li") // quero criar um elemento de (li) para o novo convidado

newGuest.classList.add("guest")

const guestName = document.createElement("span") // crio um elemento de span para o novo convidado

guestName.textContent = "Diego" // Aqui eu coloco o conteúdo da span que é o nome do guest

// nome da li com o append, depois vem o nome da span
newGuest.append(guestName) // Adiciona após o ultimo filho.
console.log(newGuest)

guests.append(newGuest)




const Newguest = document.createElement("li") // criei a li

Newguest.classList.add("guest") // adicionei a classe com o css referente



const NewName = document.createElement("span") // criei a span

NewName.textContent = "Canepa" // adicionei o conteudo

Newguest.append(NewName) // adicionei a span dentro da li

console.log(guests)

guests.append(Newguest) // adicionei a li dentro de ul










