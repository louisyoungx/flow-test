import { getVal, safeEval } from '../common'
import { State } from '../state'
import { ConditionMeta } from './types'
import { checkIsBoolean } from './utils'

export const condition = (state: State, meta: ConditionMeta): boolean | unknown => {
    const leftVal: string = getVal(state, meta.left)
    const rightVal: string = getVal(state, meta.right)
    const operator: string = meta.operator.value
    const expression: string = leftVal + operator + rightVal
    const result: boolean | unknown = safeEval(expression)
    if (checkIsBoolean(result)) {
        return result
    }
}
