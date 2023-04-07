type isNever<T> = [T] extends [never] ? true : false

/**
 * extends T['length'] если это бесконечный массв
 */
type IsTuple<T> = isNever<T> extends true ? false : T extends readonly any[] ? number extends T['length'] ? false : true : false
