import type { Color } from '@/types'
import { colorize } from '@/utils/colorize'

const createWrapFunction = <A extends string, B extends string>(
	first: A,
	last: B
) => {
	return (str: string, ...wrapColors: Color[]) => {
		const left = colorize(first, ...wrapColors)
		const right = colorize(last, ...wrapColors)
		return `${left}${str}${right}`
	}
}

export const wrapString = {
	angled: createWrapFunction('<', '>'),
	square: createWrapFunction('[', ']'),
	curly: createWrapFunction('{', '}'),
	parens: createWrapFunction('(', ')')
}
