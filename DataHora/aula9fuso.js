// Intl é a API de Internacionalidade do ECMAScript.

// Obtém informações da localidade atual.
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)


// Exibe no formato de acordo com a localidade.
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))



const date = new Date()


// Obtém a diferença em horas do timezone.
console.log(date.getTimezoneOffset()/60)

// Obtém a diferença em minutos do timezone.
console.log(date.getTimezoneOffset())

