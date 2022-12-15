import { createColoredPrefix, createColoredTag } from '@/colors'
import type { Color, LoggerOptions, WrapStyle } from '@/types'

export class Logger {
	private prefix: string
	private tags = [] as string[]
	private tagWrapStyle: WrapStyle
	private tagWrapColors: Color[]

	constructor(
		options: {
			prefix: string
		} & LoggerOptions
	) {
		this.prefix = createColoredPrefix(options.prefix, ...options.colors)
		this.tagWrapStyle = options.tagWrapStyle
		this.tagWrapColors = options.tagWrapColors
	}

	/**
	 Logs a message to the console
	 */
	log(...msg: unknown[]) {
		const pre = [this.prefix, ...this.tags].join('')
		console.log(pre, ...msg)
		return this
	}

	/**
	 Throws an error with a message
	 */
	error(...msg: unknown[]) {
		const pre = [this.prefix, ...this.tags].join('')
		throw new Error([pre, ...msg].join(' '))
	}
	/**
	 Adds a tag to the logger
	 */
	tag(tag: string, ...colors: Color[]) {
		const coloredTag = createColoredTag(tag, {
			colors: colors,
			tagWrapColors: this.tagWrapColors,
			tagWrapStyle: this.tagWrapStyle
		})
		this.tags.push(coloredTag)
		return this
	}

	/**
	 Removes the most recently added tag
	 */
	untag() {
		this.tags.pop()
		return this
	}
}
