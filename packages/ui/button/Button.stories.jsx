import PropTypes from "prop-types";
import { Button } from "./index";

export default {
    title: "UI/Button",
    component: Button,
    argTypes: {
        buttonSize: {
            control: "select",
            options: ["small", "medium", "large", "extra-large", "2x-large"],
        },
        children: PropTypes.string,
        color: {
            control: "select",
            options: [
                "tomato",
                "red",
                "crimson",
                "pink",
                "plum",
                "purple",
                "violet",
                "blue",
                "sky",
                "cyan",
                "yellow",
                "orange",
            ],
        },
        fontWeight: {
            control: "select",
            options: [
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
            ],
        },
        font: {
            control: "select",
            options: [
                "xs",
                "sm",
                "base",
                "lg",
                "xl",
                "2xl",
                "3xl",
                "4xl",
                "5xl",
                "6xl",
                "7xl",
                "8xl",
                "9x",
            ],
        },
    },
};

export const Btn = Button.bind({});

Btn.args = {
    children: "Button",
    buttonSize: "small",
    color: "pink",
    fontWeight: "normal",
    font: "base",
};
