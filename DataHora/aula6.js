// Exibindo data e hora de acordo com a localidade

let date = new Date("2024-08-11T14:30:10")

// Exibe a data e hora no formato local.
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

// Exibe a data e hora no formato escolhido
console.log(date.toLocaleDateString("en")) // formato us
console.log(date.toLocaleTimeString("en"))


console.log(date.toLocaleString("en", {
  dateStyle:"short"
}

))