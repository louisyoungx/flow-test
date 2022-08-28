
import State from '@core/flow-description/state.js'
import operator from '@core/flow-description/operator.js'
import formula from '@core/flow-description/formula.js'

let metaData
let state = new State()

// a = 1 + 2
metaData = {
    type: 'formula',
    variable: {
        type: 'variable',
        value: 'a'
    },
    expression: [
        {
            type: 'number',
            value: '1'
        },
        {
            type: 'operator',
            value: operator.addition
        },
        {
            type: 'number',
            value: '2'
        },
    ]
}
state = formula(state, metaData)
console.assert(state.get('a') === 3, state)

// b = a - 1
metaData = {
    type: 'formula',
    variable: {
        type: 'variable',
        value: 'b'
    },
    expression: [
        {
            type: 'variable',
            value: 'a'
        },
        {
            type: 'operator',
            value: operator.subtraction
        },
        {
            type: 'number',
            value: '1'
        },
    ]
}
state = formula(state, metaData)
console.assert(state.get('b') === 2, state)

// a = a + 1
metaData = {
    type: 'formula',
    variable: {
        type: 'variable',
        value: 'a'
    },
    expression: [
        {
            type: 'variable',
            value: 'a'
        },
        {
            type: 'operator',
            value: operator.addition
        },
        {
            type: 'number',
            value: '1'
        },
    ]
}
state = formula(state, metaData)
console.assert(state.get('a') === 4, state)
