/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {
			fontFamily: {
				manrope: "'Manrope', sans-serif"
			},
			colors: {
				'fa-6886C5': '#6886C5',
				'fa-FFE0AC': ' #FFE0AC',
				'fa-FFCC76': '#FFCC76',
				'fa-051942': '#051942',
				'fa-E6EEFF': '#E6EEFF',
				'fa-FFDDE2': '#FFDDE2',
				'fa-FFEAC7': '#FFEAC7'
			}
		}
	},
	plugins: []
};
