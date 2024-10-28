
// // Completando uma string


// const creditCard = "1234567812344928"

// console.log(creditCard.length)

// // pega os 4 ultimos digitos
// const lastDigits = creditCard.slice(12,16)

// console.log(lastDigits)

// // preenche a string com caracteres extras até o fim do comprimento da própria
// const maskedNumber = lastDigits.padStart(creditCard.length, "X")

// console.log(maskedNumber)



// const telefoneNumber = "21986124136"

// const lastnumbers = telefoneNumber.slice(7,11)

// console.log(lastnumbers)


// const maskedNumbers = lastnumbers.padStart(telefoneNumber.length, "X")

// console.log(maskedNumbers)


// const telnumber = "21984153652"

// const lastnumber = telnumber.slice(7,11)

// console.log(lastnumber)

// const maskedNum = lastnumber.padStart(telnumber.length, "X")

// console.log(maskedNum)


// // padEnd preenche a string no final

// const number = "123"

// console.log(number.padEnd(10, "#"))


const creditNumber = "1234567812340114"

const ultimosNumber = creditNumber.slice(12,17)

console.log(ultimosNumber)


const numerosEscondidos = ultimosNumber.padStart(creditNumber.length,"X")

console.log(numerosEscondidos)