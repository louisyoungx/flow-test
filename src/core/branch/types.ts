import { ConditionMeta } from "../condition"
import { FlowMeta } from "../flow"

export type BranchesType = {
  condition: ConditionMeta
  flow: FlowMeta
}

export type BranchMeta = {
  type: 'branch',
  branches: BranchesType[]
}
