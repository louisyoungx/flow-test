import { BranchMeta } from "."
import { condition } from "../condition"
import { flow } from "../flow"
import { State } from "../state"

export const branch = (state: State, meta: BranchMeta): State => {
    for (let i = 0; i < meta.branches.length; i++) {
        if (condition(state, meta.branches[i].condition)) {
            state = flow(state, meta.branches[i].flow)
            break
        }
    }
    return state
}
