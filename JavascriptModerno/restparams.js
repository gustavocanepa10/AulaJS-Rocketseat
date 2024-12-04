// Rest params (...) permite que represente um número indefinido de argumentos como um array.
//  Mais comum ser "args"
function values(...rest) {
  // Mostra a quantidade de parametros.
  console.log(rest.length);

  // Exibe o array
  console.log(rest);

  // Exibe o conteúdo dentro do array
  console.log(...rest);
}

values(1, 2, 4, 5, 8);
