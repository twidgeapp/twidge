function alpha(variableName) {
	// some tailwind magic to allow us to specify opacity with CSS variables (eg: bg-app/80)
	// https://tailwindcss.com/docs/customizing-colors#using-css-variables
	return `hsla(var(${variableName}), <alpha-value>)`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
    theme: {
      extend: {
        colors: {
            bg: {
                DEFAULT: alpha("--color-bg"),
                accent: alpha("--color-bg-accent"),
            }
        }
      },
    },
    plugins: [],
}