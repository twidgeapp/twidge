function alpha(variableName) {
	return `hsla(var(${variableName}), <alpha-value>)`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{jsx,tsx,js,ts}",
		"../../packages/**/*.{js,ts,jsx,tsx,html}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				mulish: ["Mulish", "sans-serif"],
			},
			colors: {
				black: alpha("--color-black"),
				white: alpha("--color-white"),
				blue: {
					DEFAULT: alpha("--color-blue"),
					light: alpha("--color-blue-light"),
					dark: alpha("--color-blue-dark"),
				},
				text: {
					DEFAULT: alpha("--color-text"),
					dark: alpha("--color-text-dark"),
					light: alpha("--color-text-light"),
				},
				app: {
					bg: alpha("--color-app-bg"),
					overlay: alpha("--color-app-overlay"),
					modal: alpha("--color-app-modal"),
					dark: alpha("--color-app-bg-dark"),
				},
				sidebar: {
					DEFAULT: alpha("--color-sidebar-bg"),
					hover: alpha("--color-sidebar-hover-state"),
				},
			},
		},
	},
	plugins: [],
};
