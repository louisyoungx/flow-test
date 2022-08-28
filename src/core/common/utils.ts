import { State } from "../state"
import { NodeType } from "./types"

export const getVal = (state: State, node: NodeType): string => {
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

export const safeEval = (expression: string): unknown => {
  try {
      return eval(expression)
  } catch (err) {
      console.error(expression)
      console.error(err)
      return null
  }
}