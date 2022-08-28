import { flow } from "@core/flow"
import { loopCheck } from "./utils"
import type { State } from "@core/state"
import type { LoopMeta } from "./types"

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
