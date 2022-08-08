import { styled } from '@twidge/config/stitches.config';
import { motion } from 'framer-motion';

const Root = styled(motion.div, {
	width: '100vw',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'.body': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '0px',
		zIndex: 10,
		position: 'relative',
		'.header': {
			margin: '0px',
			fontFamily: 'Open Sans',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '48px',
			lineHeight: '65px',
		},

		'.description': {
			fontStyle: 'normal',
			fontWeight: '300',
			margin: '0px',
			marginTop: '12px',
			fontSize: '24px',
			lineHeight: '29px',
		},
	},
});

const Image = styled(motion.img, {
	userSelect: 'none',
	width: '2000px',
	height: '2000px',
	pointerEvents: 'none',
	zIndex: -10,
	position: 'absolute',
});

const Controls = styled(motion.div, {
	position: 'fixed',
	top: '12px',
	right: '12px',
	backgroundColor: 'transparent',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '12px',
	gap: '12px',

	maxWidth: '44px',
	maxHeight: '44px',
	border: '1px solid $surface1',
	borderRadius: '8px',
	color: '$blue',
	transition: 'all 0.2s ease-in-out',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '$surface1',
	},
});

const NewButton = styled(motion.button, {
	border: '2px solid $surface1',
	background: 'transparent',
	color: '$blue',
	borderRadius: '12px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '12px',
	marginTop: '12px',
	gap: '12px',
	fontWeight: '600',
	fontSize: '18px',
	lineHeight: '25px',
	transition: 'all 0.2s ease-in-out',
	cursor: 'pointer',

	'&:hover': {
		backgroundColor: '$surface1',
	},
});

export { Image, Root, Controls, NewButton };
