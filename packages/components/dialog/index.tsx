import React from "react";
import styled, { keyframes } from "@twidge/config/stitches.config";
import { blackA } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const overlayShow = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 0.5 },
});

const contentShow = keyframes({
	"0%": { opacity: 0, transform: "translate(-50%, -90%) scale(.9)" },
	"100%": { opacity: 0.9, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
	backgroundColor: blackA.blackA9,
	opacity: 0.5,
	position: "fixed",
	inset: 0,
	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
});

const StyledContent = styled(DialogPrimitive.Content, {
	backgroundColor: "$violet1",
	border: "1px solid $violet3",
	opacity: 0.9,
	backdropFilter: "blur(8px)",
	borderRadius: 6,
	boxShadow:
		"hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90vw",
	maxWidth: "450px",
	maxHeight: "85vh",
	padding: 25,
	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
	"&:focus": { outline: "none" },
});

const CloseButton = styled("button", {
	all: "unset",
	position: "absolute",
	top: "12px",
	right: "12px",
	padding: "8px",
	display: "grid",
	placeItems: "center",
	borderRadius: "8px",
	border: "1px solid $violet5",
	transition: "0.15s all ease-in-out",
	cursor: "pointer",

	"&:hover": {
		backgroundColor: "$violet3",
	},
});

function Content({ children, ...props }) {
	return (
		<DialogPrimitive.Portal>
			<StyledOverlay />
			<StyledContent {...props}>{children}</StyledContent>
		</DialogPrimitive.Portal>
	);
}

interface IDialogProps {
	children: React.ReactNode[];
	autoOpen?: boolean;
}

const Dialog = (props: IDialogProps) => (
	<DialogPrimitive.Root open={props.autoOpen}>
		<DialogPrimitive.Trigger asChild>
			{!props.autoOpen && <>{props.children[0]}</>}
		</DialogPrimitive.Trigger>
		<Content>
			{props.children[1]}
			{!props.autoOpen && (
				<DialogPrimitive.Close asChild>
					<CloseButton aria-label="Close">
						<Cross2Icon />
					</CloseButton>
				</DialogPrimitive.Close>
			)}
		</Content>
	</DialogPrimitive.Root>
);

export default Dialog;
