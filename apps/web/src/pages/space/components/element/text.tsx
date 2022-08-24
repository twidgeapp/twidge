import { styled } from '@twidge/config/stitches.config';

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
	return <Root>{content}</Root>;
};

export default Text;
