export const getVal = (state, node) => {
    switch (node.type) {
        case 'variable':
            const value = state.get(node.value)
            if((typeof state.get(node.value)) === 'string') {
                return `"${state.get(node.value)}"`
            } else {
                return value
            }
        case 'string':
            return `"${node.value}"`
        case 'number':
            return node.value
        case 'boolean':
            return node.value
        default:
            return node.value
    }
}

export const safeEval = (expression) => {
    try {
        return eval(expression)
    } catch (err) {
        console.error(expression)
        console.error(err)
        return null
    }
}