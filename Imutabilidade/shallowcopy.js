// Shallow Copy (cópia superficial): não pega os itens aninhados.


const htmlCourse = {
    course: "HTML",
    students: [{name: "Gustavo", email: "gustavo@email.com"}],

}

/* Cópia rasa
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",

}*/

// Vai modificar o htmlCourse também porque students é uma referencia e não uma cópia.
// jsCourse.students.push({name: "João", email: "joao@email.com"})

/* Deep Copy(cópia profunda)

Copia todo o objeto, incluindo propriedades aninhadas, 
criando novas instâncias para cada nível de profundidade.
No exemplo, o array students é copiado explicitamente com ...[...htmlCourse.students],
garantindo que as modificações no array da cópia não afetem o array do original.*/


const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students:[...htmlCourse.students, {name: "Maria", email: "maria@email.com"}],
    
}

jsCourse.students.push({name: "João", email: "joão@email.com"})
console.log(htmlCourse, jsCourse)






        
    
