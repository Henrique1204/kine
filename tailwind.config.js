/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			spacing: {
				162: '31rem',
				'negative-2': '-0.5rem',
				'negative-3': '-0.75rem',
			},
			boxShadow: {
				sm: '0 1px 8px rgb(0 0 0 / 0.05);',
			},
			colors: {
				'gray-50': 'rgba(0, 0, 0, 0.3)',
				'gray-400': '#848280',
				'gray-600': '#343434',
				'gray-700': '#1A1A1A',

				'orange-500': '#FFAA55',
				'orange-600': '#EE8822',
				'orange-700': '#DD6600',

				'white-100': '#FAFAFA',
				'white-200': '#F2F2F2',
			},
		},
	},
	plugins: [],
};
