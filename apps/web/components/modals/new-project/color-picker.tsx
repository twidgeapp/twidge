import { HslColorPicker } from 'react-colorful';
import React, { useEffect } from 'react';
import useOnClickOutside from '@twidge/utils/hooks/useClickOutside';

interface Props {
    color: number;
    setColor: (color: number) => void;
    text: string;
}

const ColorPicker = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);
    useOnClickOutside(ref, () => setOpen(false));

    useEffect(() => {
        document.body.style.setProperty(
            `--${props.text.toLowerCase()}`,
            `${props.color}`
        );
    }, [props.color]);

    return (
        <div className="flex w-full justify-between col-span-1 relative">
            <span className="text-sm">{props.text}</span>
            <button
                onClick={() => setOpen(!open)}
                className="p-1 w-[50%] rounded-sm border border-text/10"
                style={{
                    backgroundColor: `hsl(${props.color}, 100%, 50%)`,
                }}
            ></button>

            {open && (
                <div
                    ref={ref}
                    className="absolute top-12 left-0 w-full h-full z-10"
                >
                    <HslColorPicker
                        color={{ h: props.color, l: 100, s: 50 }}
                        onChange={(e) => {
                            props.setColor(e.h);
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
