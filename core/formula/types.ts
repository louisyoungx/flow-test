import { NodeType, VariableNodeType } from "../common"

export type FormulaMeta = {
  type: 'formula',
  variable: VariableNodeType,
  expression: NodeType[],
}
