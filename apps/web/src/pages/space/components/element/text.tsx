import { styled } from '@twidge/config/stitches.config';
import { Element } from '@twidge/utils/elements/types';
import rspc from '@twidge/utils/query';
import { Resizable } from 're-resizable';
import { useState } from 'react';

const Root = styled('div', {
	padding: '24px',
	background: '$backgroundColor',
	border: '1px solid $surface1',
	cursor: 'grab',
	borderRadius: '8px',
	fontWeight: 400,
	fontSize: '14px',
	lineHeight: '24px',
	whiteSpace: 'pre-line',
	letterSpacing: '0.2px',
});

const Text = (element: Element) => {
	const { mutate } = rspc.useMutation('elements.resize');
	const [size, setSize] = useState({
		width: element.width,
		height: element.height,
	});

	return (
		<Resizable
			onResizeStop={(e, direction, ref, d) => {
				mutate({
					id: element.id,
					height: ref.clientHeight,
					width: ref.clientWidth,
				});
				setSize({
					width: size.width + d.width,
					height: size.height + d.height,
				});
			}}
			size={{
				height: size.height === 'auto' ? size.height : size.height + 'px',
				width: size.width === 'auto' ? size.width : size.width + 'px',
			}}
		>
			<Root
			// css={{
			// 	height: size.height,
			// 	width: size.width,
			// }}
			>
				{element.content} {element.height}
			</Root>
		</Resizable>
	);
};

export default Text;
