import { convertFileSrc } from '@tauri-apps/api/tauri';
import { styled } from '@twidge/config/stitches.config';
import { Element } from '@twidge/utils/elements/types';
import rspc from '@twidge/utils/query';
import { Resizable } from 're-resizable';
import { useState } from 'react';

const Root = styled('div', {
	padding: '12px',
	background: '$backgroundColor',
	border: '1px solid $surface1',
	cursor: 'grab',
	borderRadius: '8px',
	fontWeight: 400,
	fontSize: '14px',
	lineHeight: '24px',
	letterSpacing: '0.2px',

	img: {
		borderRadius: '4px',
	},
});

const Image = (element: Element) => {
	const { mutate } = rspc.useMutation('elements.resize');
	const [size, setSize] = useState({
		width: element.width === 'auto' ? 'auto' : element.width + 'px',
		height: element.height === 'auto' ? 'auto' : element.height + 'px',
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
					width: ref.clientWidth + 'px',
					height: ref.clientHeight + 'px',
				});
			}}
			size={{
				height: size.height,
				width: size.width,
			}}
		>
			<Root
				css={{
					height: size.height,
					width: size.width,
				}}
			>
				<img
					height={size.height === 'auto' ? size.height : size.height + 'px'}
					width={size.width}
					src={convertFileSrc(element.content)}
					alt=""
				/>
			</Root>
		</Resizable>
	);
};

export default Image;
