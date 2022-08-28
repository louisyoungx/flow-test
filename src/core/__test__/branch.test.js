import State from '@core/flow-description/state.js'
import operator from '@core/flow-description/operator.js'
import branch from '@core/flow-description/branch.js'

let metaData
let state = new State()
state.set('a', 101)

// if (a < 100) a = a + 1
// else if (a > 100) a = a - 1
// else a = 100
metaData = {
    type: 'branch',
    branches: [
        {
            condition: {
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
                    value: operator.less
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
        },
        {
            condition: {
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
                    value: operator.greater
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
                            value: operator.subtraction
                        },
                        {
                            type: 'number',
                            value: '1'
                        },
                    ]
                }
            ]
        },
        {
            condition: {
                type: 'condition',
                left: {
                    type: 'number',
                    value: '0'
                },
                right: {
                    type: 'number',
                    value: '0'
                },
                operator: {
                    type: 'operator',
                    value: operator.equal
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
                            type: 'number',
                            value: '0'
                        },
                    ]
                }
            ]
        },
    ]
}

state = branch(state, metaData)
console.assert(state.get('a') === 100, state)
