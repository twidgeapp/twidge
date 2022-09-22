export type buttonColors =
    | "tomato"
    | "red"
    | "crimson"
    | "pink"
    | "plum"
    | "gray"
    | "purple"
    | "violet"
    | "blue"
    | "sky"
    | "cyan"
    | "yellow"
    | "orange";

const addColours = (btnColor: buttonColors) => {
    return `bg-dark-${btnColor}4 text-dark-${btnColor}11 border border-dark-${btnColor}10 hover:bg-dark-${btnColor}3 hover:text-dark-${btnColor}10 hover:border-dark-${btnColor}9`;
};

function coloredButton(color: buttonColors) {
    return `grid place-items-center ${addColours(
        color
    )} transition duration-150`;
}

export type paddingTypes =
    | "small"
    | "medium"
    | "large"
    | "extra-large"
    | "2x-large"
    | any;

export type fontSize =
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | any;

export type fontWeight =
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black"
    | any;

function buttonPadding(padding: paddingTypes) {
    switch (padding) {
    case "small":
        return "py-[6px] px-3";
    case "medium":
        return "py-2 px-4";
    case "large":
        return "px-5 py-2";
    case "extra-large":
        return "px-6 py-2";
    case "2x-large":
        return "px-6 py-2";
    default:
        break;
    }
}

export function buttonStyled(
    font: fontSize,
    fontWeight: fontWeight,
    color: buttonColors,
    buttonSize: paddingTypes
) {
    return `font-${fontWeight} text-${font} ${coloredButton(
        color
    )} rounded-lg ${buttonPadding(buttonSize)}`;
}
