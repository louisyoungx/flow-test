import { ConditionMeta } from "../condition"
import { FlowMeta } from "../flow"

export type BranchsType = {
  condition: ConditionMeta
  flow: FlowMeta
}

export type BranchMeta = {
  type: 'branch',
  branches: BranchsType[]
}
