export const checkIsBoolean = (bool: unknown): boolean => {
  if (bool === true || bool === false) return true
  else return false
}
