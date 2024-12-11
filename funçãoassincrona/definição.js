/* Função assincrona é aquela que não vai devolver o retorno 
no exato momento que eu chamo ela, só depois de processada.

Quando é chamada, ela retorna uma Promise

Quando a função retorna um valor, a Promise será resolvida com o valor
retornado.

Quando a função assincrona lança uma exceção ou algum valor,
a Promise será rejeitada com o valor lançado 

Pode conter uma expressão Await, que pausa a execução da função
e espera pela resolução da Promise passada, e depois retoma a execução
da função e retorna o valor devolvido.*/