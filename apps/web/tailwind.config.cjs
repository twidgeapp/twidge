const {
    gray,
    blue,
    red,
    green,
    grayDark,
    blueDark,
    redDark,
    greenDark,
    mintDark,
} = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{tsx,ts,jsx,js}"],
    theme: {
        extend: {
            colors: {
                ...gray,
                ...blue,
                ...red,
                ...green,
                dark: {
                    ...grayDark,
                    ...blueDark,
                    ...redDark,
                    ...greenDark,
                    ...mintDark,
                },
            },
        },
    },

    plugins: [],
};
