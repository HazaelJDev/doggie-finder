/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					200: '#ffdbc9',
					500: '#974810',
				},
				secondary:{
					200: '#ffdad9',
					500: '#9c4146',
				},	
				tertiary:{
					200: '#e7deff',
					500: '#644bba',
				},	
			}
		},
	},
	plugins: [],
}
