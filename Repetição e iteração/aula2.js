// WHILE : EXECUTA ATÉ QUE A CONDIÇÃO SEJA VERDADEIRA.




/*let execute = true

while (execute) {

    let response = window.prompt("Deseja continuar :1(SIM) 2(NÃO)")
    
    

    if (response ==="2") {
        execute= false
    }

    
}*/



let execute = true


while (execute) {
    let age = window.prompt("Digite a sua idade")

    if (age<18) {
        alert("Você é menor de idade!")
    }

    else {
        alert("Você é maior de idade!")
        execute = false
    }

    
}




