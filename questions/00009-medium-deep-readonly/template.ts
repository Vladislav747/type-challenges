type DeepReadonly<T> = { readonly [Key in keyof T]: T[Key] extends any[] | Record<string, unknown> ? DeepReadonly<T[Key]> : T[Key] }

