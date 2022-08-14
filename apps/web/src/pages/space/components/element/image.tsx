import { styled } from '@twidge/config/stitches.config';
import { useState } from 'react';
import { Resizable, ResizableBox } from 'react-resizable';

const Root = styled('div', {
	padding: '12px',
	background: '$backgroundColor',
	border: '1px solid $surface1',
	cursor: 'grab',
	borderRadius: '8px',
	fontWeight: 400,
	fontSize: '14px',
	lineHeight: '24px',
	width: '100%',
	height: '100%',
	letterSpacing: '0.2px',

	img: {
		borderRadius: '4px',
	},
});

const Image = ({ content }: { content: string }) => {
	const [size, setSize] = useState({ width: 200, height: 200 });

	return (
		<ResizableBox
			width={size.width}
			height={size.height}
			onResize={(e, { size }) => {
				setSize({ height: size.height, width: size.width });
			}}
		>
			<Root>
				<img src={content} alt="" width={size.width} height={size.height} />
			</Root>
		</ResizableBox>
	);
};

export default Image;
