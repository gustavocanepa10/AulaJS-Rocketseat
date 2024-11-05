// Break encerra a execução da repetição ou switch para seguir a instrução seguinte.
/*
let option = 4

switch (option) {
    case 1:
        console.log("Cadastrar")
        break

    case 2:
        console.log("Atualizar")
        break


    case 3:
        console.log("Remover")
        break

    default:
        console.log("Opção inválida")

        break
}*/


// Utilizando o break para finalizar a repetição.
/*
O primeiro console.log(i) imprime o valor 5.
Em seguida, a condição if (i === 5) é atendida, o que aciona o break e interrompe o loop.
Isso impede que o segundo console.log(i) seja executado para i = 5, mas o valor 5 já foi impresso pelo primeiro console.log(i).*/

for (let i = 0; i<10 ; i++) {
    console.log(i)

    if (i === 5) {
        break

        
    }


    

}


// Nesse segundo o valor 5 nunca é impresso porque ele é utilizado o break antes do console.log(i)
for (let i = 0; i<10 ; i++) {
    

    if (i === 5) {
        break

        
    }

    console.log(i)


    

}



