/* o strict mode: ativando esse modo, os erros que
eram silenciosos passa a gerar excessões no Javascript.*/

// Exemplo

"use strict";

function showMessage() {
  let personName = "Gustavo";

  console.log("olá", personName);
}

showMessage();

class Student {
  get point() {
    return 10;
  }
}

let student = new Student();

// student.point = 10

console.log(student.point);

// Tenta deletar uma propriedade que não posso deletar.
// delete window.document

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 3, 1));
