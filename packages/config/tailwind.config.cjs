const {
    gray,
    blue,
    red,
    green,
    grayDark,
    tomatoDark,
    redDark,
    crimsonDark,
    pinkDark,
    plumDark,
    violetDark,
    blueDark,
    skyDark,
    cyanDark,
    yellowDark,
    orangeDark,
    mintDark,
    greenDark,
} = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../../apps/web/src/**/*.{tsx,ts,jsx,js}",
        "../../packages/**/*.{tsx,ts,jsx,js}",

        "./apps/web/src/**/*.{tsx,ts,jsx,js}",
        "./packages/**/*.{tsx,ts,jsx,js}",
        "./packages/**/*.stories.{tsx,ts,jsx,js}",
    ],
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
                    ...pinkDark,
                    ...crimsonDark,
                    ...plumDark,
                    ...violetDark,
                    ...skyDark,
                    ...cyanDark,
                    ...yellowDark,
                    ...orangeDark,
                    ...greenDark,
                    ...mintDark,
                    ...tomatoDark,
                },
            },
            spacing: {
                "some key": {
                    1.5: "1.5px", // not sure about the correct value
                },
            },
        },
    },

    plugins: [],
};
