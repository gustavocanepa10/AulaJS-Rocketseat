let date = new Date("2024-09-02T09:00:00")
console.log(date.getDate())

// Formatar para o dia sempre ter 2 digitos.
let year = (date.getDate().toString().padStart(2,"0"))
console.log(year)

// Formatar para o mês sempre ter 2 digitos.
let month = (date.getMonth().toString().padStart(2,"0"))
console.log(month)









let data = new Date("2024-08-02T14:30:00")
console.log(data.getDate())

console.log(date.getDate().toString().padStart(2,"0"))


let day = date.getDay()
let hours = date.getHours()
let minutes = date.getMinutes()

console.log(`Dia ${day.toString().padStart(2,"0")} às ${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}`)




