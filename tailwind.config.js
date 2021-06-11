const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				serif: ['CMU', ...defaultTheme.fontFamily.serif],
				sans: ['Oswald', ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				'300': '300px',
				'200': '200px',
			},
			colors: {
				'mineshaft': {
					DEFAULT: '#333333',
					'50': '#D4D4D4',
					'100': '#C2C2C2',
					'200': '#9E9E9E',
					'300': '#7A7A7A',
					'400': '#575757',
					'500': '#333333',
					'600': '#262626',
					'700': '#1A1A1A',
					'800': '#0D0D0D',
					'900': '#000000'
				  },
				'copper': {
					DEFAULT: '#AC7A31',
					'50': '#EDDABF',
					'100': '#E8D0AD',
					'200': '#DDBB89',
					'300': '#D3A766',
					'400': '#C99242',
					'500': '#AC7A31',
					'600': '#906629',
					'700': '#745321',
					'800': '#593F19',
					'900': '#3D2B11'
				  },
			  },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
