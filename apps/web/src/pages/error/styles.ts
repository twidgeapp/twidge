import { styled } from '@twidge/config/stitches.config';
import { motion } from 'framer-motion';

export const Root = styled(motion.div, {
	width: '100vw',
	height: '100vh',
	overflow: 'hidden',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'.body': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
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

export const Buttons = styled('button', {
	padding: '8px 12px',
	background: '$pink',
	border: 'none',
	color: '$backgroundColor',
	borderRadius: '4px',
	position: 'fixed',
	cursor: 'pointer',
});
