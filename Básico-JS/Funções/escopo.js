// Escopo da função


function showMessage (message) {
  console.log(message)
  endLine()


  function endLine() {
    console.log("--------------")
  }
}


showMessage("Olá")
showMessage("Tudo bem?")

// Não existe dentro nesse oscopo
endLine()