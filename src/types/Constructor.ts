import type { UnknownArray } from '@cuppachino/type-space'
export type Constructor<T> = new (...args: UnknownArray) => T
