import { BranchMeta } from "@core/branch"
import { ConditionMeta } from "@core/condition"
import { FlowMeta } from "@core/flow"
import { FormulaMeta } from "@core/formula"
import { LoopMeta } from "@core/loop"
import { OperatorType } from "@core/operator"

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
