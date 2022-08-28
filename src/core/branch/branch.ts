import { BranchMeta } from "@core/branch"
import { condition } from "@core/condition"
import { flow } from "@core/flow"
import { State } from "@core/state"

export const branch = (state: State, meta: BranchMeta): State => {
    for (let i = 0; i < meta.branches.length; i++) {
        if (condition(state, meta.branches[i].condition)) {
            state = flow(state, meta.branches[i].flow)
            break
        }
    }
    return state
}
