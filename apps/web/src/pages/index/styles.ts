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

export { Image, Root };
