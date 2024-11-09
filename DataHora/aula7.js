// Usando o ToLocaleString()

let date = new Date("2025-08-11T14:30:00")
console.log(date.toLocaleString())


// Exibe a data e hora em styles diferentes
console.log(date.toLocaleString("pt-BR", {
  dateStyle:"short"


}))

console.log(date.toLocaleString("pt-BR", {
  dateStyle:"long"


}))


console.log(date.toLocaleString("en", {
  dateStyle:"medium"


}))


console.log(date.toLocaleString("pt-BR", {
  dateStyle:"full"


}))


console.log(date.toLocaleString("pt-BR",{
  day:"2-digit",
  month:"2-digit",
  hour:"2-digit",
  minute:"2-digit"
}

))


let amount = 12.5
console.log(amount.toLocaleString("pt-BR", {
  style:"currency",
  currency:"BRL"

}

))






let money = 500.00
console.log(money.toLocaleString("pt-BR",{
  style:"currency",
  currency:"BRL"

}))

console.log(money.toLocaleString("en-US",{
  style:"currency",
  currency:"USD"
  

}))

