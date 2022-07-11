class State {
    constructor() {
        if (!State.instance) {
            this.state = new Map()
            State.instance = this
        }
        return State.instance
    }

    get(variable) {
        if ( this.state.has(variable)) return this.state.get(variable)
        else {
            console.error(`Error: Unknown variable ${variable}`)
            return undefined
        }
    }

    set(variable, value) {
        if (this.state.get(variable)) {
            // assignment
            // TODO do something
            this.state.set(variable, value)
        } else {
            // definetion
            // TODO do something
            this.state.set(variable, value)
        }
    }
}

export default State
