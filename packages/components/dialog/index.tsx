import tw from "tailwind-styled-components";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import React from "react";

interface Props {
	children: React.ReactNode[];
}

const StyledOverlay = tw(
	DialogPrimitives.Overlay,
)`bg-app-bg/90 w-screen h-screen absolute top-0 modal-overlay-animation`;
const StyledComponent = tw(
	DialogPrimitives.Content,
)`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 modal-content-animation`;

const DialogComponent = (props: Props) => {
	return (
		<DialogPrimitives.Root defaultOpen={true}>
			<DialogPrimitives.Trigger>{props.children[0]}</DialogPrimitives.Trigger>
			<DialogPrimitives.Portal>
				<StyledOverlay />
				<StyledComponent>{props.children[1]}</StyledComponent>
			</DialogPrimitives.Portal>
		</DialogPrimitives.Root>
	);
};

export default DialogComponent;
