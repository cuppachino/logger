import { colorNames, modifierNames } from 'chalk'
import type { Color } from '@/types'

export const colors = [...colorNames, ...modifierNames] as Color[]
