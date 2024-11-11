// Métodos para trabalhar com data e hora.

let date = new Date("2024-07-02T14:30:10")


// Dia da semana de 0 à 6 (domingo é 0)
console.log(date.getDay())

/* 0 - Domingo
   1 - Segunda
   2 - Terça
   3 - Quarta
   4 - Quinta
   5 - Sexta
   6 - Sábado
*/


// Dia do mês (0 à 30)
console.log(date.getDate())


// Mês (0 à 11)
console.log(date.getMonth() + 1) // + 1 por causa o mês começa no 0, no caso janeiro(0)


// Ano
console.log(date.getFullYear())

// Horas
console.log(date.getHours())


// Minutos
console.log(date.getMinutes())

// Segundos
console.log(date.getSeconds())

