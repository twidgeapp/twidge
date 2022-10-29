import { useRef, useState } from "react";
import { HslColorPicker } from "react-colorful";
import useClickOutside from "../../../hooks/useClickOutside";

interface Props {
    text: string;
    setColor: (color: number) => void;
}

const ColorPicker = (props: Props) => {
    const [color, setColor] = useState({ h: 250, s: 50, l: 50 });
    const [open, setOpen] = useState(false);
    const color_ref = useRef();

    useClickOutside(color_ref, (e: any) => {
        setOpen(false);
    });

    return (
        <div className="relative text-white">
            <div className="w-full flex gap-2">
                <h1 className="w-20 text-sm">{props.text}</h1>
                <div
                    className="rounded-[4px] border border-text/10"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    <div
                        className="w-28 h-5 rounded-[4px] cursor-pointer"
                        style={{
                            background: `hsla(${color.h}, ${color.s}%, ${color.l}%, 1)`,
                        }}
                    />
                </div>
            </div>
            {open && (
                // @ts-ignore
                <div className="absolute top-8 z-50" ref={color_ref}>
                    <HslColorPicker
                        color={color}
                        onChange={(color) => {
                            document.body.style.setProperty(
                                `--${props.text.toLowerCase()}`,
                                color.h.toString()
                            );
                            setColor(color);
                            props.setColor(color.h);
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
