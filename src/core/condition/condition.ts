import { getVal, safeEval } from '@core/common'
import { checkIsBoolean } from './utils'
import type { State } from '@core/state'
import type { ConditionMeta } from './types'

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
