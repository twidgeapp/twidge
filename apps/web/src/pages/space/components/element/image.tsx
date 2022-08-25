import { convertFileSrc } from '@tauri-apps/api/tauri';
import { styled } from '@twidge/config/stitches.config';
import { Resizable } from 're-resizable';

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

const Image = ({ content }: { content: string }) => {
	return (
		<Resizable defaultSize={{ height: 'auto', width: 'auto' }}>
			<Root>
				<img
					src={convertFileSrc(content)}
					alt=""
					width={'100%'}
					height={'100%'}
				/>
			</Root>
		</Resizable>
	);
};

export default Image;
