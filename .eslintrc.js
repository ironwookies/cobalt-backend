module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		'no-console': 'off',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
