import React from "react";
import {
    buttonColors,
    buttonStyled,
    fontSize,
    fontWeight,
    paddingTypes,
} from "./styled";
import clsx from "clsx";

export const Button = ({
    children,
    font,
    fontWeight,
    color,
    buttonSize,
    onClick,
    ...props
}: {
    children: React.ReactNode;
    font: fontSize;
    fontWeight: fontWeight;
    buttonSize: paddingTypes;
    color: buttonColors;
    onClick: () => void;
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={clsx(buttonStyled(font, fontWeight, color, buttonSize))}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
