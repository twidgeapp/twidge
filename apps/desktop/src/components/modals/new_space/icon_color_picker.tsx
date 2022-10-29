import { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import useClickOutside from "../../../hooks/useClickOutside";
import { IconPlus } from "@tabler/icons";

interface Props {
	color: string;
	setColor: (color: string) => void;
}

const IconColorPicker = (props: Props) => {
	const [open, setOpen] = useState(false);
	const color_ref = useRef();

	useClickOutside(color_ref, (e: any) => {
		setOpen(false);
	});

	return (
		<div className="relative text-white">
			<div
				className="rounded-full !w-[18px] !h-[18px] border border-text/10 grid place-items-center cursor-pointer"
				onClick={() => {
					setOpen(true);
				}}
			>
				<IconPlus size={10} />
			</div>
			{open && (
				<div
					style={{
						opacity: open ? 1 : 0,
					}}
					className="absolute top-8 z-50 transition-opacity duration-150"
					// @ts-ignore
					ref={color_ref}
				>
					<HexColorPicker
						color={props.color}
						onChange={(color) => {
							props.setColor(color);
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default IconColorPicker;
