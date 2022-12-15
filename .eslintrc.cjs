/** @type { import("@types/eslint").Linter.BaseConfig } */
module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		/* 🛬 Imports */
		'plugin:import/errors',
		'plugin:import/warnings',
		/* 📚 JSdoc */
		'plugin:jsdoc/recommended',
		/* 🎨 Prettier - Needs to be last so it can override other configs */
		'plugin:prettier/recommended'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json', './tsconfig.eslint.json']
	},
	plugins: ['@typescript-eslint', 'import', 'jsdoc', 'prettier'],
	rules: {
		// * 👕 ESLint
		'@typescript-eslint/no-unused-vars': ['off'],
		'@typescript-eslint/no-empty-function': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		// * 🔗 Imports
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true
			}
		],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true
			}
		],
		// * 📚 JSdoc
		'jsdoc/require-asterisk-prefix': ['error', 'never'],
		'jsdoc/require-jsdoc': ['off'],
		'jsdoc/require-returns': ['off'],
		'jsdoc/require-param': ['off'],
		'jsdoc/require-param-type': ['off'],
		'jsdoc/require-param-description': ['off'],
		// * 🛬 Imports
		'@typescript-eslint/no-duplicate-imports': ['error'],
		'import/order': [
			'error',
			{
				'alphabetize': { order: 'asc', caseInsensitive: true },
				'groups': [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object'
				],
				'newlines-between': 'never',
				'pathGroups': [
					{
						pattern: 'react',
						group: 'builtin',
						position: 'before'
					}
				],
				'pathGroupsExcludedImportTypes': ['builtin']
			}
		]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
				paths: ['src']
			},
			alias: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
				map: [
					['^@$', './src/index.ts'],
					['@', './src']
				]
			}
		}
	}
}
