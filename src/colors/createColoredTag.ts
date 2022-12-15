import type { Color, LoggerOptions, WrapStyle } from '@/types'
import { colorize, wrapString } from '@/utils'

export function createColoredTag(
	tag: string,
	{
		colors = ['dim'],
		tagWrapColors = ['dim'],
		tagWrapStyle = 'square'
	}: Partial<LoggerOptions>
) {
	const coloredTag = colorize(tag, ...colors)
	return wrapString[tagWrapStyle](coloredTag, ...tagWrapColors)
}
