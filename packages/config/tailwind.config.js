function alpha(variableName) {
    // some tailwind magic to allow us to specify opacity with CSS variables (eg: bg-app/80)
    // https://tailwindcss.com/docs/customizing-colors#using-css-variables
    return `hsla(var(${variableName}), <alpha-value>)`;
}

/** @type {import('tailwindcss').Config} */
const styles = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
        '../../packages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                app: {
                    background: alpha('--color-app-background'),
                    sidebar: {
                        background: alpha('--color-sidebar-background'),
                        border: alpha('--color-sidebar-border'),
                    },
                },
                modal: {
                    background: alpha('--color-modal-background'),
                },
                text: {
                    DEFAULT: alpha('--color-text'),
                    dark: alpha('--color-text-dark'),
                    light: alpha('--color-text-light'),
                },
                buttons: {
                    background: alpha('--color-button-background'),
                    hover: alpha('--color-button-background-hover'),
                    active: alpha('--color-button-active'),
                    disabled: alpha('--color-button-disabled'),
                    text: alpha('--color-button-text'),
                    textDisabled: alpha('--color-button-text-disabled'),
                },
            },
        },
    },
    plugins: [],
};

module.exports = styles;
