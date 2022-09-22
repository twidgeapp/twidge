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
    switch (btnColor) {
    case "tomato":
        return "bg-dark-tomato4 text-dark-tomato11 border border-dark-tomato10 hover:bg-dark-tomato3 hover:text-dark-tomato10 hover:border-dark-tomato9";
    case "red":
        return "bg-dark-red4 text-dark-red11 border border-dark-red10 hover:bg-dark-red3 hover:text-dark-red10 hover:border-dark-red9";
    case "crimson":
        return "bg-dark-crimson4 text-dark-crimson11 border border-dark-crimson10 hover:bg-dark-crimson3 hover:text-dark-crimson10 hover:border-dark-crimson9";
    case "pink":
        return "bg-dark-pink4 text-dark-pink11 border border-dark-pink10 hover:bg-dark-pink3 hover:text-dark-pink10 hover:border-dark-pink9";
    case "plum":
        return "bg-dark-plum4 text-dark-plum11 border border-dark-plum10 hover:bg-dark-plum3 hover:text-dark-plum10 hover:border-dark-plum9";
    case "gray":
        return "bg-dark-gray4 text-dark-gray11 border border-dark-gray10 hover:bg-dark-gray3 hover:text-dark-gray10 hover:border-dark-gray9";
    case "purple":
        return "bg-dark-purple4 text-dark-purple11 border border-dark-purple10 hover:bg-dark-purple3 hover:text-dark-purple10 hover:border-dark-purple9";
    case "violet":
        return "bg-dark-violet4 text-dark-violet11 border border-dark-violet10 hover:bg-dark-violet3 hover:text-dark-violet10 hover:border-dark-violet9";
    case "blue":
        return "bg-dark-blue4 text-dark-blue11 border border-dark-blue10 hover:bg-dark-blue3 hover:text-dark-blue10 hover:border-dark-blue9";
    case "sky":
        return "bg-dark-sky4 text-dark-sky11 border border-dark-sky10 hover:bg-dark-sky3 hover:text-dark-sky10 hover:border-dark-sky9";
    case "cyan":
        return "bg-dark-cyan4 text-dark-cyan11 border border-dark-cyan10 hover:bg-dark-cyan3 hover:text-dark-cyan10 hover:border-dark-cyan9";
    case "yellow":
        return "bg-dark-yellow4 text-dark-yellow11 border border-dark-yellow10 hover:bg-dark-yellow3 hover:text-dark-yellow10 hover:border-dark-yellow9";
    case "orange":
        return "bg-dark-orange4 text-dark-orange11 border border-dark-orange10 hover:bg-dark-orange3 hover:text-dark-orange10 hover:border-dark-orange9";
    }
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
    let fontSizes = "";
    switch (font) {
    case "xs":
        fontSizes = "text-xs";
        break;
    case "sm":
        fontSizes = "text-sm";
        break;
    case "base":
        fontSizes = "text-base";
        break;
    case "lg":
        fontSizes = "text-lg";
        break;
    case "xl":
        fontSizes = "text-xl";
        break;
    case "2xl":
        fontSizes = "text-2xl";
        break;
    case "3xl":
        fontSizes = "text-3xl";
        break;
    case "4xl":
        fontSizes = "text-4xl";
        break;
    case "5xl":
        fontSizes = "text-5xl";
        break;
    case "6xl":
        fontSizes = "text-6xl";
        break;
    case "7xl":
        fontSizes = "text-7xl";
        break;
    case "8xl":
        fontSizes = "text-8xl";
        break;
    case "9xl":
        fontSizes = "text-9xl";
        break;
    }
    return `font-${fontWeight} ${fontSizes} ${coloredButton(
        color
    )} rounded-lg ${buttonPadding(buttonSize)}`;
}
