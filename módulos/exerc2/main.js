import {calc} from "./calc.js"

import {message} from "./message.js"


function principal() {
    calc()
    const result = calc(5,5)
    message(`o resultado é ${result}`)
    

}

principal()

