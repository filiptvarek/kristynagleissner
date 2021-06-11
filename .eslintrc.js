module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
	},
	env: {
		'shared-node-browser': true,
		commonjs: true,
		es6: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
