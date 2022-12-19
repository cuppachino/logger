import type { UnknownArray } from '@cuppachino/type-space'
import { createColoredPrefix, createColoredTag } from '@/colors'
import type { Color, Constructor, LoggerOptions, WrapStyle } from '@/types'

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
	 Returns the prefix and tags joined together.
	 */
	private getPrefix() {
		return [this.prefix, ...this.tags, ':'].join('')
	}

	/**
	 Logs a message to the console
	 */
	log(...msg: UnknownArray) {
		console.log(this.getPrefix(), ...msg)
		return this
	}

	/**
	 Throws an error with a message
	 */
	public error(Err?: Constructor<Error> | string, ...msg: UnknownArray): never {
		const prefix = this.getPrefix()

		/**
		 Err is undefined
		 */
		if (!Err) {
			throw new Error([prefix, ...msg].join(' '))
		}

		/**
		 Err is a constructor
		 */
		if (typeof Err !== 'string') {
			console.error(prefix, ...msg)
			throw new Err()
		}

		/**
		 Err is a string
		 */
		throw new Error([prefix, Err, ...msg].join(' '))
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
