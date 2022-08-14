import { ConditionMeta } from "../condition"
import { FlowMeta } from "../flow"

export type LoopMeta = {
  type: 'loop'
  repeatTimes: string
  stopCondition: ConditionMeta
  flow: FlowMeta
}