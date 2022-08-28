import { NodeType, VariableNodeType } from "@core/common"

export type FormulaMeta = {
  type: 'formula',
  variable: VariableNodeType,
  expression: NodeType[],
}
