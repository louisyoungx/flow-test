import formula from './formula.js'
import branch from './branch.js'

const step = (state, meta) => {
    switch (meta.type) {
        case 'formula':
            return () => formula(state, meta)
        case 'branch':
            return () => branch(state, meta)
        case 'flow':
            return () => flow(state, meta)
        default:
            break
    }
}

const flow = (state, metas) => {
    metas.map((meta) => {
        state = step(state, meta)()
    })
    return state
}

export default flow
