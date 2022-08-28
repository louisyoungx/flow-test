import { getVal, safeEval } from "@core/common"
import { State } from "@core/state"
import { FormulaMeta } from "./types"

export const formula = (state: State, meta: FormulaMeta): State => {
    let expression = ''
    for (let i = 0; i < meta.expression.length; i++) {
        expression += getVal(state, meta.expression[i])
    }
    const result = safeEval(expression)
    state.set(meta.variable.value, result)
    return state
}
