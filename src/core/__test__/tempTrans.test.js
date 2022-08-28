import State from '@core/flow-description/state.js'
import operator from '@core/flow-description/operator.js'
import flow from '@core/flow-description/flow.js'

const raw = () => {
    let temp = 37
    let tempType = 'c'
    if (tempType === 'f') {
        temp = (temp - 32) / 1.8
    }
    else if (tempType === 'c') {
        temp = 1.8 * temp + 32
    }
    return {temp, tempType}
}

const flowData = [
    {
        type: 'formula',
        variable: {
            type: 'variable',
            value: 'temp'
        },
        expression: [
            {
                type: 'number',
                value: '37'
            },
        ]
    },
    {
        type: 'formula',
        variable: {
            type: 'variable',
            value: 'tempType'
        },
        expression: [
            {
                type: 'string',
                value: 'c'
            },
        ]
    },
    {
        type: 'branch',
        branches: [
            {
                condition: {
                    type: 'condition',
                    left: {
                        type: 'variable',
                        value: 'tempType'
                    },
                    right: {
                        type: 'string',
                        value: 'f'
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
                            value: 'temp'
                        },
                        expression: [
                            {
                                type: 'operator',
                                value: '('
                            },
                            {
                                type: 'variable',
                                value: 'temp'
                            },
                            {
                                type: 'operator',
                                value: operator.subtraction
                            },
                            {
                                type: 'number',
                                value: '32'
                            },
                            {
                                type: 'operator',
                                value: ')'
                            },
                            {
                                type: 'operator',
                                value: operator.divison
                            },
                            {
                                type: 'number',
                                value: '1.8'
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
                        value: 'tempType'
                    },
                    right: {
                        type: 'string',
                        value: 'c'
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
                            value: 'temp'
                        },
                        expression: [
                            {
                                type: 'number',
                                value: '1.8'
                            },
                            {
                                type: 'operator',
                                value: operator.mutiplication
                            },
                            {
                                type: 'variable',
                                value: 'temp'
                            },
                            {
                                type: 'operator',
                                value: operator.addition
                            },
                            {
                                type: 'number',
                                value: '32'
                            },
                        ]
                    }
                ]
            },
        ]
    }
]

let state = new State()
state = flow(state, flowData)
console.assert(state.get('temp') === raw().temp, state.get('temp'), raw().temp)
