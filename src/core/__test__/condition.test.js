import State from '@core/flow-description/state.js'
import operator from '@core/flow-description/operator.js'
import condition from '@core/flow-description/condition.js'

let metaData, bool
let state = new State()
state.set('a', 3)

// if (a === 3) => true
metaData = {
    type: 'condition',
    left: {
        type: 'variable',
        value: 'a'
    },
    right: {
        type: 'number',
        value: '3'
    },
    operator: {
        type: 'operator',
        value: operator.equal
    }
}
bool = condition(state, metaData)
console.assert(bool === true, bool)

// if (a <= 3) => true
metaData = {
    type: 'condition',
    left: {
        type: 'variable',
        value: 'a'
    },
    right: {
        type: 'number',
        value: '3'
    },
    operator: {
        type: 'operator',
        value: operator.less_equal
    }
}
bool = condition(state, metaData)
console.assert(bool === true, bool)

// if (a > 4) => false
metaData = {
    type: 'condition',
    left: {
        type: 'variable',
        value: 'a'
    },
    right: {
        type: 'number',
        value: '3'
    },
    operator: {
        type: 'operator',
        value: operator.greater
    }
}

bool = condition(state, metaData)
console.assert(bool === false, state)
