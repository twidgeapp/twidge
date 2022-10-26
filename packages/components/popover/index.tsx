import * as PopoverPrimitive from "@radix-ui/react-dialog";
import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import useClickOutside from "../hooks/useClickOutside";

interface Props {
	children: React.ReactNode[];
}

const Popover = (props: Props) => {
	const [open, setOpen] = React.useState(false);
	const ref = useRef<HTMLDivElement>(null);
	useClickOutside(ref, () => setOpen(false));

	return (
		<div className="relative">
			<button onClick={() => setOpen(true)}>{props.children[0]}</button>
			<div
				ref={ref}
				style={{
					opacity: open ? 1 : 0,
					pointerEvents: open ? "all" : "none",
				}}
				className="absolute top-10 transition-opacity duration-150 z-50"
			>
				{props.children[1]}
			</div>
			<div
				className="w-0 h-0 hidden"
				id="popover-close"
				onClick={() => setOpen(false)}
			></div>
		</div>
	);
};

export default Popover;
