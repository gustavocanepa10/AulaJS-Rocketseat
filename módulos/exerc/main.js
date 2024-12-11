import {Calc} from "./calc.js"

import { messageAlert } from "./alert.js"

import { Show } from "./classShow.js"

const calc = new Calc()
console.log("4+6 = " , calc.sum(4,6))

console.log("4*6 = " , calc.multiply(4,6))

console.log(calc.name)


const show = new Show()
console.log(show.message("Olá a todos"))






alert(messageAlert("Olá"))


 