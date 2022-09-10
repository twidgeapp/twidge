const {
    gray,
    blue,
    red,
    green,
    purple,
    grayDark,
    blueDark,
    redDark,
    greenDark,
    purpleDark,
} = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                ...gray,
                ...blue,
                ...purple,
                ...red,
                ...green,
                dark: {
                    ...grayDark,
                    ...blueDark,
                    ...redDark,
                    ...greenDark,
                    ...purpleDark,
                },
            },
        },
    },

    plugins: [],
};
