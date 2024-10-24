/*
OPERADOR DE COALESCÊNCIA NULA (??)
Operador lógico que retorna o seu operando do lado direito 
quando o seu operador do lado esquerdo é null ou undefined. Caso contrário,
ele retorna o seu operando do lado esquerdo.*/

/*
 Se tiver algo dentro da variavel, imprima o que tem, se não tiver imprima
 o que foi definido o que ta do lado direito, que no caso é "conteúdo padrão"
 Funciona somente com "null" e "undefined"
*/


let content = null

console.log(content ?? "conteúdo padrão")


const user = {
    name : "Gustavo",
    avatar : undefined
}


// Se tem uma imagem definida, exiba ela, se não tiver, exiba a default.png
console.log(user.avatar ?? "default.png")


