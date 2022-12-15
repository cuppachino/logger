import { Logger } from '@/logger'
import type { LoggerOptions } from '@/types'

/**
 @example 
 const logger = createLogger('main')
 
 logger.tag('example', 'blue', 'bold', 'italic').log('hello world')
 logger.log('foo').untag().log('bar')
 */
export function createLogger(prefix: string, options?: Partial<LoggerOptions>) {
	return new Logger({
		prefix,
		colors: ['gray'],
		tagWrapColors: ['dim'],
		tagWrapStyle: 'square',
		...options
	})
}
