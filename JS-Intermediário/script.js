



const telefoneNumber = "21984321800"

const lastnumbers = telefoneNumber.slice(7,11)


const maskedNumbers = lastnumbers.padStart(telefoneNumber.length, "X")

console.log(maskedNumbers)







