// condition
import { getVal, safeEval } from "./utils.js"

const checkBoolean = (bool) => {
    if (bool === true || bool === false) return true
    else return false
}

const condition = (state, meta) => {
    const leftVal = getVal(state, meta.left)
    const rightVal = getVal(state, meta.right)
    const operator = meta.operator.value
    const expression = leftVal + operator + rightVal
    const result = safeEval(expression)
    if (checkBoolean(result)) {
        return result
    }
}

export default condition
