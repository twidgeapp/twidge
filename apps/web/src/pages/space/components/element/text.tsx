import { styled } from '@twidge/config/stitches.config';
import { useState } from 'react';
import { Resizable, ResizableBox } from 'react-resizable';

const Root = styled('div', {
	padding: '24px',
	maxWidth: '500px',
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

const Text = ({ content }: { content: string }) => {
	const [size, setSize] = useState({ width: 400, height: 200 });

	return <Root>{content}</Root>;
};

export default Text;
