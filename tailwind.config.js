/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layout/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				outerbg: '#e2f2f6',
				text: '#191c2c',
			},
		},
	},
	plugins: [],
};
