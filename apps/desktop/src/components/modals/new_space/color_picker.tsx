import Popover from "@twidge/components/popover";
import { useEffect, useRef, useState } from "react";
import { HslColorPicker } from "react-colorful";
import useClickOutside from "../../../hooks/useClickOutside";

interface Props {
	text: string;
	setColor: (color: string) => void;
}

const ColorPicker = (props: Props) => {
	const [color, setColor] = useState({ h: 250, s: 50, l: 50 });
	const [open, setOpen] = useState(false);
	const color_ref = useRef();

	useClickOutside(color_ref, (e) => {
		setOpen(false);
	});

	return (
		<div className="relative text-white">
			<div className="w-full flex gap-2">
				<h1 className="w-20 text-sm font-medium">{props.text}</h1>
				<div
					className="rounded-lg border border-text/10"
					onClick={() => {
						setOpen(true);
					}}
				>
					<div
						className="w-28 h-full rounded-lg"
						style={{
							background: `hsla(${color.h}, ${color.s}%, ${color.l}%, 1)`,
						}}
					></div>
				</div>
			</div>
			{open && (
				<div className="absolute top-8 z-50" ref={color_ref}>
					<HslColorPicker
						color={color}
						onChange={(color) => {
							setColor(color);
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default ColorPicker;
