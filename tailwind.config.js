const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				serif: ['PlayfairDisplay', ...defaultTheme.fontFamily.serif],
				sans: ['Dosis', ...defaultTheme.fontFamily.sans],
				handwritten: ['DancingScript', ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				'300': '300px',
				'200': '200px',
			},
			backgroundPosition: {
			   'left-10': 'center left -10rem',
			  },
			colors: {
				'tangerine': {
					DEFAULT: '#FF9A66',
					'50': '#FFF5F0',
					'100': '#FFEBE0',
					'200': '#FFD7C2',
					'300': '#FFC2A3',
					'400': '#FFAE85',
					'500': '#FF9A66',
					'600': '#FF8647',
					'700': '#FF7229',
					'800': '#FF5D0A',
					'900': '#EB5000'
				  },
			  },
			backgroundImage: theme => ({
			'header-pattern': "url('/images/header_pattern.png')",
			'menu-pattern': "url('/images/menu.png')",
			})

		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
