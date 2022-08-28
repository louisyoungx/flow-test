import { ConditionMeta } from "@core/condition"
import { FlowMeta } from "@core/flow"

export type BranchesType = {
  condition: ConditionMeta
  flow: FlowMeta
}

export type BranchMeta = {
  type: 'branch',
  branches: BranchesType[]
}
