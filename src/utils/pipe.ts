/**
 * Type-safe pipe function that chains multiple functions together
 * @param value Initial value to pipe through the functions
 * @param fns Array of functions to pipe the value through
 * @returns The final value after passing through all functions
 */
export const pipe = <T>(value: T, ...fns: Array<(arg: T) => T>): T => {
  return fns.reduce((acc, fn) => fn(acc), value);
}; 