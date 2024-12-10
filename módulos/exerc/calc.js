export class Calc {
  name = "Gustavo"

  sum(a,b) {
    return a + b
  
  }

  multiply (a,b) {
    return a*b
  }

}

/* default export -  é a função padrão fornecida pelo módulo
na default não importa o nome que vai ser importado
export function sum(a,b) {
  return a + b

}

/* named export- cada método é importado pelo seu próprio nome
Na nomeada é essencial ter o nome*/




// export {sum, multiply}

