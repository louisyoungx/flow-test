import { ConstantNodeType, OperatorNodeType, VariableNodeType } from '@core/common/types'

export type ConditionMeta = {
  type: 'condition'
  left: ConstantNodeType | VariableNodeType
  right: ConstantNodeType | VariableNodeType
  operator: OperatorNodeType
}
