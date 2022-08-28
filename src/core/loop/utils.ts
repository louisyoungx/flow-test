import { condition } from "../condition"

export const loopCheck = (state, meta, counter) => {
  if (counter >= meta.repeatTimes) {
      return false
  }
  if (condition(state, meta.stopCondition)) {
      return false
  }
  return true
}
