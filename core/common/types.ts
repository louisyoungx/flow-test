import { BranchMeta } from "../branch"
import { ConditionMeta } from "../condition"
import { FlowMeta } from "../flow"
import { FormulaMeta } from "../formula"
import { LoopMeta } from "../loop"
import { OperatorType } from "../operatior/types"

export type ConstantNodeType = {
  type: 'number' | 'string' | 'boolean' | 'array' | 'object' | 'function' | 'undefined' | 'null' | 'symbol' | 'bigint'
  value: string
}

export type VariableNodeType = {
  type: 'variable'
  value: string
}

export type OperatorNodeType = {
  type: 'operator'
  value: OperatorType
}

export type NodeType = ConstantNodeType | VariableNodeType | OperatorNodeType

export type StepType = FlowMeta | BranchMeta | ConditionMeta | FormulaMeta | LoopMeta
