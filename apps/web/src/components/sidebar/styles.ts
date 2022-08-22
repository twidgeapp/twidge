import { styled } from '@twidge/config/stitches.config';

export const StyledSpace = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '9px',
	border: 'none',
	borderRadius: '12px',
	transition: 'background-color 0.2s ease-in-out',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '$surface1',
	},
});

export const MainSection = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
	alignItems: 'center',
	paddingLeft: '2px',
	paddingRight: '2px',
});

const Root = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'spaceBetween',
	alignItems: 'center',
	padding: '12px',
	gap: '10px',
	height: '150vh',
	borderRight: '1px solid $surface1',
	maxHeight: '100vh',
});

export const Divider = styled('div', {
	width: '100%',
	height: '1px',
	borderTop: '1px solid $lavender',
});

export const ThemeButton = styled('button', {
	all: 'unset',
	border: 'none',
	backgroundColor: '$surface1',
	color: '$text1',
	padding: '9px',
	borderRadius: '12px',
	transition: 'background-color 0.2s ease-in-out',
	cursor: 'pointer',

	position: 'absolute',
	bottom: '12px',
	width: '32px',
	height: '32px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	'&:hover': {
		backgroundColor: '$surface2',
	},
});

export default Root;
