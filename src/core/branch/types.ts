import type { ConditionMeta } from "@core/condition"
import type { FlowMeta } from "@core/flow"

export type BranchesType = {
  condition: ConditionMeta
  flow: FlowMeta
}

export type BranchMeta = {
  type: 'branch',
  branches: BranchesType[]
}
