import { useCallback, useState } from "react";
import IconColorPicker from "./icon_color_picker";
import * as Icons from "@tabler/icons";

const colors = [
    "#3576cc",
    "#512fc2",
    "#ba35bd",
    "#bd3557",
    "#bda235",
    "#35bd5e",
];

interface Props {
    color: string;
    setColor: (color: string) => void;
    icon: string;
    setIcon: (icon: string) => void;
}

const IconPicker = (props: Props) => {
    const [query, setQuery] = useState("");
    const allIcons = Object.keys(Icons);

    const getIcons = useCallback(
        (query: string) => {
            if (query === "") {
                return allIcons
                    .splice(0, 42)
                    .reduce((acc: any, key: any, index: any) => {
                        const batchIndex = Math.floor(index / 6);
                        if (!acc[batchIndex]) {
                            acc[batchIndex] = [];
                        }
                        acc[batchIndex].push(key);
                        return acc;
                    }, []);
            } else {
                let value = allIcons.filter((icon) => {
                    return icon
                        .replace("Icon", "")
                        .toLowerCase()
                        .includes(query.toLowerCase());
                });

                if (value.length === 0) {
                    value = allIcons;
                }

                return value
                    .splice(0, 42)
                    .reduce((acc: any, key: any, index: any) => {
                        const batchIndex = Math.floor(index / 6);
                        if (!acc[batchIndex]) {
                            acc[batchIndex] = [];
                        }
                        acc[batchIndex].push(key);
                        return acc;
                    }, []);
            }
        },
        [query]
    );

    return (
        <div className="w-48 h-56 rounded-xl bg-app-overlay/80 backdrop-blur-xl text-text relative top-0 border border-text/10">
            <div className="flex gap-2 p-2 border-b border-b-text/10 pb-2">
                {colors.map((color) => (
                    <div
                        onClick={() => props.setColor(color)}
                        className="!w-4 !h-4 rounded-full cursor-pointer"
                        style={{ background: color }}
                    />
                ))}
                <div className="w-4 h-4 rounded-full cursor-pointer display-grid">
                    <IconColorPicker
                        color={props.color}
                        setColor={props.setColor}
                    />
                </div>
            </div>
            <input
                onInput={(e) => setQuery(e.currentTarget.value)}
                type="text"
                className="w-full h-6 bg-transparent border-b border-b-text/10 px-2 text-[12px] leading-3 py-1 outline-none"
                placeholder="Search for an icon..."
            />
            <div className="overflow-y-auto h-40">
                {getIcons(query).map((batch: any, index: any) => (
                    <div key={index} className="flex gap-2 p-2">
                        {batch.map((icon: any, idx: number) => {
                            // @ts-ignore
                            const Icon = Icons[icon];
                            return (
                                <div
                                    onMouseOver={() => console.log(icon)}
                                    key={idx}
                                    onClick={() => {
                                        props.setIcon(icon);
                                        document
                                            .getElementById("popover-close")
                                            ?.click();
                                    }}
                                    className="!w-6 !h-6 rounded-lg place-items-center grid cursor-pointer hover:bg-app-bg"
                                >
                                    <Icon size={16} color={props.color} />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconPicker;
