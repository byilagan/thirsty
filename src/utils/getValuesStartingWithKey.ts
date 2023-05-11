/**
 * Extracts all values from given object with a key that starts 
 * with given string.
 * 
 */
export const getValuesStartingWithKey = <T extends object>(startsWith: string, obj: T) => {
  const keys = Object.keys(obj).filter(k => k.includes(startsWith)) as Array<keyof T>;
  const values = keys.map(k => obj[k])
  return values;
}