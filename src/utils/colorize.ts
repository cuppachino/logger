import chalk from 'chalk'
import type { Color } from '@/types'

/**
 Applies a list of colors and modifiers to a string.
 */
export function colorize(text: string, ...colors: Color[]) {
	return colors.reduce((acc, color) => chalk[color](acc), text)
}
