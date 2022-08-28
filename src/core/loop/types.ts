import { ConditionMeta } from "@core/condition"
import { FlowMeta } from "@core/flow"

export type LoopMeta = {
  type: 'loop'
  repeatTimes: string
  stopCondition: ConditionMeta
  flow: FlowMeta
}