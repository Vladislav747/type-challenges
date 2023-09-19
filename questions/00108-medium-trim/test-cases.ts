import type { Equal, Expect } from '@type-challenges/utils'

/**
 * Chars what need to be remove
 */
type Chars = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${Chars}${infer SS}` ? Trim<SS> : S extends `${infer SS}${Chars}` ? Trim<SS> : S

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]
