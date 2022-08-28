import State from '@core/flow-description/state.js'
import operator from '@core/flow-description/operator.js'
import flow from '@core/flow-description/flow.js'

let flowData
let state = new State()

// a = 0
// a = a + 1
// a = a + 1
flowData = [
    {
        type: 'formula',
        variable: {
            type: 'variable',
            value: 'a'
        },
        expression: [
            {
                type: 'number',
                value: '0'
            }
        ]
    },
    {
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
    },
    {
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
    },
]

state = flow(state, flowData)
console.assert(state.get('a') === 2, state)
