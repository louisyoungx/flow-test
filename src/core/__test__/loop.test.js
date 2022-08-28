import State from '@core/flow-description/state.js'
import operator from '@core/flow-description/operator.js'
import loop from '@core/flow-description/loop.js'

let metaData
let state = new State()
state.set('a', 0)

// while(repeatTimes < 10 || a > 100) a = a + 1
metaData = {
    type: 'loop',
    repeatTimes: '1000',
    stopCondition: {
        type: 'condition',
        left: {
            type: 'variable',
            value: 'a'
        },
        right: {
            type: 'number',
            value: '100'
        },
        operator: {
            type: 'operator',
            value: operator.greater_equal
        }
    },
    flow: [
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
        }
    ]
}

state = loop(state, metaData)
console.assert(state.get('a') === 100, state)
