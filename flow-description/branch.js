// branch
import flow from "./flow.js"
import condition from "./condition.js"

const branch = (state, meta) => {
    for (let i = 0; i < meta.branches.length; i++) {
        if (condition(state, meta.branches[i].condition)) {
            state = flow(state, meta.branches[i].flow)
            break
        }
    }
    return state
}

export default branch
