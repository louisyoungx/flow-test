// loop
import flow from "./flow.js"
import condition from "./condition.js"
import { getVal, safeEval } from "./utils.js"

const loopCheck = (state, meta, counter) => {
    if (counter >= meta.repeatTimes) {
        return false
    }
    if (condition(state, meta.stopCondition)) {
        return false
    }
    return true
}

const loop = (state, meta) => {
    let counter = 0
    while(true) {
        if (loopCheck(state, meta, counter)) {
            state = flow(state, meta.flow)
            counter = counter + 1
        } else {
            break
        }
    }
    return state
}

export default loop
