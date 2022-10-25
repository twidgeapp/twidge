import * as PopoverPrimitive from "@radix-ui/react-dialog";
import React from "react";
import tw from "tailwind-styled-components";
interface Props {
	children: React.ReactNode[];
}

const StyledContent = tw(PopoverPrimitive.Content)`w-96 h-5`;

export default (props: Props) => (
	<PopoverPrimitive.Root>
		<PopoverPrimitive.Trigger asChild={true}>
			{props.children[0]}
		</PopoverPrimitive.Trigger>
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content className='w-96 h-5'>
				{props.children[1]}
				<PopoverPrimitive.Close />
			</PopoverPrimitive.Content>
		</PopoverPrimitive.Portal>
	</PopoverPrimitive.Root>
);
