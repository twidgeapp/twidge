const { blueDark, purpleDark } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				bg: "#00010A",
				blue: { ...blueDark },
				purple: { ...purpleDark },
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				mulish: ["Mulish", "sans-serif"],
			},
		},
	},
	plugins: [],
};
