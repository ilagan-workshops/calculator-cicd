/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html', //
		'./src/**/*.{ts,tsx,js,jsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				lcd: ['VT323', 'monospace'],
			},
		},
	},
	plugins: [],
}
