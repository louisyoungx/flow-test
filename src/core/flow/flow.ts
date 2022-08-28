import { branch } from '@core/branch'
import { StepType } from '@core/common'
import { formula } from '@core/formula'
import { State } from '@core/state'
import { FlowMeta } from './types'

const step = (state: State, meta: StepType): State => {
    switch (meta.type) {
        case 'formula':
            return formula(state, meta)
        case 'branch':
            return branch(state, meta)
        case 'flow':
            return flow(state, meta)
        default:
            return state
    }
}

export const flow = (state: State, meta: FlowMeta): State => {
    meta.steps.map((meta) => {
        state = step(state, meta)
    })
    return state
}
