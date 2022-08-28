import type { ConditionMeta } from "@core/condition"
import type { FlowMeta } from "@core/flow"

export type LoopMeta = {
  type: 'loop'
  repeatTimes: string
  stopCondition: ConditionMeta
  flow: FlowMeta
}