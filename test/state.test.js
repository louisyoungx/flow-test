import State from '../flow-description/state.js'

const state = new State()
state.set('a', 123)
console.assert(state.get('a') === 123, state)
