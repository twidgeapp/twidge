import { convertFileSrc } from '@tauri-apps/api/tauri';
import { styled } from '@twidge/config/stitches.config';

const Root = styled('div', {
	padding: '12px',
	background: '$backgroundColor',
	border: '1px solid $surface1',
	cursor: 'grab',
	borderRadius: '8px',
	fontWeight: 400,
	fontSize: '14px',
	lineHeight: '24px',
	width: '400px',
	height: '400px',
	letterSpacing: '0.2px',

	img: {
		borderRadius: '4px',
	},
});

const Image = ({ content }: { content: string }) => {
	return (
		<Root>
			<img
				src={convertFileSrc(content)}
				alt=""
				width={'400px'}
				height={'400px'}
			/>
		</Root>
	);
};

export default Image;
