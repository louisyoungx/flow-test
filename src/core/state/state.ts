export class State {
  private static _instance: State
  private _state: Map<string, string>

  constructor() {
      if (!State._instance) {
          this._state = new Map()
          State._instance = this
      }
      return State._instance
  }

  get(variable: string): string | undefined {
      if ( this._state.has(variable)) return this._state.get(variable)
      else {
          console.error(`Error: Unknown variable ${variable}`)
          return undefined
      }
  }

  set(variable: string, value: string): void {
      if (this._state.get(variable)) {
          // assignment
          // TODO do something
          this._state.set(variable, value)
      } else {
          // definition
          // TODO do something
          this._state.set(variable, value)
      }
  }
}
