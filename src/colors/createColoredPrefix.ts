import type { Color } from '@/types'
import { colorize } from '@/utils'

export function createColoredPrefix(prefix: string, ...colors: Color[]) {
	return colorize(prefix, ...colors)
}
