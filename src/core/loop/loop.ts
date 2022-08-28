import { flow } from "@core/flow"
import { State } from "@core/state"
import { LoopMeta } from "./types"
import { loopCheck } from "./utils"

export const loop = (state: State, meta: LoopMeta): State => {
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
