// formula
import { getVal, safeEval } from "./utils.js"

const formula = (state, meta) => {
    let expression = ''
    for (let i = 0; i < meta.expression.length; i++) {
        expression += getVal(state, meta.expression[i])
    }
    const result = safeEval(expression)
    state.set(meta.variable.value, result)
    return state
}

export default formula
