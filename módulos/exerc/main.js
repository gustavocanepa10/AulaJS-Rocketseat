import {Calc} from "./calc.js"
import * as show from  "./show.js"
import { messageAlert } from "./alert.js"

const calc = new Calc()

console.log("4+6 = " , calc.sum(4,6))

console.log("4*6 = " , calc.multiply(4,6))

console.log(calc.name)


console.log("Olá! a", show.message("Importação foi bemsucedida"))


alert(messageAlert("Olá"))


 